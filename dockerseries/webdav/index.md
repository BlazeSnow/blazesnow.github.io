---
title: Webdav | Docker系列
lastUpdated: 2025-08-06T14:18:00+8:00
description: 使用Docker Compose部署WebDAV文件服务器的完整教程。
---

# <TitleIcon icon="file" /> Webdav

## 前言

本文介绍使用`bytemark/webdav`在Ubuntu服务器上搭建Webdav文件服务器，请先根据本章前言完成环境的搭建。

`bytemark/webdav`地址：<https://hub.docker.com/r/bytemark/webdav>

## 拉取镜像

```bash
sudo docker pull bytemark/webdav:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  80   | 数据传输 |

## 配置文件

```shell
# 创建并进入工作目录
sudo mkdir -p /srv/webdav && cd /srv/webdav

# 创建并编辑docker配置文件
sudo nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/dockerseries/webdav/docker-compose.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/webdav

# 开始运行
sudo docker compose up -d

# 查看容器日志（按Ctrl+C退出）
sudo docker compose logs -f
```

运行成功后，即可使用`http://服务器ip地址`连接服务器

## 维护服务

> 服务的停止、更新与数据备份/恢复操作，请查阅[维护服务](/dockerseries/maintain)。
