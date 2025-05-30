---
lastUpdated: 2024-6-2T19:42:00+8:00
description: Ubuntu的dpkg命令
---

# dpkg | Ubuntu

> dpkg（Debian Package）是Debian及其衍生发行版（如Ubuntu）中一个基础而强大的命令行软件包管理工具。
> 它是专为Debian设计的，用于低级别的软件包管理任务，直接处理.deb格式的软件包。
> dpkg主要功能包括安装、卸载、重新配置已安装的软件包，以及查询系统中软件包的状态信息。

1. 在`安装包.deb`位置打开终端
2. `sudo dpkg -i 安装包.deb`
3. 列出已安装的软件包：`dpkg -l`
4. 查看已经安装的包的信息：`sudo dpkg -s <name>`
5. 卸载：`sudo dpkg -r <name>`或`sudo dpkg -P <name>`
