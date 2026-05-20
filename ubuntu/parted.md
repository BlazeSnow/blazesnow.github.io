---
title: 检查磁盘类型 | Ubuntu
lastUpdated: 2026-05-02T22:48:00+8:00
---

# <TitleIcon icon="ubuntu" /> 检查磁盘类型

> 若未安装Ubuntu系统，可选择启动盘中的试用Ubuntu

打开Ubuntu终端并运行以下命令

```shell
sudo apt update && sudo apt install gparted
```

```shell
sudo gparted
```

随后使用gparted工具，在标题栏中选中“查看”->“设备信息”，查看磁盘分区类型
