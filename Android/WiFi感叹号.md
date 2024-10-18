---
lastUpdated: 2024-6-2T19:42:00+8:00
---

# WiFi感叹号 | 原生安卓

> 对于原生安卓系统，手机会尝试访问谷歌的一个特定网址来检测网络是否可以上网。
> 如果这个请求失败（比如在中国大陆地区访问谷歌服务受限），即使实际网络可用，也会显示感叹号。

1. 打开Android手机的```开发者模式```
2. 进入电脑的```ADB```状态
3. 删除旧的监测点
	- ```adb shell settings delete global captive_portal_https_url```
	- ```adb shell settings delete global captive_portal_http_url```
4. 添加新的监测点（小米源）
	- ```adb shell settings put global captive_portal_https_url https://connect.rom.miui.com/generate\_204```
	- ```adb shell settings put global captive_portal_http_url http://connect.rom.miui.com/generate\_204```
