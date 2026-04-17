---
lastUpdated: 2026-04-18T01:45:00+8:00
---

# 安装Nodejs | Windows

> Node.js 是一个免费、开源、跨平台的 JavaScript 运行时环境，可让开发人员创建服务器、Web 应用程序、命令行工具和脚本。

官方网站：<https://nodejs.org/zh-cn>

## Nodejs

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 选择所需版本，输入后回车：

```shell
winget install OpenJS.NodeJS
winget install OpenJS.NodeJS.LTS
winget install OpenJS.NodeJS.23
winget install OpenJS.NodeJS.22
winget install OpenJS.NodeJS.21
winget install OpenJS.NodeJS.20
winget install OpenJS.NodeJS.19
winget install OpenJS.NodeJS.18
winget install OpenJS.NodeJS.17
winget install OpenJS.NodeJS.16
winget install OpenJS.NodeJS.15
winget install OpenJS.NodeJS.14
winget install OpenJS.NodeJS.12
winget install OpenJS.NodeJS.10
winget install OpenJS.NodeJS.8
winget install OpenJS.NodeJS.7
winget install OpenJS.NodeJS.6
winget install OpenJS.NodeJS.4
```

## 未签名的本地脚本

### 允许未签名的本地脚本

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force
```

### 检查运行策略

1. 按下`Windows徽标`+`X`
2. 选中`终端`
3. 输入并回车：

```shell
Get-ExecutionPolicy -Scope CurrentUser
```

### 撤销允许未签名的本地脚本

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
Set-ExecutionPolicy Restricted -Scope CurrentUser -Force
```
