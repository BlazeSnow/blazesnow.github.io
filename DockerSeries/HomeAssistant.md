---
lastUpdated: 2025-07-09T22:57:00+8:00
description: 使用HomeAssistant搭建智能家居中枢
---

# 智能家居中枢 | Docker系列

## 前言

本文介绍使用`HomeAssistant`在Ubuntu系统上搭建智能家居中枢，请先根据本章前言完成环境的搭建。

`HomeAssistant`网站：

- <https://github.com/home-assistant>
- <https://hub.docker.com/r/homeassistant/home-assistant>
- <https://www.home-assistant.io/>

## 拉取镜像

```shell
docker pull homeassistant/home-assistant:stable
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 8123  | 网页界面 |

## 配置文件

```shell
# 前往var目录
cd /var

# 创建工作目录
mkdir homeassistant

# 进入工作目录
cd homeassistant

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml
```

### `compose.yml`

<<< @/DockerSeries/HomeAssistant.yml

## 开始运行

```shell
# 前往工作目录
cd /var/homeassistant

# 开始运行
docker compose up -d
```

在浏览器访问：`http://服务器ip地址:8123`，进入页面。

## 维护服务

```shell
# 停止服务
cd /var/homeassistant
docker compose down

# 更新服务
cd /var/homeassistant
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /var/homeassistant
tar -czf config.tar.gz config/

# 解压缩数据文件夹
cd /var/homeassistant
tar -xzf config.tar.gz config/
```
