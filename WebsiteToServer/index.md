---
lastUpdated: 2025-02-16T09:56:00+8:00
---

# 部署网站至服务器

## 前言

> [!TIP]
> 服务器防火墙需打开80和443端口

本章将把[VitePress建站教程](/VitePress/)建成的网站通过GitHub仓库部署到Ubuntu服务器上

## 安装环境

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

1. 前往var文件夹：```cd /var```
2. 新建工作目录：```mkdir 用户名.github.io```
3. 进入工作目录：```cd 用户名.github.io```
4. 建立git仓库：```git init```
5. 连接远程仓库：```git remote add origin https://github.com/用户名/用户名.github.io```
6. 拉取代码：```git pull origin main```
7. 安装npm组件：```npm install```
8. 构建网站：```npm run docs:build```

## 准备SSL

1. 申请SSL证书以及私钥，通常为：```证书.crt```、```私钥.key```或```证书.pem```、```私钥.pem```
2. 前往var文件夹：```cd /var```
3. 创建SSL存放目录：```mkdir ssl```
4. 进入SSL存放目录：```cd ssl```
5. 上传证书及私钥

## 配置Nginx

1. 前往Nginx目录：```cd /etc/nginx/conf.d```
2. 新建正式的配置文件：```touch nginx.conf```
3. 编辑正式的配置文件：```nano nginx.conf```
4. 检查配置文件的语法是否正确：```nginx -t```
5. 重启Nginx让配置生效：```nginx -s reload```

## ```nginx.conf```

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

    ssl_certificate /var/ssl/证书.crt;
    ssl_certificate_key /var/ssl/私钥.key;

    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    location / {
        root /var/用户名.github.io/.vitepress/dist;

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
3. 如服务器的位置在中国境内，请完成非经营性ICP备案
4. 访问域名即可访问网页

## 维护网站

1. 前往服务器的网站目录：```cd /var/用户名.github.io```
2. 拉取代码：```git pull origin main```
3. 用N更新npm：```n latest```
4. 更新npm内容：```npm install```
5. 构建网站：```npm run docs:build```

## 广告

如需购买服务器，可以使用本人的阿里云推广链接，提供7.5折的优惠：<https://www.aliyun.com/minisite/goods?userCode=rayxhvy4>

![ad](ad.png)
