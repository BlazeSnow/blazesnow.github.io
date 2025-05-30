---
lastUpdated: 2024-11-22T18:12:00+8:00
description: Ubuntu的SSH服务相关命令
---

# 安装SSH | Ubuntu

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
