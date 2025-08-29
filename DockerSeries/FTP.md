---
lastUpdated: 2025-08-06T14:10:00+8:00
description: 使用vsftpd搭建FTP文件服务器
---

# FTP | Docker系列

## 前言

本文介绍使用`fauria/vsftpd`在Ubuntu服务器上搭建FTP文件服务器，请先根据本章前言完成环境的搭建。

`fauria/vsftpd`地址：<https://hub.docker.com/r/fauria/vsftpd/>

## 拉取镜像

```shell
docker pull fauria/vsftpd:latest
```

## 开放端口

| 端口类型 |    端口     | 端口用途 |
| :------: | :---------: | :------: |
|   TCP    |     20      | 数据传输 |
|   TCP    |     21      | 控制连接 |
|   TCP    | 21100-21110 | 被动模式 |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir vsftpd

# 进入工作目录
cd vsftpd

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/DockerSeries/FTP.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/vsftpd

# 开始运行
docker compose up -d
```

运行成功后，即可使用`ftp://服务器ip地址`连接服务器

## 维护服务

```shell
# 停止服务
cd /srv/vsftpd
docker compose down

# 更新服务
cd /srv/vsftpd
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/vsftpd
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /srv/vsftpd
tar -xzf data.tar.gz data/
```
