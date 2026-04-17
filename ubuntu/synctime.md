---
lastUpdated: 2024-8-5T13:50:00+8:00
---

# 同步系统时间 | Ubuntu

## 输出当前时间

```bash
date
```

## 使用`systemd-timesyncd`服务

```bash
sudo timedatectl set-ntp true
```

## 使用`ntpdate`服务

### 安装`ntpdate`

```bash
sudo apt install ntpdate
```

### 从指定的网络时间服务器同步时间

```bash
sudo ntpdate cn.pool.ntp.org
```

### 已知的网络时间服务器

- `ntp.ntsc.ac.cn`
- `time.pool.aliyun.com`
- `cn.pool.ntp.org`
- `time.edu.cn`
- `time.buptnet.edu.cn`
- `time.windows.com`
- `time.apple.com`
- `time1.cloud.tencent.com`
- `time2.cloud.tencent.com`
- `ntp.aliyun.com`
- `ntp1.aliyun.com`
