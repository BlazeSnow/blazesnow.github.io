---
title: FTP | Docker系列
lastUpdated: 2025-08-06T14:10:00+8:00
description: 使用Docker Compose部署FTP文件服务器的完整教程。
---

# <TitleIcon icon="file" /> FTP

## 前言

本文介绍使用`fauria/vsftpd`在Ubuntu服务器上搭建FTP文件服务器，请先根据本章前言完成环境的搭建。

`fauria/vsftpd`地址：<https://hub.docker.com/r/fauria/vsftpd/>

## 拉取镜像

```shell
sudo docker pull fauria/vsftpd:latest
```

## 开放端口

| 端口类型 |    端口     | 端口用途 |
| :------: | :---------: | :------: |
|   TCP    |     20      | 数据传输 |
|   TCP    |     21      | 控制连接 |
|   TCP    | 21100-21110 | 被动模式 |

## 配置文件

```shell
# 创建并进入工作目录
sudo mkdir -p /srv/vsftpd && cd /srv/vsftpd

# 创建并编辑docker配置文件
sudo nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/dockerseries/ftp/docker-compose.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/vsftpd

# 开始运行
sudo docker compose up -d

# 查看容器日志（按Ctrl+C退出）
sudo docker compose logs -f
```

运行成功后，即可使用`ftp://服务器ip地址`连接服务器
