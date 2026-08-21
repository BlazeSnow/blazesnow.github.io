---
title: 我的世界服务器备份指南
lastUpdated: 2026-08-17T22:20:00+8:00
description: 为在Ubuntu服务器上部署的Minecraft服务器进行停服备份的指南。
---

# <TitleIcon icon="minecraft" /> 我的世界服务器备份指南

## 前言

本文适配[我的世界服务器部署指南](./index.md)的目录结构

## 1. 安装 7z 工具

```shell
sudo apt install p7zip-full
```

## 2. 创建备份目录

```shell
sudo mkdir -p /mc/backup
```

## 3. 停止服务器

```shell
sudo systemctl stop minecraft
```

## 4. 备份服务器

```shell
# 生成带时间戳的归档名
STAMP=$(date +%Y%m%d-%H%M%S)

# 压缩打包 /mc/server 到备份目录
sudo 7z a -t7z -mx=9 -mmt=on /mc/backup/backup-$STAMP.7z /mc/server

# 校验归档完整性
sudo 7z t /mc/backup/backup-$STAMP.7z
```

校验归档完整性后，输出 Everything is Ok 即成功

## 5. 启动服务器

```shell
sudo systemctl start minecraft
```

## 6. 查看服务器启动状态

> [!TIP]
> 按下 Ctrl+C 退出

```shell
sudo journalctl -u minecraft -f
```
