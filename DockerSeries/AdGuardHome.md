---
lastUpdated: 2024-11-25T13:26:00+8:00
---

# 家庭域名服务器 | Docker系列

## 前言

本文介绍使用```AdGuard Home```在```Ubuntu```系统上搭建DNS服务器，请先根据本章前言完成环境的搭建。

相关网站：
- <https://adguard.com/zh_cn/adguard-home/overview.html>
- <https://hub.docker.com/r/adguard/adguardhome>
- <https://github.com/AdguardTeam/AdguardHome>

## 拉取镜像

```docker pull adguard/adguardhome```

## 开放端口

| 端口类型 | 端口  |   端口用途   |
| :------: | :---: | :----------: |
|   UDP    |  53   |   DNS查询    |
|   TCP    |  53   |   DNS查询    |
|   TCP    |  80   |   管理界面   |
|   TCP    |  443  |   管理界面   |
|   TCP    | 3000  | 初始化服务器 |

## 配置文件

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir adguard```
3. 进入工作目录：```cd adguard```
4. 创建数据文件夹：```mkdir work```
5. 创建配置文件夹：```mkdir conf```
6. 创建docker配置文件：```touch compose.yml```
7. 编辑docker配置文件：```nano compose.yml```

### ```compose.yml```

```yml
version: '3'
services:
  adguardhome:
    image: adguard/adguardhome
    container_name: adguardhome
    restart: always
    volumes:
      - ./work:/opt/adguardhome/work
      - ./conf:/opt/adguardhome/conf
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "80:80/tcp"
      - "443:443/tcp"
      - "3000:3000/tcp"
```

## 开始运行

1. 前往工作目录：```cd /var/adguard```
2. 开始运行：```docker compose up -d```或```docker-compose up -d```
3. 若显示：```Creating adguardhome ... done```，则运行成功
4. 在浏览器访问：```服务器ip地址:3000```，进入初始化服务器页面
5. 设置服务器用户名与密码，其余保持默认
6. 添加服务器ip地址为DNS服务器

## 维护服务

### 数据文件

1. 前往工作文件夹：```cd /var/adguard```
2. 数据文件夹：```work```
3. 配置文件夹：```conf```

### 停止服务

1. 前往工作文件夹：```cd /var/adguard```
2. 中止Docker容器：```docker compose down```或```docker-compose down```

### 压缩数据文件夹

1. 前往工作目录：```cd /var/adguard```
2. ```tar -czf work.tar.gz work/```
3. ```tar -czf conf.tar.gz conf/```

### 解压缩数据文件夹

1. 前往工作目录：```cd /var/adguard```
2. ```tar -xzf work.tar.gz work/```
3. ```tar -xzf conf.tar.gz conf/```