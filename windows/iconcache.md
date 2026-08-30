---
title: 修复桌面图标 | Windows
lastUpdated: 2026-08-30T10:21:00+8:00
description: 修复Windows桌面图标显示异常或变白的问题，重建图标缓存。
---

# <TitleIcon icon="windows" /> 修复桌面图标

> 此教程用于清除桌面图标缓存，可以修复图标变空白的问题

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端`
3. 输入以下命令并回车：

```shell
Get-Process Explorer | Stop-Process -Force; Remove-Item -Force "$env:localappdata\IconCache.db", "$env:localappdata\Microsoft\Windows\Explorer\iconcache_*.db" -ErrorAction SilentlyContinue; Start-Process explorer.exe
```
