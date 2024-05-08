# BlazeSnow帮助网站

## 系统修复

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

## 系统重新安装

1. 跳转至[Windows 11下载网站](https://www.microsoft.com/zh-cn/software-download/windows11)
2. 选择```创建Windows 11安装```
3. 点击```立即下载```
4. 打开下载的```MediaCreationTool.exe```
5. 选择```ISO文件```
6. 选中保存位置并等待下载
7. 找到```Windows.iso```文件并解压缩
8. 打开```setup.exe```
9. 根据提示继续
