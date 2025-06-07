---
lastUpdated: 2025-06-07T16:00:00+8:00
description: 在Windows系统中计算哈希值
---

# 计算哈希值 | Windows

1. 按下`Windows徽标`+`X`
2. 单击`终端`
3. 输入并回车：

```powershell
Get-FileHash -Algorithm SHA256 -Path "文件路径"
```
