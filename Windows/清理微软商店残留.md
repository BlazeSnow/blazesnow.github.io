---
lastUpdated: 2025-01-08T08:44:00+8:00
---

# 清理微软商店残留 | Windows相关

> 本篇适用于已经清空```D:\```内所有```Microsoft store程序```后，需要清理微软商店残留的用户

::: danger 警告：无法恢复
删除文件及文件夹后将无法恢复
:::


1. 按下```Windows徽标```+```X```
2. 选择```终端管理员```
3. 进入目录：```cd D:\```
4. 输入以下命令：

```powershell
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