---
lastUpdated: 2024-10-19T12:23:00+8:00
---

# 配置文件 | 部署Bitwarden密码服务

## 创建密码管理相关目录

1. 前往var目录：```cd /var```
2. 创建工作目录：```mkdir vw```
3. 前往工作目录：```cd vw```
4. 创建数据存储目录：```mkdir data```

## 配置Docker-compose

1. 前往工作目录：```cd /var/vw```
2. 创建配置文件：```touch compose.yml```
3. 修改配置文件：```nano compose.yml```

### ```compose.yml```

```yml
services:
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: vaultwarden
    restart: always
    environment:
      SIGNUPS_ALLOWED: "true"
    volumes:
      - ./data:/data
    ports:
      - 11001:80
```

## SSL证书

1. 前往服务商处签发SSL证书
2. 前往工作目录：```cd /var/vw```
3. 上传两个文件：```example.pem```和```example.key```

## 配置Nginx

1. 前往nginx配置文件目录：```cd /etc/nginx/sites-available```
2. 编辑配置文件：```nano default```

### ```default```

```nginx{6,8}
server {
	listen 443 ssl;
	server_name _;

	#填写证书文件绝对路径
	ssl_certificate /var/vw/example.pem;
	#填写证书私钥文件绝对路径
	ssl_certificate_key /var/vw/example.key;

	ssl_session_cache shared:SSL:1m;
	ssl_session_timeout 5m;

	#TLS协议版本越高，HTTPS通信的安全性越高，但是相较于低版本TLS协议，高版本TLS协议对浏览器的兼容性较差。
	ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
	ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
	#表示优先使用服务端加密套件。默认开启
	ssl_prefer_server_ciphers on;

	location / {
		proxy_pass http://localhost:11001;
	}
}

server {
	listen 80;
	server_name _;
	return 302 https://$host$request_uri;
}
```