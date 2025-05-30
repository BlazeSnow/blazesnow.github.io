---
lastUpdated: 2024-6-2T19:42:00+8:00
description: Windows与Ubuntu双系统时间差8小时问题的解决方案
---

# 双系统的时间差8小时 | Ubuntu

> Windows和Linux之间出现时间相差8小时的问题，
> 通常是由于两个操作系统对硬件时间（BIOS时间）的解释方式不同所导致的。
>
> Windows默认假设硬件时间是本地时间，直接将其作为系统时间显示。
>
> Linux默认将硬件时间当作UTC时间，并根据系统设置的时区自动转换为本地时间显示。

1. 打开Ubuntu的终端
2. 输入：`sudo timedatectl set-local-rtc 1`
