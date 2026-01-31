---
lastUpdated: 2026-01-28T10:23:00+8:00
---

# 安装WinGet | Windows

> WinGet 是一种命令行工具，使用户能够在 Windows 10、Windows 11 和 Windows Server 2025 计算机上发现、安装、升级、删除和配置应用程序。 此工具是 Windows 程序包管理器服务的客户端接口。

官方网站：<https://learn.microsoft.com/zh-cn/windows/package-manager/winget/>

## 确认WinGet已安装

1. 按下`Windows徽标`+`X`
2. 选中`终端`
3. 输入并回车：

```shell
winget.exe --version
```

## 手动安装

1. 按下`Windows徽标`+`X`
2. 选中`终端管理员`
3. 输入并回车：

```shell
Add-AppxPackage -RegisterByFamilyName -MainPackage Microsoft.DesktopAppInstaller_8wekyb3d8bbwe
```
