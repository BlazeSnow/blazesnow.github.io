---
lastUpdated: 2024-6-2T19:42:00+8:00
---

# apt | Ubuntu相关

> APT（Advanced Packaging Tool），即高级包装工具，是Linux系统中广泛使用的一种包管理工具，
> 尤其在基于Debian的发行版中如Ubuntu、Debian及其衍生版本中非常常见。
> 它是管理软件包（主要为.deb格式）的一个强大命令行界面，
> 旨在简化软件的安装、更新、卸载以及依赖关系处理过程。

1. 更新列表：```sudo apt update```
2. 安装更新：```sudo apt upgrade```
3. 安装软件包：```sudo apt install <name>```
4. 卸载软件包：```sudo apt remove <name>```或```sudo apt purge <name>```
5. 搜索包：```apt search <name>```
6. 显示已安装包的详细信息：```apt show <name>```或```apt info <name>```
7. 移除不需要的包：```sudo apt autoremove```
8. 清理缓存：```sudo apt autoclean```
9. 列出可升级的包：```apt list --upgradable```