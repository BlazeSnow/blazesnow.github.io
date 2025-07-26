---
lastUpdated: 2025-07-26T17:45:00+8:00
description: 通过使用SwitchHosts工具的形式，指定OneDrive的网站的hosts，实现在封锁OneDrive的ip地址的区域使用OneDrive
---

# SwitchHosts | OneDriveHosts

## 介绍

SwitchHosts 是一个管理、切换多个 hosts 方案的工具。它是一个免费开源软件。

- 官方地址：<https://switchhosts.vercel.app/zh>
- 下载链接：<https://github.com/oldj/SwitchHosts/releases>

## 免责声明

本文所介绍的 SwitchHosts 工具及其相关操作仅供学习与参考。作者并非 SwitchHosts 的开发者，与该软件的开发团队无任何关联。请在合法合规的前提下使用该工具，对 hosts 文件的修改操作需谨慎，并建议提前备份原始文件。因使用 SwitchHosts 所产生的任何问题或损失，均由用户自行承担，作者不承担任何责任。

## 安装SwitchHosts

1. 打开下载链接：<https://github.com/oldj/SwitchHosts/releases>
2. 下载`SwitchHosts_windows_installer_x64_版本号.exe`
3. 运行并安装

## 使用OneDriveHosts

1. 运行SwitchHosts
2. 添加配置并选择远程hosts文件
3. 在下列链接中选择一个填入
4. 打开配置的开关并观察hosts文件是否被添加内容

## 远程hosts文件URL

### Cloudflare

```ansi
https://onedrivehosts.blazesnow.com/
```

### GitHub

```ansi
https://raw.githubusercontent.com/BlazeSnow/OneDriveHosts/main/hosts
```

### Gitee

```ansi
https://gitee.com/blazesnow/OneDriveHosts/raw/main/hosts
```
