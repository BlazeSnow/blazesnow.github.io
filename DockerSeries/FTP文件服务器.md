---
lastUpdated: 2024-11-24T21:54:00+8:00
---

# FTP文件服务器 | Docker系列

## 前言

> FTP通常不提供加密传输，数据以明文形式在网络中传输，容易被窃听和篡改。建议使用教程：[搭建SFTP文件服务器](//DockerSeries/SFTP文件服务器/)

本文介绍使用```fauria/vsftpd```在Ubuntu服务器上搭建FTP文件服务器，请先根据本章前言完成环境的搭建。

```fauria/vsftpd```地址：<https://hub.docker.com/r/fauria/vsftpd/>

## 拉取镜像

```docker pull fauria/vsftpd```

## 开放端口

| 端口类型 |    端口     | 端口用途 |
| :------: | :---------: | :------: |
|   TCP    |     20      | 数据传输 |
|   TCP    |     21      | 控制连接 |
|   TCP    | 21100-21110 | 被动模式 |

## 配置文件

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir vsftpd```
3. 进入工作目录：```cd vsftpd```
4. 创建compose文件：```touch compose.yml```
5. 编辑compose文件：```nano compose.yml```

### ```compose.yml```

```yml{14,15,16}
version: '3'
services:
  vsftpd:
    image: fauria/vsftpd
    container_name: vsftpd
    restart: always
    volumes:
      - ./data:/home/vsftpd
    ports:
      - "20:20"
      - "21:21"
      - "21100-21110:21100-21110"
    environment:
      FTP_USER: 此处设置用户名
      FTP_PASS: 此处设置密码
      PASV_ADDRESS: 此处设置服务器ip地址
      PASV_MIN_PORT: 21100
      PASV_MAX_PORT: 21110
```

## 开始运行

1. 前往工作目录：```cd /var/vsftpd```
2. 运行：```docker compose up -d```或```docker-compose up -d```
3. 运行成功后，即可使用```ftp://服务器ip地址```连接服务器

## 维护服务

### 停止服务

1. 前往工作文件夹：```cd /var/vsftpd```
2. 中止Docker容器：```docker compose down```或```docker-compose down```

### 压缩数据文件夹

1. 前往工作目录：```cd /var/vsftpd```
2. 打包数据文件夹：```tar -czf data.tar.gz data/```

### 解压缩数据文件夹

1. 前往工作目录：```cd /var/vsftpd```
2. 解压数据文件压缩包：```tar -xzf data.tar.gz data/```