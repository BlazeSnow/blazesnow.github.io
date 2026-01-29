---
lastUpdated: 2025-08-06T14:18:00+8:00
---

# Webdav | Docker系列

## 前言

本文介绍使用`bytemark/webdav`在Ubuntu服务器上搭建Webdav文件服务器，请先根据本章前言完成环境的搭建。

`bytemark/webdav`地址：<https://hub.docker.com/r/bytemark/webdav>

## 拉取镜像

```bash
docker pull bytemark/webdav:latest
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  80   | 数据传输 |

## 配置文件

```shell
# 创建并进入工作目录
mkdir -p /srv/webdav && cd /srv/webdav

# 创建并编辑docker配置文件
nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/dockerseries/webdav/docker-compose.yml

## 开始运行

```shell
# 前往工作目录
cd /srv/webdav

# 开始运行
docker compose up -d
```

运行成功后，即可使用`http://服务器ip地址`连接服务器

## 维护服务

```shell
# 停止服务
cd /srv/webdav
docker compose down

# 更新服务
cd /srv/webdav
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/webdav
tar -czf dav.tar.gz dav/

# 解压缩数据文件夹
cd /srv/webdav
tar -xzf dav.tar.gz dav/
```

## 挂载到Windows

Windows默认仅支持https协议，需要调整设置以支持http协议

> [!CAUTION]
> 警告：请勿随意修改注册表，对注册表的随意修改会导致不可预知的问题

1. 按下`Windows徽标`+`R`
2. 输入`regedit`
3. 前往`HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters`
4. 将`BasicAuthLevel`的值由`1`改为`2`
5. 重新启动电脑
