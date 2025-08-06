---
lastUpdated: 2025-08-06T14:16:00+8:00
description: 搭建消息推送器的教程
---

# 消息推送器 | Docker系列

## 前言

本文介绍使用`ntfy`在Ubuntu系统上搭建消息推送器，请先根据本章前言完成环境的搭建。

`ntfy`网站：

- <https://github.com/binwiederhier/ntfy>
- <https://hub.docker.com/r/binwiederhier/ntfy>
- <https://ntfy.sh/>

## 拉取镜像

```shell
docker pull binwiederhier/ntfy:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 2586  | 网页界面 |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir ntfy

# 进入工作目录
cd ntfy

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml

# 创建ntfy配置文件
touch server.yml

# 编辑ntfy配置文件
nano server.yml

# 创建ssl目录
mkdir ssl

# 进入ssl目录
cd ssl

# 自签名openssl证书和私钥
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout privkey.key -out cert.crt -days 3650
```

### `compose.yml`

<<< @/DockerSeries/Ntfy.yml

### `server.yml`

```yml
base-url: "http://127.0.0.1"
listen-https: ":2586"
key-file: "/var/ssl/privkey.key"
cert-file: "/var/ssl/cert.crt"
cache-file: "/var/cache/ntfy/cache.db"
attachment-cache-dir: "/var/cache/ntfy/attachments"
```

## 开始运行

```shell
# 前往工作目录
cd /srv/ntfy

# 开始运行
docker compose up -d
```

在浏览器访问：`https://服务器ip地址:2586`，进入页面。因为证书与私钥为自签名，浏览器会警告网页不安全，在浏览器中选择信任该网页，然后即可正常访问。

## 维护服务

```shell
# 停止服务
cd /srv/ntfy
docker compose down

# 更新服务
cd /srv/ntfy
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/ntfy
tar -czf cache.tar.gz cache/

# 解压缩数据文件夹
cd /srv/ntfy
tar -xzf cache.tar.gz cache/
```
