---
title: 前言 | Docker系列
lastUpdated: 2026-05-02T23:12:00+8:00
---

# <TitleIcon icon="docker" /> 前言

> Docker Compose是一个用于定义和运行容器的工具。它通过yml文件来描述应用程序需要的所有服务、网络和存储资源，通过一条命令就可以启动或管理所有的容器。

## 系统要求

本教程建立于Ubuntu系统，使用SSH连接并执行命令，请提前准备Ubuntu系统并使用SSH连接。

## 安装Docker

第一步，更新apt包源

```shell
sudo apt update && sudo apt upgrade -y
```

第二步，卸载其他版本的docker、compose、containerd和runc，以避免版本冲突

```shell
sudo apt remove $(dpkg --get-selections docker.io docker-compose docker-compose-v2 docker-doc podman-docker containerd runc | cut -f1)
```

第三步，前往工作目录/srv

```shell
cd /srv
```

第四步，下载docker官方安装脚本

```shell
curl -fsSL https://get.docker.com -o get-docker.sh
```

第五步，授予安装脚本运行权限

```shell
sudo chmod +x get-docker.sh
```

第六步，运行安装脚本，并设定安装镜像源为阿里云

```shell
sudo ./get-docker.sh --mirror Aliyun
```

第七步，验证安装是否成功

```shell
sudo docker info
```

后续只需使用apt对docker进行更新

```shell
sudo apt update && sudo apt upgrade -y
```

## 控制命令

> [!TIP]
> 关于Docker Compose的命令，都需要在yml文件所在目录下执行。

### 拉取镜像

```shell
sudo docker compose pull
```

### 静默启动容器

```shell
sudo docker compose up -d
```

### 查看容器日志

```shell
sudo docker compose logs -f
```

### 停止容器

```shell
sudo docker compose down
```

### 重新启动容器

```shell
sudo docker compose restart
```

### 查看容器状态

```shell
sudo docker ps -a
```

### 查看所有镜像

```shell
sudo docker images
```

### 删除镜像

```shell
sudo docker rmi <id>
```

### 清理缓存

```shell
sudo docker system prune
```

## 卸载Docker

第一步，卸载组件

```shell
sudo apt purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
```

第二步，删去镜像与容器

```shell
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

第三步，删去apt包配置文件与密钥

```shell
sudo rm /etc/apt/sources.list.d/docker.sources
sudo rm /etc/apt/keyrings/docker.asc
```

> [!TIP]
> 安装与卸载教程来源：<https://docs.docker.com/engine/install/ubuntu/>
