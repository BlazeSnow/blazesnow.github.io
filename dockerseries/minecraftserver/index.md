---
title: 我的世界服务器 | Docker系列
lastUpdated: 2025-08-06T14:11:00+8:00
description: （停止支持）使用Docker Compose部署Minecraft游戏服务器，支持自定义配置和模组。
---

# <TitleIcon src="/icon/minecraft.ico" /> 我的世界服务器 <StopSupportBadge />

> [!DANGER]
> 请改用新部署指南：[我的世界服务器部署指南](/mc/)

## 前言

本文介绍使用`itzg/minecraft-server`在Ubuntu服务器上搭建我的世界服务器，请先根据本章前言完成环境的搭建。

`itzg/minecraft-server`地址：

- <https://hub.docker.com/r/itzg/minecraft-server/>
- <https://github.com/itzg/docker-minecraft-server>
- <https://docker-minecraft-server.readthedocs.io/en/latest/>

## 拉取镜像

```shell
sudo docker pull itzg/minecraft-server:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 25565 | 数据传输 |

## 配置文件

```shell
# 创建并进入工作目录
sudo mkdir -p /srv/minecraft && cd /srv/minecraft

# 创建并编辑docker配置文件
sudo nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/dockerseries/minecraftserver/docker-compose.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/minecraft

# 开始运行
sudo docker compose up -d

# 查看容器日志（按Ctrl+C退出）
sudo docker compose logs -f

# 若显示以下内容，则运行成功
# Done! For help, type "help"

# 输入游戏命令“stop”
sudo docker exec mc rcon-cli stop
```

运行成功后，即可使用`服务器ip地址:25565`连接服务器
