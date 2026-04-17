---
lastUpdated: 2025-05-19T12:02:00+8:00
---

# 禁用快速启动 | Windows

## 快速启动的缺点

快速启动会在系统分区中生成`hiberfil.sys`以保存系统状态和部分硬件驱动程序的状态，这可能导致某些硬件在重新启动后无法正常工作。

## 确认快速启动状态

1. 按下`Windows徽标`+`X`
2. 选择`终端`
3. 输入以下命令并回车：

```powershell
powercfg /a
```

## 如何禁用快速启动

> `hiberfil.sys`是休眠功能和快速启动功能的核心。如果禁用休眠功能，系统会删除该文件，从而使快速启动功能无法运作。

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 输入以下命令并回车：

```powershell
powercfg /HIBERNATE off
```

## 恢复使用快速启动

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 输入以下命令并回车：

```powershell
powercfg /HIBERNATE on
```
