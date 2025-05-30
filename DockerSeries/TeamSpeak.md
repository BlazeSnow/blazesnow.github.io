---
lastUpdated: 2025-01-02T15:13:00+8:00
description: 搭建语音服务器的教程
---

# 语音服务器 | Docker系列

## 前言

本文介绍使用`TeamSpeak`在Ubuntu系统上搭建语音服务器，请先根据本章前言完成环境的搭建。

`TeamSpeak`网站：

- <https://teamspeak.com/zh-CN/>
- <https://hub.docker.com/_/teamspeak>
- <https://github.com/TeamSpeak-Systems/teamspeak-linux-docker-images>

## 拉取镜像

```bash
docker pull teamspeak
```

## 开放端口

| 端口类型 | 端口  |  端口用途  |
| :------: | :---: | :--------: |
|   UDP    | 9987  |  语音通信  |
|   TCP    | 10011 | 服务器查询 |
|   TCP    | 30033 |  文件传输  |

## 配置文件

1. 前往var目录：`cd /var`
2. 创建工作目录：`mkdir teamspeak`
3. 进入工作目录：`cd teamspeak`
4. 创建docker配置文件：`touch compose.yml`
5. 编辑docker配置文件：`nano compose.yml`

### `compose.yml`

```yml
services:
  teamspeak:
    image: teamspeak
    container_name: teamspeak
    restart: always
    ports:
      - "9987:9987/udp"
      - "10011:10011"
      - "30033:30033"
    environment:
      TS3SERVER_LICENSE: accept
    volumes:
      - ./data:/var/ts3server/
```

## 开始运行

1. 前往工作目录：`cd /var/teamspeak`
2. 首次运行：`docker compose up`或`docker-compose up`
3. 记录Teamspeak输出的`loginname`、`password`、`apikey`和`token`，用于管理服务器
4. 按下`Ctrl`+`C`中止容器
5. 再次运行：`docker compose up -d`或`docker-compose up -d`
6. 在Teamspeak客户端访问：`服务器ip地址`，进入服务器。

## 维护服务

### 停止服务

1. 前往工作文件夹：`cd /var/teamspeak`
2. 中止Docker容器：`docker compose down`或`docker-compose down`

### 压缩数据文件夹

1. 前往工作目录：`cd /var/teamspeak`
2. 压缩数据文件夹：`tar -czf data.tar.gz data/`

### 解压缩数据文件夹

1. 前往工作目录：`cd /var/teamspeak`
2. 解压缩数据文件夹：`tar -xzf data.tar.gz data/`
