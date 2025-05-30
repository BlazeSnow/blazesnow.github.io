---
lastUpdated: 2024-11-29T16:22:00+8:00
description: Nginx反向代理教程
---

# 反向代理 | Nginx

> 反向代理8080端口到https

1. 前往nginx配置目录：`cd /etc/nginx`
2. 进入默认配置目录：`cd sites-available`
3. 删除默认配置文件：`rm default`
4. 新建顶替配置文件：`touch default`
5. 返回上级目录：`cd ..`
6. 进入配置文件目录：`cd conf.d`
7. 创建配置文件：`touch custom.conf`
8. 编辑配置文件：`nano custom.conf`
9. 检查配置文件：`nginx -t`
10. 重新启动nginx：`systemctl restart nginx`

## `custom.conf`

```nginx
server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name _;

    ssl_certificate /var/ssl/cert.crt;
    ssl_certificate_key /var/ssl/privkey.key;

    ssl_session_cache shared:SSL:1m;
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
