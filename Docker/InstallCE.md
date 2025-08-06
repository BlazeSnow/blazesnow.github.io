---
lastUpdated: 2025-08-06T13:53:00+8:00
description: Docker社区版本的安装教程
---

# 安装CE发行版 | Docker

## 卸载其他版本Docker

```bash
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

## 安装CE发行版

```bash
# 前往srv
cd /srv

# 下载安装脚本
curl -fsSL https://get.docker.com -o install-docker.sh

# 使用安装脚本安装
sudo sh install-docker.sh --mirror Aliyun
```

## 验证安装

```bash
docker version
```

## 卸载CE发行版

```bash
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```
