---
title: 我的世界服务器备份指南
lastUpdated: 2026-08-17T21:57:00+8:00
description: 为在Ubuntu服务器上部署的Minecraft服务器进行停服备份的指南。
---

# <TitleIcon src="/icon/minecraft.ico" /> 我的世界服务器备份指南

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
7z a -t7z -mx=9 -mmt=on /mc/backup/backup-$(date +%Y%m%d-%H%M%S).7z /mc/server
```

## 5. 启动服务器

```shell
sudo systemctl start minecraft
```
