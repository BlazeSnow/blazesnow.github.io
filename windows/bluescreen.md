---
title: 查看蓝屏文件 | Windows
lastUpdated: 2025-02-17T10:31:00+8:00
description: 查看和分析Windows蓝屏转储文件，诊断系统崩溃的原因。
---

# <TitleIcon icon="windows" /> 查看蓝屏文件

> WinDbg是一个调试器，可用于分析故障转储、调试实时用户模式和内核模式代码，以及检查CPU寄存器和内存。

1. 安装WinDBG：<https://learn.microsoft.com/zh-CN/windows-hardware/drivers/debugger>
2. 打开目录`C:\Windows\Minidump`
3. 找到蓝屏文件
4. 复制到其他位置
5. 打开蓝屏文件
6. 输入：`!analyze -v`
