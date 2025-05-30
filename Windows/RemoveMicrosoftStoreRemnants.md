---
lastUpdated: 2025-05-19T13:14:00+8:00
description: 清理Windows系统中微软商店的磁盘残留
---

# 清理微软商店残留 | Windows

本文适用于已经清空`D:\`内所有微软商店程序后，需要清理微软商店残留的用户

> [!CAUTION]
> 警告：删除文件及文件夹后将无法恢复

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 输入以下命令：

```powershell
# 进入目录
cd D:\

# 获取WindowsApps的所有权
takeown /F "WindowsApps" /A /R /D Y

# 获取WindowsApps的管理权
icacls "WindowsApps" /T /grant administrators:F

# 删除WindowsApps
Remove-Item -Path WindowsApps -Recurse -Force

# 删除其它文件夹及文件
Remove-Item -Path DeliveryOptimization -Recurse -Force
Remove-Item -Path WpSystem -Recurse -Force
Remove-Item -Path WUDownloadCache -Recurse -Force
Remove-Item -Path XboxGames -Recurse -Force
Remove-Item -Path .GamingRoot -Force
```
