---
lastUpdated: 2024-12-03T22:02:00+8:00
---

# NFS | Docker系列

## 前言

本文介绍使用```itsthenetwork/nfs-server-alpine```在Ubuntu服务器上搭建NFS文件服务器，请先根据本章前言完成环境的搭建。

```itsthenetwork/nfs-server-alpine```地址：
- <https://hub.docker.com/r/itsthenetwork/nfs-server-alpine>
- <https://github.com/sjiveson/nfs-server-alpine>

## 拉取镜像

```docker pull itsthenetwork/nfs-server-alpine```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 2049  | 数据传输 |

## 配置文件

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir nfs```
3. 进入工作目录：```cd nfs```
4. 创建compose文件：```touch compose.yml```
5. 编辑compose文件：```nano compose.yml```

### ```compose.yml```

```yml
services:
  nfs-server:
    image: itsthenetwork/nfs-server-alpine
    container_name: nfs-server
    privileged: true
    restart: always
    volumes:
      - ./data:/nfsshare
    environment:
      - SHARED_DIRECTORY=/nfsshare
      - SYNC=true # sync模式 or async模式
      # - READ_ONLY=true # 只读访问去除注释
      - PERMITTED="192.168.*.*" # 此处填写允许访问的ip
    ports:
      - "2049:2049"
```

## 开始运行

1. 前往工作目录：```cd /var/nfs```
2. 运行：```docker compose up```或```docker-compose up```
3. 运行成功后，即可在客户端：
    - 安装nfs客户端：```sudo apt install nfs-common```
    - 创建客户端目录：```mkdir -p /var/nfs```
    - 连接服务器：```mount 服务器ip地址:/ /var/nfs```
    - 断开连接服务器：```umount -l /var/nfs```

## 维护服务

### 停止服务

1. 前往工作文件夹：```cd /var/nfs```
2. 中止Docker容器：```docker compose down```或```docker-compose down```

### 压缩数据文件夹

1. 前往工作目录：```cd /var/nfs```
2. 打包数据文件夹：```tar -czf data.tar.gz data/```

### 解压缩数据文件夹

1. 前往工作目录：```cd /var/nfs```
2. 解压数据文件压缩包：```tar -xzf data.tar.gz data/```