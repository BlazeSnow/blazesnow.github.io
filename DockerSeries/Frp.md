---
lastUpdated: 2025-08-29T10:00:00+8:00
description: 使用fatedier/frp搭建端口转发服务
---

# 端口转发服务 | Docker系列

端口转发服务分为两篇文章，本文将介绍服务运行方式：

- [端口转发服务端](/DockerSeries/Frps)
- [端口转发客户端](/DockerSeries/Frpc)

## 客户端与服务端

数据的传输路径：`客户端:本地端口`(localPort) -> `服务端:远程端口`(remotePort) -> 用户

### 举例

1. 客户端：`0.0.0.0:80`
2. 服务端：`服务器ip地址:8080`
3. 用户：`http://服务器ip地址:8080`

## Docker

推荐服务端使用Docker运行；而客户端作为整个服务的源，若要直接运行，可前往下载页面，下载相应系统的软件并运行

下载页面：<https://github.com/fatedier/frp/releases/latest>

### 如何运行

解压至同一目录内，在终端内运行命令：

```shell
./frpc -c ./frpc.toml
```
