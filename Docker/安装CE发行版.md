---
lastUpdated: 2024-10-22T13:10:00+8:00
---

# 安装CE发行版 | Docker相关

> 优先以官方文档为准：<https://docs.docker.com/engine/install/ubuntu/>

## 卸载其他版本Docker

```for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done```

## 安装CE发行版

1. 前往var目录：```cd /var```
2. 下载Docker安装脚本：```curl -fsSL https://get.docker.com -o get-docker.sh```
3. 安装Docker：```sudo sh get-docker.sh```

## 验证安装

```docker version```

## 卸载CE发行版

1. ```sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras```
2. ```sudo rm -rf /var/lib/docker```
3. ```sudo rm -rf /var/lib/containerd```