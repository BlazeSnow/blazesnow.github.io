---
lastUpdated: 2025-01-03T17:07:00+8:00
---

# 安装WinGet

> WinGet是一种命令行工具，使用户能够在Windows 10、Windows 11和Windows Server 2025计算机上发现、安装、升级、删除和配置应用程序。 此工具是Windows程序包管理器服务的客户端接口。

官方网站：<https://learn.microsoft.com/zh-cn/windows/package-manager/winget/>

## 说明

> 本网站的Windows相关版块使用WinGet安装内容，需要准备WinGet以继续教程，WinGet通常会由Windows系统自动安装。

## 确认安装

1. 按下```Windows徽标```+```X```
2. 选中```终端管理员```
3. 输入并回车：```winget --version```
4. 若返回版本号，则已安装
5. 若发生错误，则输入：```Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe```