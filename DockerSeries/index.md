---
lastUpdated: 2025-05-11T15:01:00+8:00
---

# 前言 | Docker系列

> `Docker Compose`是一个用于定义和运行容器的工具。它通过`compose.yml`来描述应用程序需要的所有服务、网络和存储资源，通过一条命令就可以启动或管理所有的容器。

## 系统要求

本教程建立于Ubuntu系统，使用SSH连接并执行命令，请提前准备Ubuntu系统并使用SSH连接。

## 安装Docker

根据以下步骤依次运行：

```shell
# 更新系统
sudo apt update && sudo apt upgrade -y

# 卸载其他版本的Docker
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done

# 前往var
cd /var

# 下载安装脚本
curl -fsSL https://get.docker.com -o install-docker.sh

# 使用安装脚本安装
sudo sh install-docker.sh --mirror Aliyun

# 验证安装
docker version

# 后续对Docker进行更新
sudo apt update && sudo apt upgrade -y
```

## 关于`compose.yml`

以下是一个示例`compose.yml`文件及其解释：

```yaml
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

## 简单的控制命令

以下是`docker compose`的一些简单控制命令：

```shell
# 拉取镜像
docker compose pull
# 启动容器
docker compose up
# 静默启动容器
docker compose up -d
# 停止容器
docker compose down
# 重新启动容器
docker compose restart
```

> [!TIP]
> 关于`docker compose`的命令，都需要在`compose.yml`所在目录下执行。
