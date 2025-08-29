---
lastUpdated: 2025-08-29T09:08:00+8:00
description: 使用fatedier/frp搭建端口转发客户端
---

# 端口转发客户端 | Docker系列

## 前言

本文介绍使用`fatedier/frp`在Ubuntu服务器上搭建端口转发客户端，请先根据本章前言完成环境的搭建。

> [!TIP]
> 本文服务以Caddy作为示例

`fatedier/frp`地址：

- <https://gofrp.org/zh-cn/>
- <https://github.com/fatedier/frp>
- <https://hub.docker.com/r/snowdreamtech/frps>

## 拉取镜像

```shell
docker pull snowdreamtech/frpc:alpine
```

## 开放端口

> 本文服务无需开放端口

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir frpc

# 进入工作目录
cd frpc

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml

# 创建frpc配置文件
touch frpc.toml

# 编辑frpc配置文件
nano frpc.toml

# 创建caddy配置文件
touch Caddyfile

# 编辑caddy配置文件
nano Caddyfile
```

### `docker-compose.yml`

<<< @/DockerSeries/Frpc.yml

### `frpc.toml`

<<< @/DockerSeries/Frpc.toml{1,3}

### `Caddyfile`

<<< @/DockerSeries/Frpc.Caddyfile

## 开始运行

```shell
# 前往工作目录
cd /srv/frps

# 开始运行
docker compose up -d
```

运行成功后，即可使用`http://服务端ip:8080`连接服务器

## 维护服务

```shell
# 停止服务
cd /srv/frps
docker compose down

# 更新服务
cd /srv/frps
docker compose down
docker compose pull
docker compose up -d
```
