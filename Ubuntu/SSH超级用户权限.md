---
lastUpdated: 2024-11-22T17:44:00+8:00
---

# SSH超级用户权限 | Ubuntu相关

> 本篇内容讲解为Ubuntu的SSH连接启用root用户

## 修改配置文件

1. 进入ssh配置文件目录：```cd /etc/ssh```
2. 修改配置文件：```sudo nano sshd_config```

### ```sshd_config```

```txt
# 找到此行内容，修改前：
#PermitRootLogin prohibit-password

# 修改后：
PermitRootLogin yes
```

## 设置密码

为root用户设置密码：```sudo passwd root```

## SSH连接

设置完毕后，即可使用root用户和密码进行SSH连接