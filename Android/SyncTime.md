---
lastUpdated: 2025-02-20T10:27:00+8:00
---

# 时间同步 | Android

> Android系统通常默认使用谷歌的NTP服务器进行时间同步，但如果设备所在的网络环境无法顺利访问谷歌服务器（由于网络限制或屏蔽），就会导致时间同步失败。

1. 打开手机的```开发者模式```
2. 允许电脑进行```adb```调试
3. 按下```Windows徽标```+```X```
4. 点击```终端```
5. 输入以下内容后重启手机：

```bash
# 设置中国时区
adb shell setprop persist.sys.timezone Asia/Shanghai

# 设置NTP服务器
adb shell settings put global ntp_server ntp.aliyun.com
```
