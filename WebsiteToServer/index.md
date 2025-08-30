---
lastUpdated: 2025-08-06T15:17:00+8:00
---

# 部署网站至服务器

## 前言

本章将把[VitePress建站教程](/VitePress/)建成的网站通过GitHub仓库部署到Ubuntu服务器上

## 安装环境

> 如静态页面非vitepress版，请安装Nginx后跳过后续步骤

```bash
# 更新apt包
sudo apt update
sudo apt upgrade -y

# 安装Nginx
sudo apt install nginx

# 安装Nodejs和npm
sudo apt install nodejs
sudo apt install npm

# 安装N并用N更新Nodejs
npm install -g n
n latest
```

## 引入仓库

> 如静态页面非vitepress版，请跳过此步，并自行上传文件

```bash
# 前往srv文件夹
cd /srv

# 拉取代码
git clone https://github.com/用户名/用户名.github.io

# 进入目录
cd 用户名.github.io

# 安装npm组件
npm ci

# 构建网站
npm run docs:build
```

## 准备SSL

申请SSL证书以及私钥：

- <https://yundun.console.aliyun.com/?p=cas_buy&certOrderType=free>
- <https://console.cloud.tencent.com/ssl>

证书及私钥通常为：

- `证书.crt`及`私钥.key`
- `证书.pem`及`私钥.pem`

```bash
# 前往srv文件夹
cd /srv

# 创建SSL存放目录
mkdir ssl

# 进入SSL存放目录
cd ssl

# 上传证书及私钥
# 自行上传
```

## 配置Nginx

```bash
# 前往Nginx目录
cd /etc/nginx/conf.d

# 新建正式的配置文件
touch nginx.conf

# 编辑正式的配置文件
nano nginx.conf

# 检查配置文件的语法是否正确
nginx -t

# 重启Nginx让配置生效
nginx -s reload
```

### `nginx.conf`

```nginx{15,16,25}
server {
    listen 80;
    server_name localhost;
    return 302 https://$host$request_uri;
}

server {
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    listen 443 ssl;
    server_name localhost;
    index index.html;

    ssl_certificate /srv/ssl/证书.crt;
    ssl_certificate_key /srv/ssl/私钥.key;

    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    location / {
        root /srv/用户名.github.io/.vitepress/dist;

        try_files $uri $uri.html $uri/ =404;

        error_page 404 /404.html;

        error_page 403 /404.html;

        location ~* ^/assets/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

## 配置DNS

1. 前往域名的DNS提供商处
2. 添加A或AAAA记录，即服务器的ip地址
3. 打开服务商的防火墙设置，放行80和443端口
4. 如服务器的位置在中国境内，请完成非经营性ICP备案
5. 访问域名即可访问网页

## 维护网站

```bash
# 前往服务器的网站目录
cd /srv/用户名.github.io

# 拉取代码
git pull origin main

# 用N更新npm
n latest

# 更新npm
npm install npm -g

# 更新npm内容
npm ci

# 构建网站
npm run docs:build
```

## 广告

如需购买服务器，可以使用本人的阿里云推广链接，提供7.5折的优惠：<https://www.aliyun.com/minisite/goods?userCode=rayxhvy4>

![ad](ad.png)
