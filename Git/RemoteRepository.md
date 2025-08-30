---
lastUpdated: 2025-05-11T15:33:00+8:00
---

# 处理远程仓库 | Git

处理git仓库，需要在目标文件夹内操作：

```shell
# 克隆远程仓库到本地
# 此操作需在目标文件夹上级文件夹操作
# 将在文件夹内生成一个与远程仓库同名的文件夹
git clone https://github.com/example/example

# 添加远程仓库链接
git remote add origin https://github.com/example/example

# 查看远程仓库详细信息
git remote -v

# 删除远程仓库链接
git remote remove origin
```
