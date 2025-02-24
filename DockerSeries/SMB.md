---
lastUpdated: 2024-11-24T22:06:00+8:00
---

# SMB | Docker系列

## 前言

本文介绍使用```dockurr/samba```在Ubuntu服务器上搭建SMB文件服务器，请先根据本章前言完成环境的搭建。

```dockurr/samba```地址：<https://hub.docker.com/r/dockurr/samba>

## 拉取镜像

```docker pull dockurr/samba```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  445  | 数据传输 |

## 配置文件

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir samba```
3. 进入工作目录：```cd samba```
4. 创建compose文件：```touch compose.yml```
5. 编辑compose文件：```nano compose.yml```

### ```compose.yml```

```yml{8,9}
services:
  samba:
    image: dockurr/samba:latest
    container_name: samba
    restart: always
    environment:
      NAME: "Data"
      USER: "samba"
      PASS: "secret"
    ports:
      - 445:445
    volumes:
      - ./storage:/storage
```

## 开始运行

1. 前往工作目录：```cd /var/samba```
2. 运行：```docker compose up -d```或```docker-compose up -d```
3. 运行成功后，即可使用```\\服务器ip地址\Data```连接服务器

## 维护服务

### 停止服务

1. 前往工作文件夹：```cd /var/samba```
2. 中止Docker容器：```docker compose down```或```docker-compose down```

### 压缩数据文件夹

1. 前往工作目录：```cd /var/samba```
2. 打包数据文件夹：```tar -czf storage.tar.gz storage/```

### 解压缩数据文件夹

1. 前往工作目录：```cd /var/samba```
2. 解压数据文件压缩包：```tar -xzf storage.tar.gz storage/```