---
lastUpdated: 2025-07-26T16:43:00+8:00
description: 通过直接修改hosts文件的形式，指定OneDrive的网站的hosts，实现在封锁OneDrive的ip地址的区域使用OneDrive
---

# 手动修改 | OneDriveHosts

## 原理

Windows系统中的hosts文件是一个本地的纯文本文件，用于把域名映射到指定的IP地址。

当用户在浏览器或其他程序中访问一个域名（如：`www.example.com`）时，系统会优先查找hosts文件，看是否有该域名的对应IP地址。如果有，系统就会直接使用该IP地址进行访问，而不会再去DNS服务器查询。这样可以实现域名重定向、屏蔽网站、加快访问速度等作用。

例如，在hosts文件中添加一行：

```ansi
127.0.0.1 www.example.com
```

访问`www.example.com`时，就会被重定向到`127.0.0.1`而不是实际的服务器。hosts文件的优先级高于DNS解析，是一种简单有效的网络配置方式。

## hosts文件位置

```ansi
C:\WINDOWS\system32\drivers\etc\
```

## 修改hosts文件

修改hosts文件需要管理员权限，您可使用以下方案：

1. 按下`Windows徽标`+`X`
2. 选择`终端管理员`
3. 输入以下命令并回车：

```shell
notepad C:\Windows\System32\drivers\etc\hosts
```

在hosts文件中添加以下内容：

<<< @/OneDriveHosts/hosts.txt
