---
lastUpdated: 2025-11-24T08:20:00+8:00
---

# 证书申请器 | Docker系列

## 前言

本文介绍使用`Certbot`和`Cloudflare`在Ubuntu服务器上搭建证书申请器，请先根据本章前言完成环境的搭建。

`Certbot`地址：

- <https://hub.docker.com/r/certbot/dns-cloudflare>
- <https://certbot.eff.org/>
- <https://eff-certbot.readthedocs.io/en/stable/>

`Cloudflare`地址：

- <https://www.cloudflare.com/zh-cn/>
- <https://dash.cloudflare.com/>

## 拉取镜像

```shell
docker pull certbot/dns-cloudflare:latest
```

## 开放端口

> 本文无需开放端口

## 配置API密钥

1. 准备一个Cloudflare账户，注册地址：<https://dash.cloudflare.com/sign-up>
2. 打开网址：<https://dash.cloudflare.com/>
3. 添加域名至Cloudflare
4. 返回用户首页，在左侧边栏找到“管理帐户”，展开后点击“帐户API令牌”
5. 创建一个帐户API令牌，权限设置为`区域:DNS:读取`、`区域:DNS:编辑`
6. 保存创建好的API密钥

## 配置文件

```shell
# 创建并进入工作目录
mkdir -p /srv/certbot && cd /srv/certbot

# 创建并编辑docker配置文件
nano docker-compose.yml

# 创建并编辑Cloudflare API密钥文件
nano apikey.ini
```

### `docker-compose.yml`

<<< @/dockerseries/certbot/docker-compose.yml{22,24,26}

### `apikey.ini`

```ini{2}
# 此处替换为您的Cloudflare API密钥
dns_cloudflare_api_token = example
```

## 开始运行

```shell
# 前往工作目录
cd /srv/certbot

# 开始运行
docker compose up
```

程序运行完毕后，证书及私钥将创建于`/srv/certbot/conf/archive`或`/srv/certbot/conf/live`，使用前请阅读Certbot生成的README文件

## 维护服务

```shell
# 停止服务
cd /srv/certbot
docker compose down

# 更新服务
cd /srv/certbot
docker compose down
docker compose pull
docker compose up

# 压缩数据文件夹
cd /srv/certbot
tar -czf conf.tar.gz conf/
tar -czf data.tar.gz data/

# 解压缩数据文件夹
cd /srv/certbot
tar -xzf conf.tar.gz conf/
tar -xzf data.tar.gz data/
```
