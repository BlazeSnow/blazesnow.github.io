---
title: 计算哈希值 | Windows
lastUpdated: 2025-06-07T16:00:00+8:00
description: 在Windows系统中计算文件哈希值以验证文件完整性的方法。
---

# <TitleIcon icon="windows" /> 计算哈希值

1. 按下 <WinKey /> + <KeyCap char="X" />
2. 单击`终端`
3. 输入并回车：

```shell
Get-FileHash -Algorithm SHA256 -Path "文件路径"
```
