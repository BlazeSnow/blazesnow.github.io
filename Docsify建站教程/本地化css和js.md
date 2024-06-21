---
lastUpdated: 2024-5-31T22:11:00+8:00
---

# 本地化css和js

## 从```jsdelivr cdn```下载docsify包

1. 打开：<https://www.jsdelivr.com/package/npm/docsify>
2. 单击下载按钮，下载整个仓库打包的```tgz```包

## 本地化css

1. 解压得到的```tgz```包
2. 在```theme```文件夹中找到```vue.css```
3. 放入网站文件夹中
4. 打开```index.html```
5. 找到```<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">```
6. 修改为```<link rel="stylesheet" href="vue.css">```

## 本地化js

1. 解压得到的```tgz```包
2. 在```lib```文件夹中找到```docsify.js```和```docsify.min.js```
3. 放入网站文件夹中
4. 打开```index.html```
5. 找到```<script src="//cdn.jsdelivr.net/npm/docsify@4"></script>```
6. 修改为```<script src="docsify.js"></script>```