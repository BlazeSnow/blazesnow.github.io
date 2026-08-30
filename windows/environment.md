---
title: 设置环境变量 | Windows
lastUpdated: 2026-08-30T10:06:00+8:00
description: 在Windows系统中设置和修改环境变量的方法。
---

# <TitleIcon icon="windows" /> 设置环境变量

> [!TIP]
> 本文以 NAME=VALUE 为例

## 临时环境变量

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端`
3. 输入以下命令并回车：

```shell
set NAME "VALUE"
```

## 用户环境变量

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端`
3. 输入以下命令并回车：

```shell
setx NAME "VALUE"
```

## 系统环境变量 <AdminBadge />

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端管理员`
3. 输入以下命令并回车：

```shell
setx NAME "VALUE" /M
```

## PATH 环境变量 <AdminBadge />

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 选择`终端管理员`
3. 输入以下命令并回车：

```shell
SystemPropertiesAdvanced
```
