---
lastUpdated: 2025-10-16T22:21:00+8:00
---

# 文件列表服务器 | Docker系列

## 前言

本文介绍使用`openlistteam/openlist`在Ubuntu服务器上搭建文件列表服务器，请先根据本章前言完成环境的搭建。

`openlistteam/openlist`地址：

- <https://hub.docker.com/r/openlistteam/openlist>
- <https://github.com/OpenListTeam/OpenList>
- <https://doc.oplist.org/>
- <https://doc.oplist.org.cn/>
- <https://doc.openlist.team/>

## 拉取镜像

```shell
docker pull openlistteam/openlist:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 5244  | 管理网页 |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir openlist

# 进入工作目录
cd openlist

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/dockerseries/openlist/docker-compose.yml{20}

## 开始运行

```shell
# 前往工作目录
cd /srv/openlist

# 开始运行
docker compose up -d
```

运行成功后，即可使用`http://服务器ip地址:5244`连接服务器

## 维护服务

```shell
# 停止服务
cd /srv/openlist
docker compose down

# 更新服务
cd /srv/openlist
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/openlist
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /srv/openlist
tar -xzf data.tar.gz data/
```
