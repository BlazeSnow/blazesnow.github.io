---
title: 维护服务 | Docker系列
lastUpdated: 2026-08-21T08:00:00+8:00
description: 本系列服务的日常维护操作，包括停止、更新、数据备份与恢复。
---

# <TitleIcon icon="docker" /> 维护服务

> [!TIP]
> 本文以 Caddy 作为示例

## 路径示意图

```text
/srv/caddy
├── data                  # 数据目录，需要进行备份
├── docker-compose.yml    # 容器编排文件
└── Caddyfile             # 配置文件
```

## 停止服务

```shell
# 进入服务的工作目录
cd /srv/caddy

# 停止服务
sudo docker compose down
```

## 更新服务

```shell
# 进入服务的工作目录
cd /srv/caddy

# 拉取最新镜像并重新启动
sudo docker compose pull
sudo docker compose down
sudo docker compose up -d
```

## 数据备份

```shell
# 进入服务的工作目录
cd /srv/caddy

# 先停止服务，再打包数据文件夹
sudo docker compose down
sudo tar -czf data_$(date +%Y%m%d_%H%M%S).tar.gz data/

# 重新启动服务
sudo docker compose up -d
```

## 数据恢复

```shell
# 进入服务的工作目录
cd /srv/caddy

# 先停止服务，再解压数据文件
sudo docker compose down
sudo tar -xzf data_<备份时间>.tar.gz data/

# 重新启动服务
sudo docker compose up -d
```
