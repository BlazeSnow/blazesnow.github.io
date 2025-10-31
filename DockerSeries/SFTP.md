---
lastUpdated: 2025-08-06T14:16:00+8:00
---

# SFTP | Docker系列

> [!CAUTION]
> 停止支持：本文的内容已停止支持
>
> 参见停止支持及弃用的页面：[点击此处跳转](/Deprecated)

## 前言

本文介绍使用`atmoz/sftp`在Ubuntu服务器上搭建SFTP文件服务器，请先根据本章前言完成环境的搭建。

`atmoz/sftp`地址：<https://hub.docker.com/r/atmoz/sftp>

## 拉取镜像

```shell
docker pull atmoz/sftp:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 2222  | 数据传输 |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir sftp

# 进入工作目录
cd sftp

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/DockerSeries/SFTP.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/sftp

# 开始运行
docker compose up -d
```

运行成功后，即可使用`sftp://用户名@服务器ip地址:2222`连接服务器

## 维护服务

```shell
# 停止服务
cd /srv/sftp
docker compose down

# 更新服务
cd /srv/sftp
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/sftp
tar -czf home.tar.gz home/

# 解压缩数据文件夹
cd /srv/sftp
tar -xzf home.tar.gz home/
```
