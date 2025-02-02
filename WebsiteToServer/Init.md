---
lastUpdated: 2024-11-14T14:19:00+8:00
---

# 引入仓库 | 部署网站至服务器

1. 前往var文件夹：```cd /var```
2. 新建工作目录：```mkdir example```
3. 进入工作目录：```cd example```
4. 建立git仓库：```git init```
5. 连接远程仓库：```git remote add origin https://github.com/example/example```或```git remote add origin git@github.com:example/example```
6. 拉取代码：```git pull origin main```
7. 安装package.json内组件：```npm install```
8. 构建网站：```npm run docs:build```