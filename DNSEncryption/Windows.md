---
lastUpdated: 2025-07-05T14:52:00+8:00
description: Windows设备的DNS加密教程
---

# Windows设备 | DNS加密

1. 按下`Windows徽标`+`I`打开设置
2. 选中`网络和Internet`
3. 选择`WLAN`（或`以太网`）
4. 打开`硬件属性`（`以太网`跳过此步）
5. 点击`DNS服务器分配`旁边的`编辑`
6. 将`DHCP`修改为`手动`
7. 打开`IPV4`
8. 修改以下内容：
   1. `首选DNS`：`223.5.5.5`
   2. `备用DNS`：`223.6.6.6`
   3. `DNS over HTTPS`：`开（手动模板）`
   4. `DNS over HTTPS模板`：`https://dns.alidns.com/dns-query`
9. 关闭`失败时使用未加密请求`

## DNS over HTTPS模板

> 添加了相对应的模板后，`DNS over HTTPS`的选项可以由`开（手动模板）`修改为`开（自动模板）`，系统将会自动填充内容

### 添加模板

1. 按下`Windows徽标`+`X`
2. 点击`终端管理员`
3. 输入以下内容并回车：

```shell
netsh dns add encryption server=223.5.5.5 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=yes udpfallback=no
netsh dns add encryption server=223.6.6.6 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=yes udpfallback=no
netsh dns add encryption server=2400:3200::1 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=yes udpfallback=no
netsh dns add encryption server=2400:3200:baba::1 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=yes udpfallback=no
netsh dns add encryption server=119.29.29.29 dohtemplate=https://doh.pub/dns-query autoupgrade=yes udpfallback=no
netsh dns add encryption server=2402:4e00:: dohtemplate=https://doh.pub/dns-query autoupgrade=yes udpfallback=no
netsh dns add encryption server=101.226.4.6 dohtemplate=https://doh.360.cn/dns-query autoupgrade=yes udpfallback=no
netsh dns add encryption server=218.30.118.6 dohtemplate=https://doh.360.cn/dns-query autoupgrade=yes udpfallback=no
netsh dns add encryption server=123.125.81.6 dohtemplate=https://doh.360.cn/dns-query autoupgrade=yes udpfallback=no
netsh dns add encryption server=140.207.198.6 dohtemplate=https://doh.360.cn/dns-query autoupgrade=yes udpfallback=no
```

### 显示已有模板

1. 按下`Windows徽标`+`X`
2. 点击`终端管理员`
3. 输入以下内容并回车：

```shell
netsh dns show encryption
```

### 删除模板

1. 按下`Windows徽标`+`X`
2. 点击`终端管理员`
3. 输入以下内容并回车：

```shell
netsh dns delete encryption server=223.5.5.5
netsh dns delete encryption server=223.6.6.6
netsh dns delete encryption server=2400:3200::1
netsh dns delete encryption server=2400:3200:baba::1
netsh dns delete encryption server=119.29.29.29
netsh dns delete encryption server=2402:4e00::
netsh dns delete encryption server=101.226.4.6
netsh dns delete encryption server=218.30.118.6
netsh dns delete encryption server=123.125.81.6
netsh dns delete encryption server=140.207.198.6
```
