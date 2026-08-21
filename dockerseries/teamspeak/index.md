---
title: 语音服务器 | Docker系列
lastUpdated: 2025-08-06T14:17:00+8:00
description: 使用Docker Compose部署TeamSpeak语音服务器，实现团队语音通信。
---

# <TitleIcon icon="teamspeak" /> 语音服务器

## 前言

本文介绍使用`TeamSpeak`在Ubuntu系统上搭建语音服务器，请先根据本章前言完成环境的搭建。

`TeamSpeak`网站：

- <https://teamspeak.com/zh-CN/>
- <https://hub.docker.com/_/teamspeak>
- <https://github.com/TeamSpeak-Systems/teamspeak-linux-docker-images>

## 拉取镜像

```shell
sudo docker pull teamspeak:latest
```

## 开放端口

| 端口类型 | 端口  |  端口用途  |
| :------: | :---: | :--------: |
|   UDP    | 9987  |  语音通信  |
|   TCP    | 10011 | 服务器查询 |
|   TCP    | 30033 |  文件传输  |

## 配置文件

```shell
# 创建并进入工作目录
sudo mkdir -p /srv/teamspeak && cd /srv/teamspeak

# 创建并编辑docker配置文件
sudo nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/dockerseries/teamspeak/docker-compose.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/teamspeak

# 开始运行
sudo docker compose up -d

# 查看容器日志（按Ctrl+C退出）
sudo docker compose logs -f
```

1. 记录Teamspeak输出的`loginname`、`password`、`apikey`和`token`，用于管理服务器
2. 在Teamspeak客户端访问：`服务器ip地址`，进入服务器。
