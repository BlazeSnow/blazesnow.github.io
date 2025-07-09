---
lastUpdated: 2025-07-09T22:15:00+8:00
description: 搭建SFTP服务器的教程
---

# SFTP | Docker系列

## 前言

本文介绍使用`atmoz/sftp`在Ubuntu服务器上搭建SFTP文件服务器，请先根据本章前言完成环境的搭建。

`atmoz/sftp`地址：<https://hub.docker.com/r/atmoz/sftp>

## 拉取镜像

```shell
docker pull atmoz/sftp
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 2222  | 数据传输 |

## 配置文件

```shell
# 前往var目录
cd /var

# 创建工作目录
mkdir sftp

# 进入工作目录
cd sftp

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml
```

### `compose.yml`

<<< @/DockerSeries/SFTP.yml{10}

## 开始运行

```shell
# 前往工作目录
cd /var/nfs

# 开始运行
docker compose up -d
```

运行成功后，即可使用`sftp://用户名@服务器ip地址:2222`连接服务器

## 维护服务

```shell
# 停止服务
cd /var/sftp
docker compose down

# 更新服务
cd /var/sftp
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /var/sftp
tar -czf home.tar.gz home/

# 解压缩数据文件夹
cd /var/sftp
tar -xzf home.tar.gz home/
```
