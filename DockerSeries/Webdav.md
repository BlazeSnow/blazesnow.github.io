---
lastUpdated: 2024-12-02T21:40:00+8:00
---

# Webdav | Docker系列

## 前言

本文介绍使用```bytemark/webdav```在Ubuntu服务器上搭建Webdav文件服务器，请先根据本章前言完成环境的搭建。

```bytemark/webdav```地址：<https://hub.docker.com/r/bytemark/webdav>

## 拉取镜像

```docker pull bytemark/webdav```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  80   | 数据传输 |

## 配置文件

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir webdav```
3. 进入工作目录：```cd webdav```
4. 创建compose文件：```touch compose.yml```
5. 编辑compose文件：```nano compose.yml```

### ```compose.yml```

```yml{11,12}
version: '3'
services:
  webdav:
    image: bytemark/webdav
    container_name: webdav
    restart: always
    ports:
      - "80:80"
    environment:
      AUTH_TYPE: Digest
      USERNAME: alice
      PASSWORD: secret1234
    volumes:
      - ./dav:/var/lib/dav
```

## 开始运行

1. 前往工作目录：```cd /var/webdav```
2. 运行：```docker compose up -d```或```docker-compose up -d```
3. 运行成功后，即可使用```http://服务器ip地址```连接服务器

## 维护服务

### 停止服务

1. 前往工作文件夹：```cd /var/webdav```
2. 中止Docker容器：```docker compose down```或```docker-compose down```

### 压缩数据文件夹

1. 前往工作目录：```cd /var/webdav```
2. 打包数据文件夹：```tar -czf dav.tar.gz dav/```

### 解压缩数据文件夹

1. 前往工作目录：```cd /var/webdav```
2. 解压数据文件压缩包：```tar -xzf dav.tar.gz dav/```

## 挂载到Windows

> Windows默认仅支持https协议，需要调整设置以支持http协议

1. 按下```Windows徽标```+```R```
2. 输入```regedit```
3. 前往```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters```
4. 将```BasicAuthLevel```的值由```1```改为```2```
5. 重新启动电脑

::: danger 警告：请勿随意修改注册表
对注册表的随意修改会导致不可预知的问题
:::