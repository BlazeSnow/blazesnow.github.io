---
lastUpdated: 2025-08-06T14:11:00+8:00
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
# 前往srv目录
cd /srv

# 创建工作目录
mkdir navidrome

# 进入工作目录
cd navidrome

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/DockerSeries/Navidrome.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/navidrome

# 开始运行
docker compose up -d
```

1. 运行成功后，即可使用`服务器ip地址:4533`连接服务器
2. 音乐文件放置至：`/srv/navidrome/music`

## 维护服务

```shell
# 停止服务
cd /srv/navidrome
docker compose down

# 更新服务
cd /srv/navidrome
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/navidrome
tar -czf data.tar.gz data/
tar -czf music.tar.gz music/

# 解压缩数据文件夹
cd /srv/navidrome
tar -xzf data.tar.gz data/
tar -xzf music.tar.gz music/
```
