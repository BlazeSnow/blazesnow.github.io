---
lastUpdated: 2025-07-09T22:05:00+8:00
description: 搭建NFS服务器的教程
---

# NFS | Docker系列

## 前言

本文介绍使用`itsthenetwork/nfs-server-alpine`在Ubuntu服务器上搭建NFS文件服务器，请先根据本章前言完成环境的搭建。

`itsthenetwork/nfs-server-alpine`地址：

- <https://hub.docker.com/r/itsthenetwork/nfs-server-alpine>
- <https://github.com/sjiveson/nfs-server-alpine>

## 拉取镜像

```shell
docker pull itsthenetwork/nfs-server-alpine:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 2049  | 数据传输 |

## 配置文件

```shell
# 前往var目录
cd /var

# 创建工作目录
mkdir nfs

# 进入工作目录
cd nfs

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml
```

### `compose.yml`

<<< @/DockerSeries/NFS.yml

## 开始运行

```shell
# 前往工作目录
cd /var/nfs

# 开始运行
docker compose up -d

# 客户端操作
# 安装nfs客户端
sudo apt install nfs-common
# 创建目录
mkdir -p /var/nfs
# 连接服务器
mount 服务器ip地址:/ /var/nfs
# 断开连接服务器
umount -l /var/nfs
```

## 维护服务

```shell
# 停止服务
cd /var/nfs
docker compose down

# 更新服务
cd /var/nfs
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /var/nfs
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /var/nfs
tar -xzf data.tar.gz data/
```
