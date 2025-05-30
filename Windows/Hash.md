---
lastUpdated: 2025-02-13T09:55:00+8:00
description: 在Windows系统中计算哈希值
---

# 计算哈希值 | Windows

1. 找到需要计算哈希值的文件，复制文件路径
2. 按下`Windows徽标`+`X`
3. 单击`终端`
4. 输入并回车：`Get-FileHash "文件路径"`

> [!TIP]
> Windows终端默认计算`SHA-256`，如果需要计算其他哈希值函数，请修改为`Get-FileHash -Algorithm SHA1 "文件路径"`
