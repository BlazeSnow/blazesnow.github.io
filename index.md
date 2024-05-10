# BlazeSnow帮助网站

## 前言

- BlazeSnow的GitHub主页 <https://github.com/BlazeSnow>
- 此开源网站的仓库地址 <https://github.com/BlazeSnow/blazesnow.github.io>

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

1. 跳转至Windows下载网站 <https://www.microsoft.com/zh-cn/software-download>
2. 选择```创建Windows安装```
3. 点击```立即下载```
4. 打开下载的```MediaCreationTool.exe```
5. 选择```ISO文件```
6. 选中保存位置并等待下载
7. 找到```Windows.iso```文件并解压缩
8. 打开```setup.exe```
9. 根据提示继续

## Windows磁盘清理

1. 按下```Windows徽标```+```R```
2. 输入```cleanmgr```
3. 回车
4. 选中```清理系统文件```以清理更多文件

## Windows系统配置

1. 按下```Windows徽标```+```R```
2. 输入```msconfig```
3. 回车
4. **警告**：
	- 选择```诊断启动```会导致重新启动后无法解锁系统
	- 关闭```Microsoft相关启动项```会导致不可预知的问题

## 查看Windows系统蓝屏文件

1. 安装WinDBG
	- 微软Learn <https://learn.microsoft.com/zh-CN/windows-hardware/drivers/debugger/>
	- 微软商店 <https://apps.microsoft.com/detail/9pgjgd53tn86>
2. 打开目录```C:\Windows\Minidump```
3. 找到蓝屏文件
4. 复制到其他位置
5. 打开蓝屏文件
6. 输入命令```!analyze -v```

## Windows清理软件卸载残留

### 残留文件（一般情况下）

1. 若软件名为```abc```
2. 删除```C:\Program Files\abc```
3. 删除```C:\Program Files\Common Files\abc```
4. 删除```C:\Program Files (x86)\abc```
5. 删除```C:\Program Files (x86)\Common Files\abc```
6. 删除```C:\ProgramData\abc```
	- 按下```Windows徽标```+```R```
	- 输入```%programdata%```
7. 删除```AppData```中的```abc```
	- 按下```Windows徽标```+```R```
	- 输入```%appdata%```
	- 删除
		- ```Local\abc```
		- ```LocalLow\abc```
		- ```Roaming\abc```

### 残留注册表（一般情况下）

1. 若软件名为```abc```
2. 按下```Windows徽标```+```R```
3. 输入```regedit```
4. 删除```HKEY_LOCAL_MACHINE\SOFTWARE\abc```
5. 删除```HKEY_CURRENT_USER\SOFTWARE\abc```
6. **警告**：
	- 对注册表的随意修改会导致不可预知的问题
	- 请勿随意修改

## DNS加密

### DOH方式

> DNS over HTTPS (DoH)是一种协议，它将传统的DNS查询和响应封装
> 在HTTPS协议中进行传输。这样做可以增强隐私保护，因为DNS查询内容会被加密，
> 外界无法轻易窥探用户的浏览行为或操纵DNS数据。DoH通常使用443端口，
> 与常规HTTPS流量混合，使得其难以被识别和过滤。

1. 首选DNS：```223.5.5.5```
2. 备用DNS：```223.6.6.6```
3. DNS over HTTPS：```开（手动模板）```
4. DNS over HTTPS模板：```https://dns.alidns.com/dns-query```

### DOT方式

> DNS over TLS (DoT) 同样是为了提高DNS查询的安全性，
> 它通过TLS（Transport Layer Security）协议对DNS通信进行加密。
> 与DoH不同的是，DoT保持了DNS协议的原貌，
> 只是在其基础上添加了TLS层进行安全传输，通常使用853端口。

1. 选择```私人DNS```
2. 输入DOT地址：```dns.alidns.com```

### DNS

|   DNS1    |   DNS2    |                 DOH                  |        DOT         |
|:---------:|:---------:|:------------------------------------:|:------------------:|
| 223.5.5.5 | 223.6.6.6 |   https://dns.alidns.com/dns-query   |   dns.alidns.com   |
|  8.8.8.8  |  8.8.4.4  |     https://dns.google/dns-query     |     dns.google     |
|  1.1.1.1  |  1.0.0.1  | https://cloudflare-dns.com/dns-query | cloudflare-dns.com |

## Ubuntu server图形化

1. ```sudo apt update```
2. ```sudo apt upgrade```
3. ```sudo apt install ubuntu-desktop```

## 原生安卓WiFi＆时间问题

### 开始准备

1. 打开Android手机的```开发者模式```
2. 进入电脑的```ADB```状态

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
