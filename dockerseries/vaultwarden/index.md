---
title: 密码服务器 | Docker系列
lastUpdated: 2026-08-21T09:35:00+8:00
description: 使用Docker Compose部署Vaultwarden密码管理器，安全存储和管理密码。
---

# <TitleIcon icon="vaultwarden" /> 密码服务器

## 前言

本文介绍使用`Vaultwarden`和`Caddy`在Ubuntu系统上搭建密码服务器，请先根据本章前言完成环境的搭建。

`Vaultwarden`网站：

- <https://github.com/dani-garcia/vaultwarden>
- <https://hub.docker.com/r/vaultwarden/server>

`Caddy`网站：

- <https://caddyserver.com/>
- <https://github.com/caddyserver/caddy>
- <https://hub.docker.com/_/caddy>

## 拉取镜像

```shell
docker pull vaultwarden/server:alpine
docker pull caddy:alpine
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  80   | 网页界面 |
|   TCP    |  443  | 网页界面 |

## 配置文件

```shell
# 创建并进入工作目录
mkdir -p /srv/vaultwarden && cd /srv/vaultwarden

# 创建并编辑docker配置文件
nano docker-compose.yml

# 创建并编辑caddy配置文件
nano Caddyfile
```

### `docker-compose.yml`

<<< @/dockerseries/vaultwarden/docker-compose.yml

### `Caddyfile`

> [!TIP]
> 注意此处需要将域名与服务器IP地址进行绑定

<<< @/dockerseries/vaultwarden/Caddyfile

## 开始运行

```shell
# 前往工作目录
cd /srv/vaultwarden

# 开始运行
docker compose up -d
```

在浏览器访问Caddyfile中填写的域名（此处以`https://example.com/`为例），进入页面。如果不允许新用户注册，则通过管理员后台进行注册：`https://example.com/admin/`

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
