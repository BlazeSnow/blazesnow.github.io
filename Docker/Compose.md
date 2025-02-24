---
lastUpdated: 2025-02-24T18:53:00+8:00
---

# Compose文件 | Docker

> compose.yml用于配置Docker容器，本文以vsftpd为例。官方文档：<https://docs.docker.com/compose/>

## 编写compose.yml

```yml
services:
  vsftpd:
    # image：镜像名称:版本
    image: fauria/vsftpd:latest

    # container_name：容器名称
    container_name: vsftpd

    # restart：中断后处理
    restart: always

    # volumes：宿主机路径:容器内路径
    volumes:
      - ./data:/home/vsftpd
    
    # ports：宿主机端口:容器端口
    ports:
      - "20:20"
      - "21:21"
      - "21100-21110:21100-21110"
    
    # environment：环境变量
    environment:
      FTP_USER: blazesnow
      FTP_PASS: blazesnow
      PASV_ADDRESS: 127.0.0.1
      PASV_MIN_PORT: 21100
      PASV_MAX_PORT: 21110
```

## 快速运行Docker

在compose.yml的目录中运行：

- ```docker compose up -d```
- 或```docker-compose up -d```

## 快速关闭Docker

在compose.yml的目录中运行：

- ```docker compose down```
- 或```docker-compose down```
