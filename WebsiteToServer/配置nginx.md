---
lastUpdated: 2024-8-25T15:30:00+8:00
---

# 配置nginx | 部署网站至服务器

## 配置文件地址

- 文件目录：```/etc/nginx/sites-available```
- 文件名：```default```

## 配置文件内容

> 网页最终的链接地址即```服务器IP```，如果有域名指向服务器，则填写```域名```，多个链接地址之间以空格隔开，也可以直接填写```_```

```nginx
server {
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    listen 80;
    server_name <网页最终的链接地址1> <网页最终的链接地址2>;
    index index.html;

    location / {
        # content location
        root /var/<GitHub仓库名称>/.vitepress/dist;

        # exact matches -> reverse clean urls -> folders -> not found
        try_files $uri $uri.html $uri/ =404;

        # non existent pages
        error_page 404 /404.html;

        # a folder without index.html raises 403 in this setup
        error_page 403 /404.html;

        # adjust caching headers
        # files in the assets folder have hashes filenames
        location ~* ^/assets/ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
}
```

## 检查配置文件的语法是否正确

```sudo nginx -t```

## 重启nginx

```sudo systemctl restart nginx```