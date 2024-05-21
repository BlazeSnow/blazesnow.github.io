# Ubuntu相关

> Ubuntu 是一个广受好评的开源 GNU/Linux 操作系统，主要面向桌面应用，
> 但也非常适用于服务器环境。该项目起始于2004年，由南非的企业 Canonical Ltd. 创建并维护。
> Ubuntu 的名称源自非洲哲学理念，意为“人性”或“我之所以为我，是因为我们都在”，
> 强调共享和合作的精神。

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

1. ```sudo timedatectl set-local-rtc 1```

## Server安装桌面

1. ```sudo apt update```
2. ```sudo apt upgrade```
3. ```sudo apt install ubuntu-desktop```
