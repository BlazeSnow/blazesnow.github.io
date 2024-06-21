---
lastUpdated: 2024-6-5T15:14:00+8:00
---

# 无法更新Snap Store

> 在Ubuntu Software应用内更新app时，
> 无法更新Snap Store，
> 显示Snap Store仍在运行中

1. 记住报错信息中最后的```pid```
2. 打开Ubuntu终端
3. 输入```sudo kill <pid>```
4. 等待命令完成
5. 输入```sudo snap refresh snap-store```
