---
lastUpdated: 2025-02-13T10:09:00+8:00
---

# 清理软件卸载残留 | Windows

## 程序安装和卸载故障排除程序

下载并运行：<https://support.microsoft.com/help/17588/fix-problems-that-block-programs-from-being-installed-or-removed>

## 清理残留文件

1. 若软件名为`abc`，删除以下文件夹：
2. `C:\Program Files\abc`
3. `C:\Program Files\Common Files\abc`
4. `C:\Program Files (x86)\abc`
5. `C:\Program Files (x86)\Common Files\abc`
6. `C:\ProgramData\abc`
7. `C:\Users\%USERNAME%\AppData\Local\abc`
8. `C:\Users\%USERNAME%\AppData\LocalLow\abc`
9. `C:\Users\%USERNAME%\AppData\Roaming\abc`

## 清理残留注册表

> [!CAUTION]
> 警告：请勿随意修改注册表，对注册表的随意修改会导致不可预知的问题

1. 若软件名为`abc`
2. 按下`Windows徽标`+`R`
3. 输入`regedit`
4. 删除`HKEY_LOCAL_MACHINE\SOFTWARE\abc`
5. 删除`HKEY_CURRENT_USER\SOFTWARE\abc`

## 若软件仍存在于Windows设置的程序列表中

> [!CAUTION]
> 警告：请勿随意修改注册表，对注册表的随意修改会导致不可预知的问题

1. 若软件名为`abc`
2. 按下`Windows徽标`+`R`
3. 输入`regedit`
4. 打开`HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall`
5. 检查该目录下的文件夹，如：`{12345678-1234-1234-1234-123456789012}`
6. 检查文件夹中的`DisplayName`是否为`abc`
7. 若正确，删除文件夹
