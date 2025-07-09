---
lastUpdated: 2025-07-09T22:41:00+8:00
description: 使用Navidrome搭建音乐服务器
---

# 音乐服务器 | Docker系列

## 前言

本文介绍使用`deluan/Navidrome`在Ubuntu服务器上搭建音乐服务器，请先根据本章前言完成环境的搭建。

`deluan/Navidrome`地址：

- <https://hub.docker.com/r/deluan/navidrome>
- <https://www.navidrome.org/>
- <https://github.com/navidrome/navidrome/>

## 拉取镜像

```shell
docker pull deluan/navidrome:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 4533  | 数据传输 |

## 配置文件

```shell
# 前往var目录
cd /var

# 创建工作目录
mkdir navidrome

# 进入工作目录
cd navidrome

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml
```

### `compose.yml`

<<< @/DockerSeries/Navidrome.yml

## 开始运行

```shell
# 前往工作目录
cd /var/navidrome

# 开始运行
docker compose up -d
```

运行成功后，即可使用`服务器ip地址:4533`连接服务器

## 维护服务

```shell
# 停止服务
cd /var/navidrome
docker compose down

# 更新服务
cd /var/navidrome
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /var/navidrome
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /var/navidrome
tar -xzf data.tar.gz data/
```
