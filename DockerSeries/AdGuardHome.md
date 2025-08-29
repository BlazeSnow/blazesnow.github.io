---
lastUpdated: 2025-08-06T14:09:00+8:00
description: 使用AdGuard Home搭建家庭域名服务器
---

# 家庭域名服务器 | Docker系列

## 前言

本文介绍使用`AdGuard Home`在`Ubuntu`系统上搭建DNS服务器，请先根据本章前言完成环境的搭建。

相关网站：

- <https://adguard.com/zh_cn/adguard-home/overview.html>
- <https://hub.docker.com/r/adguard/adguardhome>
- <https://github.com/AdguardTeam/AdguardHome>

## 拉取镜像

```shell
docker pull adguard/adguardhome:latest
```

## 开放端口

| 端口类型 | 端口  |   端口用途   |
| :------: | :---: | :----------: |
|   UDP    |  53   |   DNS查询    |
|   TCP    |  53   |   DNS查询    |
|   TCP    |  80   |   管理界面   |
|   TCP    |  443  |   管理界面   |
|   TCP    | 3000  | 初始化服务器 |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir adguardhome

# 进入工作目录
cd adguardhome

# 创建数据文件夹
mkdir work

# 创建配置文件夹
mkdir conf

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml
```

### `docker-compose.yml`

<<< @/DockerSeries/AdGuardHome.yml

## 配置系统

> Ubuntu系统的DNSStubListener占用53端口，导致Adguard Home无法启动，需要关闭DNSStubListener

```shell
# 查看53端口占用情况
sudo lsof -i :53

# 进入配置文件目录
cd /etc/systemd

# 编辑配置文件
nano resolved.conf

# 重启systemd-resolved
sudo systemctl restart systemd-resolved

# 验证53端口占用情况
sudo lsof -i :53
```

### `resolved.conf`

```txt
#这里改为no，并删去井号
DNSStubListener=no
```

## 开始运行

```shell
# 前往工作目录
cd /srv/adguardhome

# 开始运行
docker compose up -d

# 若显示以下内容，则运行成功
# Creating adguardhome ... done
```

1. 在浏览器访问：<http://服务器ip地址:3000>，进入初始化服务器页面
2. 设置服务器用户名与密码，其余保持默认
3. 添加服务器ip地址为客户端的DNS服务器

## 维护服务

```shell
# 停止服务
cd /srv/adguardhome
docker compose down

# 更新服务
cd /srv/adguardhome
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/adguardhome
tar -czf work.tar.gz work/
tar -czf conf.tar.gz conf/

# 解压缩数据文件夹
cd /srv/adguardhome
tar -xzf work.tar.gz work/
tar -xzf conf.tar.gz conf/
```
