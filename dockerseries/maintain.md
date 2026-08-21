---
title: 维护服务 | Docker系列
lastUpdated: 2026-08-21T08:00:00+8:00
description: 本系列服务的日常维护操作，包括停止、更新、数据备份与恢复。
---

# <TitleIcon icon="docker" /> 维护服务

> 本系列各服务的日常维护操作基本一致，本章统一介绍。所有命令都需要在对应服务的 `docker-compose.yml` 所在工作目录下执行，即各服务中的 `/srv/<服务目录>`。

## 停止服务

```shell
# 进入服务的工作目录
cd /srv/<服务目录>

# 停止服务
sudo docker compose down
```

## 更新服务

```shell
# 进入服务的工作目录
cd /srv/<服务目录>

# 先停止，再拉取最新镜像并重新启动
sudo docker compose down
sudo docker compose pull
sudo docker compose up -d
```

## 数据备份

> 需要备份的数据文件夹因服务而异，请根据下方[各服务数据文件夹](#各服务数据文件夹)确定本服务需要打包的文件夹。

```shell
# 进入服务的工作目录
cd /srv/<服务目录>

# 压缩数据文件夹（将 <数据文件夹> 替换为对应文件夹）
sudo tar -czf <数据文件夹>.tar.gz <数据文件夹>/
```

## 数据恢复

```shell
# 进入服务的工作目录
cd /srv/<服务目录>

# 先停止服务，再解压数据文件夹
sudo docker compose down
sudo tar -xzf <数据文件夹>.tar.gz <数据文件夹>/

# 重新启动服务
sudo docker compose up -d
```

## 各服务数据文件夹

| 服务 | 数据文件夹 |
| :--- | :--- |
| 家庭域名服务器 AdGuard Home | work、conf |
| 证书申请器 Certbot | conf、data |
| 文件服务器 FTP | data |
| 版本管理服务器 Gitea | gitea、mysql |
| 智能家居中枢 Home Assistant | config |
| 我的世界服务器 | data |
| 音乐服务器 Navidrome | data、music |
| 文件列表服务器 OpenList | data |
| 容器可视化管理 Portainer | data |
| 文件服务器 SMB | storage |
| 语音服务器 TeamSpeak | data |
| 密码服务器 Vaultwarden | data |
| 文件服务器 WebDAV | dav |

> [!NOTE]
> - **我的世界服务器**在停止前需先保存世界数据：`sudo docker exec minecraft rcon-cli save-all`，再停止容器。
> - **Frp 客户端 / 服务端**（frpc、frps）无持久化数据，无需数据备份。
