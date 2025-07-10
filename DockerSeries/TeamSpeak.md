---
lastUpdated: 2025-07-09T22:22:00+8:00
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

```shell
docker pull teamspeak:latest
```

## 开放端口

| 端口类型 | 端口  |  端口用途  |
| :------: | :---: | :--------: |
|   UDP    | 9987  |  语音通信  |
|   TCP    | 10011 | 服务器查询 |
|   TCP    | 30033 |  文件传输  |

## 配置文件

```shell
# 前往var目录
cd /var

# 创建工作目录
mkdir teamspeak

# 进入工作目录
cd teamspeak

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml
```

### `compose.yml`

<<< @/DockerSeries/TeamSpeak.yml

## 开始运行

```shell
# 前往工作目录
cd /var/teamspeak

# 开始运行
docker compose up
```

1. 记录Teamspeak输出的`loginname`、`password`、`apikey`和`token`，用于管理服务器
2. 按下`Ctrl`+`C`中止容器
3. 再次运行：`docker compose up -d`
4. 在Teamspeak客户端访问：`服务器ip地址`，进入服务器。

## 维护服务

```shell
# 停止服务
cd /var/teamspeak
docker compose down

# 更新服务
cd /var/teamspeak
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /var/teamspeak
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /var/teamspeak
tar -xzf data.tar.gz data/
```
