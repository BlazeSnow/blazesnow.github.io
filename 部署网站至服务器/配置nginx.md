---
lastUpdated: 2024-7-27T14:19:00+8:00
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
	listen 80;
	listen [::]:80;

	server_name <网页最终的链接地址1> <网页最终的链接地址2>;

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