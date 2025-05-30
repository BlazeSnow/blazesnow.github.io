---
lastUpdated: 2024-11-20T17:37:00+8:00
description: 对Ubuntu的包管理工具apt的介绍
---

# apt | Ubuntu

> APT（Advanced Packaging Tool），即高级包装工具，是Linux系统中广泛使用的一种包管理工具，尤其在基于Debian的发行版中如Ubuntu、Debian及其衍生版本中非常常见。它是管理软件包（主要为.deb格式）的一个强大命令行界面，旨在简化软件的安装、更新、卸载以及依赖关系处理过程。

1. 更新列表：`apt update`
2. 安装更新：`apt full-upgrade`
3. 列出可升级的包：`apt list --upgradable`
4. 安装软件包：`apt install <name>`
5. 卸载软件包：`apt purge <name>`
6. 显示已安装包的详细信息：`apt show <name>`或`apt info <name>`
7. 移除不需要的包：`apt autoremove`

## 常用命令

```bash
apt update && apt full-upgrade -y
```
