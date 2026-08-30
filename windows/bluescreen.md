---
title: 查看蓝屏文件 | Windows
lastUpdated: 2026-08-30T10:07:00+8:00
description: 查看和分析Windows蓝屏转储文件，诊断系统崩溃的原因。
---

# <TitleIcon icon="windows" /> 查看蓝屏文件 <AdminBadge />

## 1. 安装 WinDbg

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端管理员`
3. 输入以下命令并回车：

```shell
winget install Microsoft.WinDbg
```

## 2. 确认转储文件位置

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端管理员`
3. 输入以下命令并回车：

```shell
Test-Path "C:\Windows\MEMORY.DMP"

Get-ChildItem "C:\Windows\Minidump\*.dmp"
```

## 3. 使用 WinDbg 分析错误

1. 打开 WinDbg
2. 使用 WinDbg 的“Open dump file”功能打开 dmp 文件
3. 在命令输入框中输入：`!analyze -v`
