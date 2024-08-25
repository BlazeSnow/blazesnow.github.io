---
lastUpdated: 2024-8-25T16:13:00+8:00
titleTemplate: ':title | 部署Bitwarden密码服务 | BlazeSnow帮助网站'
---

# SSL证书

## 自签名SSL证书

1. 安装OpenSSL：```sudo apt install openssl```
2. 前往root目录：```cd ~```
3. 获取证书和私钥：```openssl req -newkey rsa:4096 -x509 -sha256 -days 3650 -nodes -out example.crt -keyout example.key```