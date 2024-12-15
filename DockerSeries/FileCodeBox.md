---
lastUpdated: 2024-12-15T16:36:00+8:00
---

# 文件快递柜 | Docker系列

## 前言

本文介绍使用```FileCodeBox```在Ubuntu系统上搭建文件快递柜，请先根据本章前言完成环境的搭建。

```FileCodeBox```网站：
- <https://github.com/vastsa/FileCodeBox>
- <https://hub.docker.com/r/lanol/filecodebox>
- <https://share.lanol.cn>

## 拉取镜像

```docker pull lanol/filecodebox```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 12345 | 网页界面 |

## 配置文件

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir filecodebox```
3. 进入工作目录：```cd filecodebox```
4. 创建docker配置文件：```touch compose.yml```
5. 编辑docker配置文件：```nano compose.yml```

### ```compose.yml```

```yml
services:
  filecodebox:
    image: lanol/filecodebox
    container_name: filecodebox
    restart: always
    ports:
      - "12345:12345"
    volumes:
      - ./data:/app/data
```

## 开始运行

1. 前往工作目录：```cd /var/filecodebox```
2. 开始运行：```docker compose up -d```或```docker-compose up -d```
3. 在浏览器访问：```http://服务器ip地址:12345```，进入页面。
4. 进入页面后，链接应该为```http://服务器ip地址:12345/#/```，此时在后面加上```admin```，进入```http://服务器ip地址:12345/#/admin```
5. 输入默认密码```FileCodeBox2023```，进入管理后台并修改密码

## 维护服务

### 停止服务

1. 前往工作文件夹：```cd /var/filecodebox```
2. 中止Docker容器：```docker compose down```或```docker-compose down```

### 压缩数据文件夹

1. 前往工作目录：```cd /var/filecodebox```
2. 压缩数据文件夹：```tar -czf data.tar.gz data/```

### 解压缩数据文件夹

1. 前往工作目录：```cd /var/filecodebox```
2. 解压缩数据文件夹：```tar -xzf data.tar.gz data/```