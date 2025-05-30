---
lastUpdated: 2025-05-13T08:15:00+8:00
description: 对Windows系统进行修复
---

# 修复 | Windows

1. 按下`Windows徽标`+`X`
2. 点击弹出窗口中的`终端管理员`

## 使用DISM

依次运行以下指令：

```powershell
# 检查映像是否已由失败的进程标记为已损坏以及是否能够修复该损坏
DISM.exe /Online /Cleanup-Image /CheckHealth
# 通过扫描来查找映像中的组件存储损坏
DISM.exe /Online /Cleanup-Image /ScanHealth
# 通过扫描来查找映像中的组件存储损坏，然后自动执行修复操作
DISM.exe /Online /Cleanup-image /Restorehealth
```

## 使用SFC

```powershell
# 扫描所有保护的系统文件的完整性，并尽可能修复有问题的文件。
sfc.exe /SCANNOW
```
