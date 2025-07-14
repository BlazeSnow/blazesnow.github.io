---
lastUpdated: 2025-07-14T22:29:00+8:00
description: 使用Portainer搭建Docker可视化管理器
---

# 可视化管理 | Docker系列

## 前言

本文介绍使用`portainer/portainer-ce`在Ubuntu服务器上搭建Docker可视化管理器，请先根据本章前言完成环境的搭建。

`portainer/portainer-ce`地址：

- <https://hub.docker.com/r/portainer/portainer-ce>
- <https://www.portainer.io/>
- <https://github.com/portainer/portainer>

## 拉取镜像

```shell
docker pull portainer/portainer-ce:alpine
docker pull portainer/agent:alpine
```

## 开放端口

| 端口类型 | 端口  |  端口用途  |
| :------: | :---: | :--------: |
|   TCP    | 8000  | Edge Agent |
|   TCP    | 9443  | 可视化管理 |

## 配置文件

```shell
# 前往var目录
cd /var

# 创建工作目录
mkdir portainer

# 进入工作目录
cd portainer

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml
```

### `compose.yml`

<<< @/DockerSeries/Portainer.yml

## 开始运行

```shell
# 前往工作目录
cd /var/portainer

# 开始运行
docker compose up -d
```

运行成功后，即可使用`https://服务器ip地址:9443`连接服务器

## 维护服务

```shell
# 停止服务
cd /var/portainer
docker compose down

# 更新服务
cd /var/portainer
docker compose down
docker compose pull
docker compose up -d
```

> [!TIP]
> 数据命名卷的转移，参见[命名卷](/DockerSeries/Volumes)。
