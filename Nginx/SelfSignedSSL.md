---
lastUpdated: 2024-11-29T16:22:00+8:00
description: Nginx配置自签名SSL证书和私钥的教程
---

# 自签名SSL | Nginx

1. 前往var目录：`cd /var`
2. 创建工作目录：`mkdir ssl`
3. 进入工作目录：`cd ssl`
4. 自签名SSL证书`cert.crt`和`privkey.key`：

## 快速生成

```bash
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout privkey.key -out cert.crt -days 3650
```

## 带CSR生成

1. 生成私钥：`openssl genrsa -out privkey.key 4096`
2. 生成证书请求：`openssl req -new -key privkey.key -out request.csr`
3. 生成证书：`openssl x509 -req -days 3650 -in request.csr -signkey privkey.key -out cert.crt`

## 常用后缀名

|  后缀名   |                 备注                 |
| :-------: | :----------------------------------: |
| `crt` |                 证书                 |
| `cer` |                 证书                 |
| `key` |                 私钥                 |
| `pub` |                 公钥                 |
| `csr` |             证书签名请求             |
| `pem` | 通用格式，可以存储证书、公钥或证书链 |
