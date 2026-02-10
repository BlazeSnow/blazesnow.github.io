---
lastUpdated: 2026-01-28T11:52:00+8:00
---

# 安装Nodejs | Windows

> Node.js 是一个免费、开源、跨平台的 JavaScript 运行时环境，可让开发人员创建服务器、Web 应用程序、命令行工具和脚本。

官方网站：<https://nodejs.org/zh-cn>

## Nodejs

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
winget.exe install --id "OpenJS.NodeJS" --exact
winget.exe install --id "OpenJS.NodeJS.LTS" --exact
winget.exe install --id "OpenJS.NodeJS.23" --exact
winget.exe install --id "OpenJS.NodeJS.22" --exact
winget.exe install --id "OpenJS.NodeJS.21" --exact
winget.exe install --id "OpenJS.NodeJS.20" --exact
winget.exe install --id "OpenJS.NodeJS.19" --exact
winget.exe install --id "OpenJS.NodeJS.18" --exact
winget.exe install --id "OpenJS.NodeJS.17" --exact
winget.exe install --id "OpenJS.NodeJS.16" --exact
winget.exe install --id "OpenJS.NodeJS.15" --exact
winget.exe install --id "OpenJS.NodeJS.14" --exact
winget.exe install --id "OpenJS.NodeJS.12" --exact
winget.exe install --id "OpenJS.NodeJS.10" --exact
winget.exe install --id "OpenJS.NodeJS.8" --exact
winget.exe install --id "OpenJS.NodeJS.7" --exact
winget.exe install --id "OpenJS.NodeJS.6" --exact
winget.exe install --id "OpenJS.NodeJS.4" --exact
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
