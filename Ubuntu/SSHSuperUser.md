---
lastUpdated: 2025-01-12T17:17:00+8:00
description: 为Ubuntu的SSH连接启用root用户
---

# SSH超级用户权限 | Ubuntu

> 本篇内容讲解为Ubuntu的SSH连接启用root用户

## 修改配置文件

1. 进入ssh配置文件目录：`cd /etc/ssh`
2. 修改配置文件：`sudo nano sshd_config`

### `sshd_config`

```txt
# 找到此行内容，修改前：
#PermitRootLogin prohibit-password

# 修改后：
PermitRootLogin yes
```

## 重新启动SSH

```bash
sudo systemctl restart ssh
```

## 设置root用户密码

```bash
sudo passwd root
```

## SSH连接

设置完毕后，即可使用root用户和密码进行SSH连接
