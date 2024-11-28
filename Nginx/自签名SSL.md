---
lastUpdated: 2024-11-28T12:43:00+8:00
---

# 自签名SSL | Nginx相关

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir ssl```
3. 进入工作目录：```cd ssl```
4. 自签名SSL证书```cert.pem```和```privkey.pem```：

```bash
openssl req -x509 -newkey rsa:4096 -sha256 -nodes -keyout privkey.pem -out cert.pem -days 3650
```