---
lastUpdated: 2025-02-08T08:29:00+8:00
description: Windows安装Nodejs的教程
---

# 安装Nodejs | Nodejs

1. 打开官方网站：<https://nodejs.org/zh-cn>
2. 单击`下载 Node.js (LTS)`
3. 运行安装文件

## 允许运行npm

1. 按下`Windows徽标`+`I`
2. 搜索：`Powershel`
3. 打开：`允许本地PowerShell脚本在不签名的情况下运行`
4. 开启开关：`更改执行策略，以允许本地PowerShell脚本在未签名的情况下运行。远程脚本需要签名。`

## 检查安装是否成功

1. 按下`Windows徽标`+`X`
2. 点击弹出窗口中的`终端管理员`
3. 输入：`node -v`
4. 如果正常显示版本号则成功，如果不正常就重新安装
5. 输入：`npm -v`
6. 如果正常显示版本号则成功，如果不正常就重新安装
