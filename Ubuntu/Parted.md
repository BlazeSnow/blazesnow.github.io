---
lastUpdated: 2024-7-8T8:53:00+8:00
description: Ubuntu的磁盘类型检查
---

# 检查磁盘类型 | Ubuntu

1. 打开Ubuntu终端，若未安装Ubuntu系统，可选择Ubuntu启动盘中的`试用Ubuntu`
2. 输入：`parted -l`
3. 查看`磁盘`->`分区表`的显示内容
   1. 若为`msdos`，则磁盘类型为`MBR`
   2. 若为`gpt`，则磁盘类型为`GPT`
