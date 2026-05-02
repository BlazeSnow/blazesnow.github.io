---
lastUpdated: 2026-05-02T22:57:00+8:00
---

# 同步系统时间 | Ubuntu

## 输出当前时间

```bash
date
```

## 安装ntpdate

```bash
sudo apt update && sudo apt install ntpdate
```

## 从指定的网络时间服务器同步时间

```bash
sudo ntpdate cn.pool.ntp.org
```
