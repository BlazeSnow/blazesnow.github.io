---
title: 我的世界服务器部署指南
lastUpdated: 2026-08-17T22:20:00+8:00
description: 在Ubuntu服务器上部署Minecraft服务器，并使用systemd托管（开机自启、崩溃自动重启、优雅停服）。
---

# <TitleIcon src="/icon/minecraft.svg" /> 我的世界服务器部署指南

## 前言

请先根据 [Ubuntu 系列](../ubuntu/) 完成 SSH 登录等基础准备，还需要：

| 名称             | 说明                                     |
| ---------------- | ---------------------------------------- |
| Ubuntu 服务器    | 本文基于 Ubuntu 24.04                    |
| Java             | 本文以 openjdk21 为例                    |
| 服务器安装包 jar | 本文以 1.21.1-NeoForge_21.1.248.jar 为例 |

## 1. 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 25565 | 游戏连接 |

## 2. 目录规划

```text
/mc/
├── server/      服务端根目录（存档、mods、配置，服务器"本体"）
├── backup/      备份归档
└── 1.21.1-NeoForge_21.1.248.jar
```

## 3. 创建用户

```shell
# 创建用户 minecraft
sudo useradd -r -s /usr/sbin/nologin -d /mc minecraft

# 创建部署根目录
sudo mkdir -p /mc

# 将目录归属划为 minecraft 用户
sudo chown minecraft:minecraft /mc
```

## 4. 安装服务端

```shell
# 安装 Java
sudo apt update && sudo apt install openjdk-21-jre-headless

# 确认 Java
java -version

# 创建服务端目录
sudo -u minecraft mkdir -p /mc/server

# 运行安装器
sudo -u minecraft java -jar /mc/1.21.1-NeoForge_21.1.248.jar --installServer /mc/server
```

## 5. 编写 systemd 服务

```shell
sudo nano /etc/systemd/system/minecraft.service
```

### `minecraft.service`

```ini
[Unit]
Description=Minecraft Server
After=network-online.target
Wants=network-online.target

[Service]
User=minecraft
WorkingDirectory=/mc/server
ExecStart=/mc/server/run.sh nogui
Restart=always
RestartSec=10
TimeoutStopSec=300

[Install]
WantedBy=multi-user.target
```

## 6. 开始运行

```shell
# 刷新 systemctl 配置
sudo systemctl daemon-reload

# 启用 minecraft 服务自启动
sudo systemctl enable minecraft

# 同意 Minecraft 条款（将内容改为 eula=true）
sudo nano /mc/server/eula.txt

# 启动
sudo systemctl start minecraft

# 查看日志（按下 Ctrl+C 退出）
sudo journalctl -u minecraft -f
```

看到日志出现 `Done (...) !` 即启动成功，客户端用 `服务器ip:25565` 连接。

## 7. 维护服务

```shell
# 停止服务器
sudo systemctl stop minecraft

# 关闭服务开机自启动
sudo systemctl disable minecraft
```
