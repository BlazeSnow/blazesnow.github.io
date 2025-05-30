---
lastUpdated: 2025-05-11T15:30:00+8:00
description: Git的分支处理常用命令
---

# 处理分支 | Git

处理git仓库，需要在目标文件夹内操作：

```shell
# 查看分支列表
git branch

# 创建新分支
git branch <新分支名> <基于的分支名>

# 切换分支
git checkout <分支名>

# 合并分支
# 分支名填写修改了内容的分支，若：beta->main，则切换到main分支，然后填写beta
git merge <分支名>

# 删除分支
git branch -d <分支名>
```
