---
lastUpdated: 2024-5-31T22:11:00+8:00
---

# 填充index

1. 用编辑器打开```index.html```
2. 填入以下内容

## 内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="description" content="Description">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
</head>
<body>
<div id="app"></div>
<script>
    window.$docsify = {
        name: '',
        repo: ''
    }
</script>
<!-- Docsify v4 -->
<script src="//cdn.jsdelivr.net/npm/docsify@4"></script>
</body>
</html>
```

## 内容介绍

1. ```<html lang="en">```：网站语言，建议改为中文```zh```
2. ```<meta charset="UTF-8">```：采用UTF-8编码，不需要更改
3. 浏览器配置，不需要更改：
	- ```<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>```
	- ```<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">```
4. ```<meta name="description" content="Description">```：网页描述，可以修改```content=```的内容
5. ```name: ''```：左上角名称，可以修改
6. ```repo: ''```：右上角的GitHub仓库按钮，可以修改
7. 下一篇内容预告：
	- ```<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">```
	- ```<script src="//cdn.jsdelivr.net/npm/docsify@4"></script>```