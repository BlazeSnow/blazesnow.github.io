---
lastUpdated: 2025-12-28T08:57:00+8:00
---

# 前言 | Docker系列

> Docker Compose是一个用于定义和运行容器的工具。它通过yml文件来描述应用程序需要的所有服务、网络和存储资源，通过一条命令就可以启动或管理所有的容器。

## 系统要求

本教程建立于Ubuntu系统，使用SSH连接并执行命令，请提前准备Ubuntu系统并使用SSH连接。

## 安装Docker

> 本教程默认使用root用户。

第一步，更新apt包源

```shell
apt update && apt upgrade -y
```

第二步，卸载其他版本的docker、compose、containerd和runc，以避免版本冲突

```shell
apt remove $(dpkg --get-selections docker.io docker-compose docker-compose-v2 docker-doc podman-docker containerd runc | cut -f1)
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
chmod +x get-docker.sh
```

第六步，运行安装脚本，并设定安装镜像源为阿里云

```shell
sh get-docker.sh --mirror Aliyun
```

第七步，验证安装是否成功

```shell
docker info
```

后续只需使用apt对docker进行更新

```shell
apt update && apt upgrade -y
```

## 控制命令

1. 拉取镜像：```docker compose pull```
2. 启动容器：```docker compose up```
3. 静默启动容器：```docker compose up -d```
4. 停止容器：```docker compose down```
5. 重新启动容器：```docker compose restart```
6. 查看容器状态：```docker ps -a```
7. 拉取镜像：```docker pull <name>```
8. 查看所有镜像：```docker images```
9. 删除镜像：```docker rmi <id>```
10. 清理缓存：```docker system prune -f```

> [!TIP]
> 关于compose的命令，都需要在yml文件所在目录下执行。

## 卸载Docker

> 本教程默认使用root用户

第一步，卸载组件

```shell
apt purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
```

第二步，删去镜像与容器

```shell
rm -rf /var/lib/docker
rm -rf /var/lib/containerd
```

第三步，删去apt包配置文件与密钥

```shell
sudo rm /etc/apt/sources.list.d/docker.sources
sudo rm /etc/apt/keyrings/docker.asc
```

> [!TIP]
> 安装与卸载教程来源：<https://docs.docker.com/engine/install/ubuntu/>
