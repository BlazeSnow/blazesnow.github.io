---
lastUpdated: 2025-06-07T16:12:00+8:00
description: 清理Windows系统的软件卸载残留
---

# 清除程序的卸载残留 | Windows

> 本文以程序名`abc`为示例。本文旨在说明已经卸载`abc`程序后，对`abc`程序进行清理的情况。

## Windows疑难解答

下载并运行：<https://support.microsoft.com/help/17588/fix-problems-that-block-programs-from-being-installed-or-removed>

## 清除文件

1. `C:\Program Files\abc`
2. `C:\Program Files\Common Files\abc`
3. `C:\Program Files (x86)\abc`
4. `C:\Program Files (x86)\Common Files\abc`
5. `C:\ProgramData\abc`
6. `C:\Users\%USERNAME%\AppData\Local\abc`
7. `C:\Users\%USERNAME%\AppData\LocalLow\abc`
8. `C:\Users\%USERNAME%\AppData\Roaming\abc`

## 清除注册表

> [!CAUTION]
> 警告：请勿随意修改注册表，对注册表的随意修改会导致不可预知的问题

1. 按下`Windows徽标`+`R`
2. 输入`regedit`
3. 删除`HKEY_LOCAL_MACHINE\SOFTWARE\abc`
4. 删除`HKEY_CURRENT_USER\SOFTWARE\abc`

## 清除程序列表中的程序

1. 按下`Windows徽标`+`R`
2. 输入`control`
3. 打开`程序与功能`
4. 找到程序`abc`并卸载
