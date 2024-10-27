---
lastUpdated: 2024-10-27T11:19:00+8:00
---

# 开始运行 | 部署Bitwarden密码服务

## 运行Nginx

1. 检查配置文件：```nginx -t```
2. 重启Nginx：```sudo systemctl restart nginx```

## 运行Docker

1. 前往Bitwarden目录：```cd /var/vw```
2. 运行：```docker compose up -d```或```docker-compose up -d```

## 域名DNS配置（无域名时忽略此步）

设置域名A记录，指向服务器的ip地址