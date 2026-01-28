---
lastUpdated: 2025-08-22T19:08:00+8:00
---

# 版本管理服务器 | Docker系列

## 前言

本文介绍使用`Gitea`在Ubuntu服务器上搭建版本管理服务器，请先根据本章前言完成环境的搭建。

`Gitea`地址：

- <https://hub.docker.com/r/gitea/gitea>
- <https://about.gitea.com/>
- <https://github.com/go-gitea/gitea>

## 拉取镜像

```shell
docker pull gitea/gitea:latest
docker pull mysql:lts
```

## 开放端口

| 端口类型 | 端口  |  端口用途  |
| :------: | :---: | :--------: |
|   TCP    | 3000  | 可视化管理 |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir gitea

# 进入工作目录
cd gitea

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/dockerseries/gitea/docker-compose.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/gitea

# 开始运行
docker compose up -d
```

运行成功后，即可使用`http://服务器ip地址:3000`连接服务器

## 维护服务

```shell
# 停止服务
cd /srv/gitea
docker compose down

# 更新服务
cd /srv/gitea
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/gitea
tar -czf gitea.tar.gz gitea/
tar -czf mysql.tar.gz mysql/

# 解压缩数据文件夹
cd /srv/gitea
tar -xzf gitea.tar.gz gitea/
tar -xzf mysql.tar.gz mysql/
```
