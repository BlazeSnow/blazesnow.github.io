# Ubuntu相关

> Ubuntu是一个广受好评的开源GNU/Linux操作系统，主要面向桌面应用，
> 但也非常适用于服务器环境。该项目起始于2004年，由南非的企业Canonical Ltd.创建并维护。
> Ubuntu的名称源自非洲哲学理念，意为“人性”或“我之所以为我，是因为我们都在”，强调共享和合作的精神。

## apt

> Ubuntu中的apt是Advanced Package Tool的缩写，
> 它是Debian及其衍生系统（包括Ubuntu）中用于管理软件包的核心工具。
> apt建立在dpkg（Debian Package Manager）的基础上，提供了更高级的功能，
> 用于处理软件包的安装、更新、升级和卸载，同时自动处理依赖关系，确保系统的软件环境保持一致性和完整性。

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

> dpkg是Debian Package Manager的简称，它是Debian及其衍生系统，
> 包括Ubuntu中用于处理.deb软件包的基本命令行工具。.deb是这些系统特有的软件包格式，
> 类似于Red Hat系列中的.rpm文件。dpkg主要用于低级别的软件包管理任务，提供了一套直接操作软件包的命令集。

1. 在```安装包.deb```位置打开终端
2. ```sudo dpkg -i 安装包.deb```
3. 列出已安装的软件包：```dpkg -l```
4. 查看已经安装的包的信息：```sudo dpkg -s 包名```
5. 卸载：```sudo dpkg -r 包名```

## 双系统的时间差8小时

> - Ubuntu默认将BIOS中的硬件时间视为UTC。它会读取硬件时间并根据系统设置的时区（例如东八区）进行转换。
> - Windows则将BIOS中的硬件时间视为本地时间，即根据操作系统所在时区直接显示的时间。

1. 打开Ubuntu的终端
2. 输入：```sudo timedatectl set-local-rtc 1```

## Server安装桌面

> Ubuntu Server是一个专为服务器环境设计的免费、开源操作系统，基于Debian Linux发行版。
> 它是Ubuntu项目的一部分，旨在提供高效、稳定且可定制的服务器平台，适用于各种规模的企业和组织。

1. ```sudo apt update```
2. ```sudo apt upgrade```
3. ```sudo apt install ubuntu-desktop```
