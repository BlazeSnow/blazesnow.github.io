---
title: 安装SSH | Ubuntu
lastUpdated: 2024-11-22T18:12:00+8:00
description: 在Ubuntu上安装和配置SSH服务，实现远程连接管理。
---

# <TitleIcon icon="ubuntu" /> 安装SSH

## 安装

```bash
sudo apt install openssh-server
```

## 开启SSH服务自启动

```bash
sudo systemctl enable ssh
```

## 开启SSH服务

```bash
sudo systemctl start ssh
```

## 查看SSH服务状态

```bash
sudo systemctl status ssh
```
