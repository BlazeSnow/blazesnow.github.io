# Ubuntu相关

## apt命令

1. 更新列表：```sudo apt update```
2. 安装更新：```sudo apt upgrade```
3. 安装软件包：```sudo apt install 包```
4. 卸载软件包：```sudo apt remove 包```
5. 搜索包：```apt search 包```
6. 显示已安装包的详细信息：```apt show 包```
7. 移除不需要的包：```sudo apt autoremove```
8. 清理缓存：```sudo apt autoclean```
9. 列出可升级的包：```apt list --upgradable```

## dpkg命令

1. 在```安装包.deb```位置打开终端
2. ```sudo dpkg -i 安装包.deb```
3. 列出已安装的软件包：```dpkg -l```
4. 查看已经安装的包的信息：```sudo dpkg -s 包名```
5. 卸载：```sudo dpkg -r 包名```

## 与Windows双系统的时间差8小时

1. ```sudo timedatectl set-local-rtc 1```

## Ubuntu server图形化

1. ```sudo apt update```
2. ```sudo apt upgrade```
3. ```sudo apt install ubuntu-desktop```
