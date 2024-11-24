---
lastUpdated: 2024-11-24T22:53:00+8:00
---

# 我的世界服务器 | Docker系列

## 前言

本文介绍使用```itzg/minecraft-server```在Ubuntu服务器上搭建我的世界服务器，请先根据本章前言完成环境的搭建。

```itzg/minecraft-server```地址：
- <https://hub.docker.com/r/itzg/minecraft-server/>
- <https://github.com/itzg/docker-minecraft-server>
- <https://docker-minecraft-server.readthedocs.io/en/latest/>

## 拉取镜像

```docker pull itzg/minecraft-server```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 25565 | 数据传输 |

## 配置文件

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir mc```
3. 进入工作目录：```cd mc```
4. 创建compose文件：```touch compose.yml```
5. 编辑compose文件：```nano compose.yml```

### ```compose.yml```

```yml{16,17}
version: '3'
services:
  minecraft:
    image: itzg/minecraft-server
    container_name: mc
    tty: true
    stdin_open: true
    restart: always
    ports:
      - "25565:25565"
    volumes:
      - ./data:/data
    environment:
      EULA: "TRUE"
      EXEC_DIRECTLY: "true"
      # 更多的环境变量见：
      # https://docker-minecraft-server.readthedocs.io/en/latest/variables/
      TYPE: "FORGE"
      VERSION: "1.20.1"
      FORGE_VERSION: "47.3.0"
      MEMORY: "2G"
      MAX_PLAYERS: "5"
      PVP: "false"
      ONLINE_MODE: "true"
      ALLOW_FLIGHT: "true"
      ENABLE_WHITELIST: "true"
```

## 开始运行

1. 前往工作目录：```cd /var/mc```
2. 运行：```docker compose up -d```或```docker-compose up -d```
3. 运行成功后，即可使用```服务器ip地址:25565```连接服务器

## 维护服务

### 输入游戏命令

```sh
# 保存世界数据
docker exec mc rcon-cli save-all

# 停止服务器，注意：停止服务器后仍需停止Docker服务
docker exec mc rcon-cli stop
```

### 停止服务

1. 前往工作文件夹：```cd /var/mc```
2. 中止Docker容器：```docker compose down```或```docker-compose down```

### 压缩数据文件夹

1. 前往工作目录：```cd /var/mc```
2. 打包数据文件夹：```tar -czf data.tar.gz data/```

### 解压缩数据文件夹

1. 前往工作目录：```cd /var/mc```
2. 解压数据文件压缩包：```tar -xzf data.tar.gz data/```