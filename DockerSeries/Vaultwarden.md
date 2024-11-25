---
lastUpdated: 2024-11-25T13:55:00+8:00
---

# 密码服务器 | Docker系列

## 前言

本文介绍使用```Vaultwarden```和```Nginx```在```Ubuntu```系统上搭建密码服务器，请先根据本章前言完成环境的搭建。

```Vaultwarden```网站：
- <https://github.com/dani-garcia/vaultwarden>
- <https://hub.docker.com/r/vaultwarden/server>

```Nginx```网站：
- <https://nginx.org/en/>
- <https://hub.docker.com/_/nginx>
- <https://github.com/nginx/nginx>

## 拉取镜像

```docker pull vaultwarden/server```

```docker pull nginx```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  80   | 网页界面 |
|   TCP    |  443  | 网页界面 |

## 配置文件

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir vaultwarden```
3. 进入工作目录：```cd vaultwarden```
4. 创建docker配置文件：```touch compose.yml```
5. 编辑docker配置文件：```nano compose.yml```
6. 创建nginx配置文件：```touch vaultwarden.conf```
7. 编辑nginx配置文件：```nano vaultwarden.conf```
8. 创建顶替nginx配置文件：```touch default```
9. 创建ssl目录：```mkdir ssl```
10. 进入ssl目录：```cd ssl```
11. 自签名openssl证书和私钥：```openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout privkey.pem -out cert.pem -days 3650```

### ```compose.yml```

```yml
services:
  vaultwarden:
    image: vaultwarden/server
    container_name: vaultwarden
    environment:
      - WEBSOCKET_ENABLED=true
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

### ```vaultwarden.conf```

```nginx
server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name _;

    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;

    location / {
        proxy_pass http://vaultwarden:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /notifications/hub {
        proxy_pass http://vaultwarden:3012;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    location /notifications/hub/negotiate {
        proxy_pass http://vaultwarden:80;
    }
}
```

## 开始运行

1. 前往工作目录：```cd /var/vaultwarden```
2. 开始运行：```docker compose up -d```或```docker-compose up -d```
3. 在浏览器访问：```https://服务器ip地址```，进入页面。因为证书与私钥为自签名，在浏览器中选择信任该网页，然后即可正常访问。

## 维护服务

### 停止服务

1. 前往工作文件夹：```cd /var/vaultwarden```
2. 中止Docker容器：```docker compose down```或```docker-compose down```

### 压缩数据文件夹

1. 前往工作目录：```cd /var/vaultwarden```
2. 压缩数据文件夹：```tar -czf data.tar.gz data/```

### 解压缩数据文件夹

1. 前往工作目录：```cd /var/vaultwarden```
2. 解压缩数据文件夹：```tar -xzf data.tar.gz data/```