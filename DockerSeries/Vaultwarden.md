---
lastUpdated: 2025-08-06T14:17:00+8:00
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

```shell
docker pull vaultwarden/server:latest
docker pull nginx:current-alpine
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  80   | 网页界面 |
|   TCP    |  443  | 网页界面 |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir vaultwarden

# 进入工作目录
cd vaultwarden

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml

# 创建nginx配置文件
touch vaultwarden.conf

# 编辑nginx配置文件
nano vaultwarden.conf

# 创建ssl目录
mkdir ssl

# 进入ssl目录
cd ssl

# 自签名openssl证书和私钥
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout privkey.key -out cert.crt -days 3650
```

### `compose.yml`

<<< @/DockerSeries/Vaultwarden.yml

### `vaultwarden.conf`

<<< @/DockerSeries/Vaultwarden.conf{nginx}

## 开始运行

```shell
# 前往工作目录
cd /srv/vaultwarden

# 开始运行
docker compose up -d
```

在浏览器访问：`https://服务器ip地址`，进入页面。因为证书与私钥为自签名，浏览器会警告网页不安全，在浏览器中选择信任该网页，然后即可正常访问。

## 维护服务

```shell
# 停止服务
cd /srv/vaultwarden
docker compose down

# 更新服务
cd /srv/vaultwarden
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/vaultwarden
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /srv/vaultwarden
tar -xzf data.tar.gz data/
```
