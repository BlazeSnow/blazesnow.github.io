---
lastUpdated: 2024-8-25T22:52:00+8:00
---

# Nginx配置https

::: info 提示：```Cloudflare```
若使用类似于```Cloudflare```的代理服务，则可跳过本页面。
:::

> ```Bitwarden```客户端使用此自托管服务器时，需要有SSL证书和域名，否则无法运行。

## 上传SSL证书至服务器

1. 上传证书：```example.crt```
2. 上传私钥：```example.key```

### ```example.crt```

```txt
-----BEGIN CERTIFICATE-----
中间为证书内容
-----END CERTIFICATE-----
```

### ```example.key```

```txt
-----BEGIN PRIVATE KEY-----
中间为私钥内容
-----END PRIVATE KEY-----
```

## 安装Nginx

```sudo apt install nginx```

## 配置Nginx

::: info 提示
除了配置文件内容不同，其余内容相同
:::

前往```部署网站到服务器```：[点击此处跳转](/部署网站至服务器/配置nginx)

### Nginx配置文件内容

```nginx
server {
    listen 443 ssl;
    server_name _;
    
    # 此处替换为SSL证书位置
    ssl_certificate /root/example.crt;  
    # 此处替换为SSL私钥位置
    ssl_certificate_key /root/example.key;  
    
    location / {
        # 此处端口与下方Docker-compose调整的相同
        proxy_pass http://localhost:11001;  
    }
}

server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}
```

## 调整Docker-compose配置文件

1. 查看```vaultwarden```的id：```docker ps -a```
2. 终止```vaultwarden```：```docker stop <id>```
3. 前往配置文件位置：```cd /var/bitwarden```
4. 编辑配置文件：```nano compose.xml```
5. 重新开始运行：```docker-compose up -d && docker-compose logs -f```

### ```compose.xml```

找到```ports```位置，改前：

```xml
ports:
      - 80:80
```

改后：

```xml
ports:
      - 11001:80
```