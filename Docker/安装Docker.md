---
lastUpdated: 2024-10-19T18:45:00+8:00
---

# 安装Docker | Docker相关

> 优先以官方文档为准：<https://docs.docker.com/engine/install/ubuntu/>

## 卸载旧版本Docker

```for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done```

## 获取脚本

1. 前往var目录：```cd /var```
2. 下载Docker安装脚本：```curl -fsSL https://get.docker.com -o get-docker.sh```
3. 安装Docker：```sudo sh get-docker.sh```

## 验证安装

```docker version```