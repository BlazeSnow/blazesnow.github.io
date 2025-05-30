---
lastUpdated: 2024-12-17T16:19:00+8:00
description: 搭建智能家居中枢的教程
---

# 智能家居中枢 | Docker系列

## 前言

本文介绍使用`HomeAssistant`在Ubuntu系统上搭建智能家居中枢，请先根据本章前言完成环境的搭建。

`HomeAssistant`网站：

- <https://github.com/home-assistant>
- <https://hub.docker.com/r/homeassistant/home-assistant>
- <https://www.home-assistant.io/>

## 拉取镜像

```bash
docker pull homeassistant/home-assistant
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 8123  | 网页界面 |

## 配置文件

1. 前往var目录：`cd /var`
2. 创建工作目录：`mkdir homeassistant`
3. 进入工作目录：`cd homeassistant`
4. 创建docker配置文件：`touch compose.yml`
5. 编辑docker配置文件：`nano compose.yml`

### `compose.yml`

```yml
services:
  homeassistant:
    image: homeassistant/home-assistant
    container_name: homeassistant
    privileged: true
    restart: always
    environment:
      - TZ=Asia/Shanghai
    volumes:
      - ./config:/config
      - /run/dbus:/run/dbus:ro
    network_mode: host
```

## 开始运行

1. 前往工作目录：`cd /var/homeassistant`
2. 开始运行：`docker compose up -d`或`docker-compose up -d`
3. 在浏览器访问：`http://服务器ip地址:8123`，进入页面。

## 维护服务

### 停止服务

1. 前往工作文件夹：`cd /var/homeassistant`
2. 中止Docker容器：`docker compose down`或`docker-compose down`

### 压缩数据文件夹

1. 前往工作目录：`cd /var/homeassistant`
2. 压缩数据文件夹：`tar -czf config.tar.gz config/`

### 解压缩数据文件夹

1. 前往工作目录：`cd /var/homeassistant`
2. 解压缩数据文件夹：`tar -xzf config.tar.gz config/`
