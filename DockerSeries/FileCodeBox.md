---
lastUpdated: 2025-08-06T14:09:00+8:00
---

# 文件快递柜 | Docker系列

## 前言

本文介绍使用`FileCodeBox`在Ubuntu系统上搭建文件快递柜，请先根据本章前言完成环境的搭建。

`FileCodeBox`网站：

- <https://github.com/vastsa/FileCodeBox>
- <https://hub.docker.com/r/lanol/filecodebox>
- <https://share.lanol.cn>

## 拉取镜像

```shell
docker pull lanol/filecodebox:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    | 12345 | 网页界面 |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir filecodebox

# 进入工作目录
cd filecodebox

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/DockerSeries/FileCodeBox.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/filecodebox

# 开始运行
docker compose up -d
```

1. 在浏览器访问：`http://服务器ip地址:12345/#/admin`
2. 输入默认密码`FileCodeBox2023`，进入管理后台并修改密码

## 维护服务

```shell
# 停止服务
cd /srv/filecodebox
docker compose down

# 更新服务
cd /srv/filecodebox
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/filecodebox
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /srv/filecodebox
tar -xzf data.tar.gz data/
```
