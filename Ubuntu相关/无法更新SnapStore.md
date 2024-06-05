---
lastUpdated: '2024-6-5 14:52'
---

# 无法更新Snap Store

## 报错信息

无法更新“Snap Store”:(null):

cannot refresh "snap-store":

snap "snap-store" has running apps(ubuntu-software),

pids: ```<number>```

## 解决方案

1. 打开Ubuntu终端
2. 输入```sudo kill <number>```
3. 等待命令完成
4. 输入```sudo snap refresh snap-store```
