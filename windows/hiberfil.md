---
title: 禁用快速启动 | Windows
lastUpdated: 2026-08-30T10:05:00+8:00
description: 禁用Windows快速启动功能，解决关机或启动相关的问题。
---

# <TitleIcon icon="windows" /> 禁用快速启动

> [!TIP]
> 快速启动会在系统分区中生成 `hiberfil.sys` 以保存系统状态和部分硬件驱动程序的状态，这可能导致某些硬件在重新启动后无法正常工作。

## 确认状态

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端`
3. 输入以下命令并回车：

```powershell
powercfg /a
```

## 禁用快速启动 <AdminBadge />

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端管理员`
3. 输入以下命令并回车：

```powershell
powercfg /HIBERNATE off
```

## 恢复使用快速启动 <AdminBadge />

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端管理员`
3. 输入以下命令并回车：

```powershell
powercfg /HIBERNATE on
```
