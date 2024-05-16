# Windows相关

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

## Windows清理软件卸载残留

### 程序安装和卸载故障排除程序

前往下载：<https://support.microsoft.com/help/17588/fix-problems-that-block-programs-from-being-installed-or-removed>

### 清理残留文件（一般情况下）

1. 若软件名为`abc`
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

### Windows清理残留注册表（一般情况下）

1. 若软件名为```abc```
2. 按下```Windows徽标```+```R```
3. 输入```regedit```
4. 删除```HKEY_LOCAL_MACHINE\SOFTWARE\abc```
5. 删除```HKEY_CURRENT_USER\SOFTWARE\abc```
6. **警告**：
	- 对注册表的随意修改会导致不可预知的问题
	- 请勿随意修改

## 查看Windows系统蓝屏文件

1. 安装WinDBG
	- 微软Learn：<https://learn.microsoft.com/zh-CN/windows-hardware/drivers/debugger>
	- 微软商店：<https://apps.microsoft.com/detail/9pgjgd53tn86>
2. 打开目录```C:\Windows\Minidump```
3. 找到蓝屏文件
4. 复制到其他位置
5. 打开蓝屏文件
6. 输入命令```!analyze -v```