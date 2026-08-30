---
title: 设置环境变量 | Windows
lastUpdated: 2026-08-30T09:03:00+8:00
description: 在Windows系统中设置和修改环境变量的方法。
---

# <TitleIcon icon="windows" /> 设置环境变量

> [!TIP]
> 本文以 NAME=VALUE 为例

## 临时环境变量

```powershell
$env:NAME = "VALUE"
```

## 用户环境变量

```powershell
[Environment]::SetEnvironmentVariable("NAME", "VALUE", "User")
```

## 系统环境变量

```powershell
[Environment]::SetEnvironmentVariable("NAME", "VALUE", "Machine")
```

## PATH 环境变量

```powershell
SystemPropertiesAdvanced
```
