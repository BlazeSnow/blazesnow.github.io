---
title: 双系统的时间差 | Ubuntu
lastUpdated: 2026-05-02T22:59:00+8:00
---

# <TitleIcon icon="ubuntu" /> 双系统的时间差

## 时间差的原因

Windows和Linux之间出现时间相差8小时的问题，通常是由于两个操作系统对硬件时间（BIOS时间）的解释方式不同所导致的：

- Windows默认假设硬件时间是本地时间，直接将其作为系统时间显示。
- Linux默认将硬件时间当作UTC时间，并根据系统设置的时区自动转换为本地时间显示。

## 解决时间差

1. 打开Ubuntu的终端
2. 输入以下命令：

```shell
sudo timedatectl set-local-rtc 1
```
