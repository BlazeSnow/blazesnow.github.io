---
lastUpdated: 2024-12-15T22:13:00+8:00
description: 搭建密码服务器的教程
---

# 密码服务器 | Docker系列

## 前言

本文介绍使用`Vaultwarden`和`Nginx`在Ubuntu系统上搭建密码服务器，请先根据本章前言完成环境的搭建。

`Vaultwarden`网站：

- <https://github.com/dani-garcia/vaultwarden>
- <https://hub.docker.com/r/vaultwarden/server>

`Nginx`网站：

- <https://nginx.org/en/>
- <https://hub.docker.com/_/nginx>
- <https://github.com/nginx/nginx>

## 拉取镜像

```bash
docker pull vaultwarden/server
docker pull nginx
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  80   | 网页界面 |
|   TCP    |  443  | 网页界面 |

## 配置文件

1. 前往var目录：`cd /var`
2. 创建工作目录：`mkdir vaultwarden`
3. 进入工作目录：`cd vaultwarden`
4. 创建docker配置文件：`touch compose.yml`
5. 编辑docker配置文件：`nano compose.yml`
6. 创建nginx配置文件：`touch vaultwarden.conf`
7. 编辑nginx配置文件：`nano vaultwarden.conf`
8. 创建顶替nginx配置文件：`touch default`
9. 创建ssl目录：`mkdir ssl`
10. 进入ssl目录：`cd ssl`
11. 自签名openssl证书和私钥：`openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout privkey.key -out cert.crt -days 3650`

### `compose.yml`

```yml
services:
  vaultwarden:
    image: vaultwarden/server
    container_name: vaultwarden
    environment:
      - SIGNUPS_ALLOWED=true
    volumes:
      - ./data:/data
    restart: always
  nginx:
    image: nginx
    container_name: nginx-vaultwarden
    volumes:
      - ./vaultwarden.conf:/etc/nginx/conf.d/vaultwarden.conf:ro
      - ./default:/etc/nginx/sites-available/default:ro
      - ./ssl:/etc/nginx/ssl:ro
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - vaultwarden
    restart: always
```

### `vaultwarden.conf`

```nginx
server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name _;

    ssl_certificate /etc/nginx/ssl/cert.crt;
    ssl_certificate_key /etc/nginx/ssl/privkey.key;

    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://vaultwarden:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 文件树

```sh
│  compose.yml
│  default
│  vaultwarden.conf
│
└─ ssl
    ├─  cert.crt
    └─  privkey.key
```

## 开始运行

1. 前往工作目录：`cd /var/vaultwarden`
2. 开始运行：`docker compose up -d`或`docker-compose up -d`
3. 在浏览器访问：`https://服务器ip地址`，进入页面。因为证书与私钥为自签名，浏览器会警告网页不安全，在浏览器中选择信任该网页，然后即可正常访问。

## 维护服务

### 停止服务

1. 前往工作文件夹：`cd /var/vaultwarden`
2. 中止Docker容器：`docker compose down`或`docker-compose down`

### 压缩数据文件夹

1. 前往工作目录：`cd /var/vaultwarden`
2. 压缩数据文件夹：`tar -czf data.tar.gz data/`

### 解压缩数据文件夹

1. 前往工作目录：`cd /var/vaultwarden`
2. 解压缩数据文件夹：`tar -xzf data.tar.gz data/`
