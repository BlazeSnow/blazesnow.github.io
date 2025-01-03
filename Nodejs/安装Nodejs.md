---
lastUpdated: 2025-01-03T19:56:00+8:00
---

# 安装Nodejs | Nodejs相关

## 使用安装包安装

1. 打开官方网站：<https://nodejs.org/zh-cn>
2. 单击```下载 Node.js (LTS)```
3. 运行安装文件

## 使用WinGet安装

1. 按下```Windows徽标```+```X```
2. 选择```终端管理员```
3. 选择版本，输入并回车：
    - 最新版本：```winget install OpenJS.NodeJS```
    - 长期支持版本：```winget install OpenJS.NodeJS.LTS```

## 允许运行npm

1. 按下```Windows徽标```+```I```
2. 搜索：```Powershel```
3. 打开：```允许本地PowerShell脚本在不签名的情况下运行```
4. 开启开关：```更改执行策略，以允许本地PowerShell脚本在未签名的情况下运行。远程脚本需要签名。```

## 检查安装是否成功

1. 按下```Windows徽标```+```X```
2. 点击弹出窗口中的```终端管理员```
3. 输入：```node -v```
4. 如果正常显示版本号则成功，如果不正常就重新安装
5. 输入：```npm -v```
6. 如果正常显示版本号则成功，如果不正常就重新安装
