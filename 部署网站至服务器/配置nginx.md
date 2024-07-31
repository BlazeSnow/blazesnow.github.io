---
lastUpdated: 2024-7-31T14:43:00+8:00
---

# 配置nginx

## 配置文件地址

```/etc/nginx/sites-available/default```

## 配置文件内容

::: info 提示
替换内容时删除尖括号！
:::

> 网页最终的链接地址即```服务器IP```，如果有域名指向服务器，则填写```域名```，多个链接地址之间以空格隔开

```txt
server {
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    listen 80;
    server_name <网页最终的链接地址1> <网页最终的链接地址2>;
    index index.html;

    location / {
        # content location
        root /var/<此处替换为GitHub仓库名称>/.vitepress/dist;

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