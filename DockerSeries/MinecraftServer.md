---
lastUpdated: 2025-07-09T21:59:00+8:00
description: 搭建我的世界服务器的教程
---

# 我的世界服务器 | Docker系列

## 前言

本文介绍使用`itzg/minecraft-server`在Ubuntu服务器上搭建我的世界服务器，请先根据本章前言完成环境的搭建。

`itzg/minecraft-server`地址：

- <https://hub.docker.com/r/itzg/minecraft-server/>
- <https://github.com/itzg/docker-minecraft-server>
- <https://docker-minecraft-server.readthedocs.io/en/latest/>

## 拉取镜像

```shell
docker pull itzg/minecraft-server:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 25565 | 数据传输 |

## 配置文件

```shell
# 前往var目录
cd /var

# 创建工作目录
mkdir minecraft

# 进入工作目录
cd minecraft

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml
```

### `compose.yml`

<<< @/DockerSeries/MinecraftServer.yml

## 开始运行

```shell
# 前往工作目录
cd /var/minecraft

# 开始运行
docker compose up

# 若显示以下内容，则运行成功
# Done! For help, type "help"

# 停止服务器
stop

# 结束Docker服务
docker compose down

# 再次运行
docker compose up -d
```

运行成功后，即可使用`服务器ip地址:25565`连接服务器

## 维护服务

```shell
# 保存世界数据
docker exec minecraft rcon-cli save-all

# 停止服务器，注意：停止服务器后仍需停止Docker服务
docker exec minecraft rcon-cli stop

# 停止Docker服务
cd /var/minecraft
docker compose down

# 更新服务
cd /var/minecraft
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /var/minecraft
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /var/minecraft
tar -xzf data.tar.gz data/
```
