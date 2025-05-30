---
lastUpdated: 2024-11-24T21:59:00+8:00
description: 搭建SFTP服务器的教程
---

# SFTP | Docker系列

## 前言

本文介绍使用`atmoz/sftp`在Ubuntu服务器上搭建SFTP文件服务器，请先根据本章前言完成环境的搭建。

`atmoz/sftp`地址：<https://hub.docker.com/r/atmoz/sftp>

## 拉取镜像

```bash
docker pull atmoz/sftp
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 2222  | 数据传输 |

## 配置文件

1. 前往var目录：`cd /var`
2. 创建工作目录：`mkdir sftp`
3. 进入工作目录：`cd sftp`
4. 创建compose文件：`touch compose.yml`
5. 编辑compose文件：`nano compose.yml`

### `compose.yml`

```yml{10}
services:
  sftp:
    image: atmoz/sftp
    container_name: sftp
    restart: always
    volumes:
      - ./home:/home
    ports:
      - "2222:22"
    command: foo:123:1001:100:/abc
    # 用户名:密码:用户ID:组ID:用户文件夹名
    # 用户文件夹：./home/foo/abc
```

## 开始运行

1. 前往工作目录：`cd /var/sftp`
2. 运行：`docker compose up -d`或`docker-compose up -d`
3. 运行成功后，即可使用`sftp://用户名@服务器ip地址:2222`连接服务器

## 维护服务

### 停止服务

1. 前往工作文件夹：`cd /var/sftp`
2. 中止Docker容器：`docker compose down`或`docker-compose down`

### 压缩数据文件夹

1. 前往工作目录：`cd /var/sftp`
2. 打包数据文件夹：`tar -czf home.tar.gz home/`

### 解压缩数据文件夹

1. 前往工作目录：`cd /var/sftp`
2. 解压数据文件压缩包：`tar -xzf home.tar.gz home/`
