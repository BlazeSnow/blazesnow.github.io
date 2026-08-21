---
title: 智能家居中枢 | Docker系列
lastUpdated: 2025-08-06T14:10:00+8:00
description: 使用Docker Compose部署Home Assistant智能家居平台，统一管理各种智能设备。
---

# <TitleIcon icon="homeassistant" /> 智能家居中枢

## 前言

本文介绍使用`HomeAssistant`在Ubuntu系统上搭建智能家居中枢，请先根据本章前言完成环境的搭建。

`HomeAssistant`网站：

- <https://github.com/home-assistant>
- <https://hub.docker.com/r/homeassistant/home-assistant>
- <https://www.home-assistant.io/>

## 拉取镜像

```shell
sudo docker pull homeassistant/home-assistant:stable
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 8123  | 网页界面 |

## 配置文件

```shell
# 创建并进入工作目录
sudo mkdir -p /srv/homeassistant && cd /srv/homeassistant

# 创建并编辑docker配置文件
sudo nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/dockerseries/homeassistant/docker-compose.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/homeassistant

# 开始运行
sudo docker compose up -d

# 查看容器日志（按Ctrl+C退出）
sudo docker compose logs -f
```

在浏览器访问：`http://服务器ip地址:8123`，进入页面。
