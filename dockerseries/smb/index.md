---
title: SMB | Docker系列
lastUpdated: 2025-08-06T14:17:00+8:00
description: 使用Docker Compose部署SMB/Samba文件共享服务器的完整教程。
---

# <TitleIcon icon="file" /> SMB

## 前言

本文介绍使用`dockurr/samba`在Ubuntu服务器上搭建SMB文件服务器，请先根据本章前言完成环境的搭建。

`dockurr/samba`地址：<https://hub.docker.com/r/dockurr/samba>

## 拉取镜像

```shell
sudo docker pull dockurr/samba:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  445  | 数据传输 |

## 配置文件

```shell
# 创建并进入工作目录
sudo mkdir -p /srv/samba && cd /srv/samba

# 创建并编辑docker配置文件
sudo nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/dockerseries/smb/docker-compose.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/samba

# 开始运行
sudo docker compose up -d

# 查看容器日志（按Ctrl+C退出）
sudo docker compose logs -f
```

运行成功后，即可使用`\\服务器ip地址\Data`连接服务器
