# Ubuntu相关

## 安装Ubuntu

1. 打开：<https://cn.ubuntu.com/download/desktop>
2. 下载```.iso```镜像

### 在虚拟机中安装

1. 创建新的虚拟机
2. 挂载```.iso```镜像文件
3. 按照提示安装

### 在实体机中安装

1. 准备一个U盘
2. 预留足够的本地磁盘空间
3. 打开启动盘创建程序
4. 将```.iso```镜像文件写入U盘（**警告**：将清空U盘内所有数据）
5. 关机
6. 进入```BIOS```，将U盘设置为第一启动项
7. 开机
8. 按照提示安装

## apt

1. 更新列表：```sudo apt update```
2. 安装更新：```sudo apt upgrade```
3. 安装软件包：```sudo apt install 包```
4. 卸载软件包：```sudo apt remove 包```
5. 搜索包：```apt search 包```
6. 显示已安装包的详细信息：```apt show 包```
7. 移除不需要的包：```sudo apt autoremove```
8. 清理缓存：```sudo apt autoclean```
9. 列出可升级的包：```apt list --upgradable```

## dpkg

1. 在```安装包.deb```位置打开终端
2. ```sudo dpkg -i 安装包.deb```
3. 列出已安装的软件包：```dpkg -l```
4. 查看已经安装的包的信息：```sudo dpkg -s 包名```
5. 卸载：```sudo dpkg -r 包名```

## 双系统的时间差8小时

1. 打开Ubuntu的终端
2. 输入：```sudo timedatectl set-local-rtc 1```

## Server安装桌面

1. ```sudo apt update```
2. ```sudo apt upgrade```
3. ```sudo apt install ubuntu-desktop```
