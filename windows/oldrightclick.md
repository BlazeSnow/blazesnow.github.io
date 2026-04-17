---
lastUpdated: 2025-05-13T08:12:00+8:00
---

# 旧版右键菜单 | Windows

> [!CAUTION]
> 警告：请勿随意修改注册表，对注册表的随意修改会导致不可预知的问题

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 输入以下命令并回车
4. 重新启动文件资源管理器，参见[重启文件资源管理器](/windows/tskillexplorer)

## 使用旧版右键菜单

```powershell
reg add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve
```

## 恢复使用新版右键菜单

```powershell
reg delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}" /f
```
