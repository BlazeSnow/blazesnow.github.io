---
lastUpdated: 2024-11-24T22:08:00+8:00
---

# Alist文件服务器 | Docker系列

## 前言

本文介绍使用```xhofe/alist```在Ubuntu服务器上搭建Alist文件服务器，请先根据本章前言完成环境的搭建。

```xhofe/alist```地址：
- <https://hub.docker.com/r/xhofe/alist>
- <https://github.com/AlistGo/alist>
- <https://alistgo.com/zh/>

## 拉取镜像

```docker pull xhofe/alist```

## 开放端口

| 端口类型 | 端口  |   端口用途    |
| :------: | :---: | :-----------: |
|   TCP    | 5244  | Alist访问入口 |

## 配置文件

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir alist```
3. 进入工作目录：```cd alist```
4. 创建compose文件：```touch compose.yml```
5. 编辑compose文件：```nano compose.yml```

### ```compose.yml```

```yml
version: '3.3'
services:
  alist:
    image: xhofe/alist
    container_name: alist
    volumes:
      - ./data:/opt/alist/data
    ports:
      - 5244:5244
    environment:
      - PUID=0
      - PGID=0
      - UMASK=022
      - TZ=Asia/Shanghai
    restart: always
```

## 开始运行

1. 前往工作目录：```cd /var/alist```
2. 首次运行：```docker compose up```或```docker-compose up```
3. 通过输出的内容获取用户名与密码：
    - 用户名：```admin```
    - 密码：```Successfully created the admin user and the initial password is: 此处为密码```
4. 按下```CTRL```+```C```结束此容器
5. 删去容器内容：```docker compose down```或```docker-compose down```
6. 重新运行：```docker compose up -d```或```docker-compose up -d```
7. 运行成功后，即可使用```http://服务器ip地址:5244```连接服务器

## 维护服务

### 停止服务

1. 前往工作文件夹：```cd /var/alist```
2. 中止Docker容器：```docker compose down```或```docker-compose down```

### 压缩数据文件夹

1. 前往工作目录：```cd /var/alist```
2. 打包数据文件夹：```tar -czf data.tar.gz data/```

### 解压缩数据文件夹

1. 前往工作目录：```cd /var/alist```
2. 解压数据文件压缩包：```tar -xzf data.tar.gz data/```