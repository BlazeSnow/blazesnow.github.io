---
lastUpdated: 2025-07-08T19:50:00+8:00
description: 在Windows系统中安装Nodejs
---

# 安装Nodejs | Windows

> Node.js 是一个免费、开源、跨平台的 JavaScript 运行时环境，可让开发人员创建服务器、Web 应用程序、命令行工具和脚本。

官方网站：<https://nodejs.org/zh-cn>

## Current

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
winget install OpenJS.NodeJS
```

## LTS

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
winget install OpenJS.NodeJS.LTS
```

## 允许运行npm

1. 按下`Windows徽标`+`I`
2. 搜索：`Powershel`
3. 打开：`允许本地PowerShell脚本在不签名的情况下运行`
4. 开启开关：`更改执行策略，以允许本地PowerShell脚本在未签名的情况下运行。远程脚本需要签名。`
