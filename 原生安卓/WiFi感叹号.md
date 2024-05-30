## WiFi感叹号

1. 打开Android手机的```开发者模式```
2. 进入电脑的```ADB```状态
3. 删除旧的监测点
	- ```adb shell settings delete global captive_portal_https_url```
	- ```adb shell settings delete global captive_portal_http_url```
4. 添加新的监测点（小米源）
	- ```adb shell settings put global captive_portal_https_url https://connect.rom.miui.com/generate\_204```
	- ```adb shell settings put global captive_portal_http_url http://connect.rom.miui.com/generate\_204```
