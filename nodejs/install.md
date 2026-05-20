---
title: 安装Nodejs | Nodejs
lastUpdated: 2026-04-29T09:17:00+8:00
description: 安装Node.js运行环境的完整教程。
---

# <TitleIcon icon="nodedotjs" /> 安装Nodejs

1. 按下`Windows徽标`+`X`
2. 点击弹出窗口中的`终端管理员`
3. 输入并回车：

```shell
winget install OpenJS.NodeJS.LTS
```

## 修改PowerShell执行策略

```shell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

## 检查安装是否成功

```shell
node -v
npm -v
```

## 卸载Nodejs

```shell
winget uninstall "OpenJS.NodeJS.LTS"
Set-ExecutionPolicy Undefined -Scope CurrentUser -Force
```
