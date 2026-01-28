---
lastUpdated: 2025-08-06T18:41:00+8:00
---

# 密码服务器 | Docker系列

## 前言

本文介绍使用`Vaultwarden`和`Caddy`在Ubuntu系统上搭建密码服务器，请先根据本章前言完成环境的搭建。

`Vaultwarden`网站：

- <https://github.com/dani-garcia/vaultwarden>
- <https://hub.docker.com/r/vaultwarden/server>

`Caddy`网站：

- <https://caddyserver.com/>
- <https://github.com/caddyserver/caddy>
- <https://hub.docker.com/_/caddy>

## 拉取镜像

```shell
docker pull vaultwarden/server:alpine
docker pull caddy:alpine
```

## 开放端口

| 端口类型 | 端口  | 端口用途 |
| :------: | :---: | :------: |
|   TCP    |  80   | 网页界面 |
|   TCP    |  443  | 网页界面 |

## 配置文件

```shell
# 前往srv目录
cd /srv

# 创建工作目录
mkdir vaultwarden

# 进入工作目录
cd vaultwarden

# 创建docker配置文件
touch docker-compose.yml

# 编辑docker配置文件
nano docker-compose.yml

# 创建caddy配置文件
touch Caddyfile

# 编辑caddy配置文件
nano Caddyfile
```

### `docker-compose.yml`

<<< @/dockerseries/vaultwarden/docker-compose.yml

### `Caddyfile`

<<< @/dockerseries/vaultwarden/Caddyfile

> [!TIP]
> 如需将服务器关联至域名，则将`Caddyfile`中的`:443`修改为域名，并删去`tls`，只保留`reverse_proxy vaultwarden:80`。此时，Caddy会自动申请、管理TLS证书并执行自动HTTPS。

## 开始运行

```shell
# 前往工作目录
cd /srv/vaultwarden

# 开始运行
docker compose up -d
```

在浏览器访问：`https://服务器ip地址`，进入页面。因为证书与私钥为自签名，浏览器会警告网页不安全，在浏览器中选择信任该网页，然后即可正常访问。

> [!TIP]
> 将服务器关联至域名后，证书受信任，服务器可用于Bitwarden App。

## 维护服务

```shell
# 停止服务
cd /srv/vaultwarden
docker compose down

# 更新服务
cd /srv/vaultwarden
docker compose down
docker compose pull
docker compose up -d

# 压缩数据文件夹
cd /srv/vaultwarden
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /srv/vaultwarden
tar -xzf data.tar.gz data/
```
