---
lastUpdated: 2024-7-10T11:04:00+8:00
---

# 配置nginx

## 配置文件地址

```etc/nginx/sites-available/default```

## 配置文件内容

::: info 提示
替换内容时删除尖括号！
:::

> 网页最终的链接地址即```服务器IP```，如果有域名指向服务器，则填写```域名```

```txt
server {
	listen 80;
	listen [::]:80;

	server_name <网页最终的链接地址>;

	root /var/<此处替换为GitHub仓库名称>/.vitepress/dist;
	index index.html;

	location / {
		try_files $uri $uri/ =404;
	}
}
```

## 检查配置文件的语法是否正确

```sudo nginx -t```

## 重启nginx

```sudo systemctl restart nginx```