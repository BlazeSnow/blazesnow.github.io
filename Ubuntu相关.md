# Ubuntu相关

## 用dpkg安装deb安装包

### 安装

```sudo dpkg -i 安装包.deb```

### 管理

1. 列出已安装的软件包：```dpkg -l```
2. 查看已经安装的包的信息：```sudo dpkg -s 包的名字```
3. 卸载
	- 卸载软件包但保留配置文件：```sudo dpkg -r 包的名字```
	- 完全卸载软件包（包括配置文件）：```sudo dpkg -P 包的名字```

## 与Windows双系统的时间差8小时

1. ```sudo apt install ntpdate```
2. ```sudo ntpdate time.windows.com```
3. ```sudo timedatectl set-local-rtc 1 --adjust-system-clock```

## Ubuntu server图形化

1. ```sudo apt update```
2. ```sudo apt upgrade```
3. ```sudo apt install ubuntu-desktop```
