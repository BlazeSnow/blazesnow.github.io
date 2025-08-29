---
lastUpdated: 2025-08-29T08:49:01+8:00
description: 使用fatedier/frp搭建端口转发服务器
---

# 端口转发服务器 | Docker系列

## 前言

本文介绍使用`fatedier/frp`在Ubuntu服务器上搭建端口转发服务器，请先根据本章前言完成环境的搭建。

`fatedier/frp`地址：

- <https://gofrp.org/zh-cn/>
- <https://github.com/fatedier/frp>
- <https://hub.docker.com/r/snowdreamtech/frps>

## 拉取镜像

```shell
docker pull snowdreamtech/frps:alpine
```

## 开放端口

| 端口类型 |    端口    |     端口用途     |
| :------: | :--------: | :--------------: |
|   TCP    |    7000    | 客户端连接服务器 |
|   TCP    | 需要的端口 |      自定义      |
|   UDP    | 需要的端口 |      自定义      |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir frps

# 进入工作目录
cd frps

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/DockerSeries/Frps.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/frps

# 开始运行
docker compose up -d
```

运行成功后，即可使用frp客户端连接服务器

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
