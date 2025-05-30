---
lastUpdated: 2025-02-20T10:44:00+8:00
description: Android系统解决WiFi感叹号问题
---

# WiFi感叹号 | Android

> 对于Android系统，手机会尝试访问谷歌的一个特定网址来检测网络是否可以上网。如果这个请求失败（比如在中国大陆地区访问谷歌服务受限），即使实际网络可用，也会显示感叹号。

1. 打开手机的`开发者模式`
2. 允许电脑进行`adb`调试
3. 按下`Windows徽标`+`X`
4. 点击`终端`
5. 输入以下内容后重启手机：

```bash
# 删除旧的监测点
adb shell settings delete global captive_portal_https_url
adb shell settings delete global captive_portal_http_url

# 添加新的监测点
adb shell settings put global captive_portal_https_url https://developers.google.cn/generate_204
adb shell settings put global captive_portal_http_url http://developers.google.cn/generate_204
```

## 已知的监测点

```bash
# captive_portal_https_url
https://developers.google.cn/generate_204
https://connectivitycheck.gstatic.com/generate_204
https://connectivitycheck.platform.hicloud.com/generate_204
https://connect.rom.miui.com/generate_204

# captive_portal_http_url
http://developers.google.cn/generate_204
http://connectivitycheck.gstatic.com/generate_204
http://connectivitycheck.platform.hicloud.com/generate_204
http://connect.rom.miui.com/generate_204
```

## 检测监测点可用性

```bash
curl https://developers.google.cn/generate_204
curl http://developers.google.cn/generate_204
```

显示以下内容时，表示监测点可用：

```bash
StatusCode: 204
```
