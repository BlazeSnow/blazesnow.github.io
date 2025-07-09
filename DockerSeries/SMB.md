---
lastUpdated: 2025-07-09T22:18:00+8:00
description: 搭建SMB服务器的教程
---

# SMB | Docker系列

## 前言

本文介绍使用`dockurr/samba`在Ubuntu服务器上搭建SMB文件服务器，请先根据本章前言完成环境的搭建。

`dockurr/samba`地址：<https://hub.docker.com/r/dockurr/samba>

## 拉取镜像

```bash
docker pull dockurr/samba
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  445  | 数据传输 |

## 配置文件

```shell
# 前往var目录
cd /var

# 创建工作目录
mkdir samba

# 进入工作目录
cd samba

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml
```

### `compose.yml`

<<< @/DockerSeries/SMB.yml

## 开始运行

```shell
# 前往工作目录
cd /var/samba

# 开始运行
docker compose up -d
```

运行成功后，即可使用`\\服务器ip地址\Data`连接服务器

## 维护服务

```shell
# 停止服务
cd /var/samba
docker compose down

# 更新服务
cd /var/samba
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /var/samba
tar -czf storage.tar.gz storage/

# 解压缩数据文件夹
cd /var/samba
tar -xzf storage.tar.gz storage/
```
