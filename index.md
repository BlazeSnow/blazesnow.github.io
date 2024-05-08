# BlazeSnow帮助网站

## 前言

- [BlazeSnow的GitHub主页](https://github.com/BlazeSnow)
- [此开源网站的仓库地址](https://github.com/BlazeSnow/blazesnow.github.io)

## Windows系统修复

1. 按下```Windows徽标```+```X```
2. 点击弹出窗口中的```终端管理员```
3. 使用**DISM**修复：
    ```
    DISM /Online /Cleanup-image /Restorehealth
    ```
4. 使用**sfc**修复：
    ```
    sfc /scannow
    ```

## Windows系统重新安装

1. 跳转至[Windows 11下载网站](https://www.microsoft.com/zh-cn/software-download/windows11)
2. 选择```创建Windows 11安装```
3. 点击```立即下载```
4. 打开下载的```MediaCreationTool.exe```
5. 选择```ISO文件```
6. 选中保存位置并等待下载
7. 找到```Windows.iso```文件并解压缩
8. 打开```setup.exe```
9. 根据提示继续

## 查看Windows系统蓝屏文件

1. 安装[WinDBG](https://learn.microsoft.com/zh-CN/windows-hardware/drivers/debugger/)
2. 打开目录```C:\Windows\Minidump```
3. 找到蓝屏文件
4. 复制到其他位置
5. 打开蓝屏文件
6. 输入命令```!analyze -v```

## 原生安卓WiFi＆时间问题

### 开始准备

1. 打开开发者模式
2. 进入ADB状态

### WiFi感叹号

1. 删除旧的监测点
   ```
   adb shell settings delete global captive_portal_https_url
   adb shell settings delete global captive_portal_http_url
   ```
2. 添加新的监测点（小米源）
   ```
   adb shell settings put global captive_portal_https_url https://connect.rom.miui.com/generate\_204
   adb shell settings put global captive_portal_http_url http://connect.rom.miui.com/generate\_204
   ```

### 时间同步

1. 设置中国时区
   ```
   adb shell setprop persist.sys.timezone Asia/Shanghai
   ```
2. 设置NTP服务器
   ```
   adb shell settings put global ntp_server ntp1.aliyun.com
   ```
