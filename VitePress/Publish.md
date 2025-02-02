---
lastUpdated: 2024-11-14T16:15:00+8:00
---

# 发布网站 | VitePress建站教程

## GitHub仓库设置

1. 新建GitHub仓库：<https://github.com/new>
2. 仓库名称为：```用户名.github.io```
3. 进入仓库设置
4. 侧边栏选择```Pages```
5. 找到```Build and deployment```的```Source```
6. 从```Deploy from a branch```修改为```GitHub Actions```

## 本地仓库上传

1. 前往工作目录并打开终端命令行
2. 添加远程仓库：```git remote add origin https://github.com/用户名/用户名.github.io```
3. 检测本地的远程仓库配置：```git remote -v```
4. GitHub推送代码，建议使用图形化软件```GitHub Desktop```：<https://github.com/apps/desktop>
5. 将工作目录```C:\用户名.github.io```使用```add existing repository```添加到```GitHub Desktop```中
6. 推送仓库
7. 访问```https://用户名.github.io```即可