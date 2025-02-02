---
lastUpdated: 2024-11-14T14:03:00+8:00
---

# 配置Nginx | 部署网站至服务器

1. 前往Nginx目录：```cd /etc/nginx```
2. 前往sites-available目录：```cd sites-available```
3. 删去默认配置：```rm default```
4. 新建空配置：```touch default```
5. 前往上级目录：```cd ..```
6. 前往配置文件目录：```cd conf.d```
7. 新建正式的配置文件：```touch example.conf```
8. 编辑正式的配置文件：```nano example.conf```
9. 检查配置文件的语法是否正确：```nginx -t```
10. 重启Nginx让配置生效：```systemctl restart nginx```

## ```example.conf```

```nginx{11}
server {
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    listen 80;
    server_name _;
    index index.html;

    location / {
        # content location
        root /var/example/.vitepress/dist;

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