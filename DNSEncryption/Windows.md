---
lastUpdated: 2025-08-04T21:22:00+8:00
description: Windows设备的DNS加密教程
---

# Windows设备 | DNS加密

> [!TIP]
> 若为以太网用户，则打开以太网设置：[点击此处跳转](ms-settings:network-ethernet)

1. 打开WLAN设置：[点击此处跳转](ms-settings:network-wifi)
2. 打开`硬件属性`
3. 点击DNS服务器`编辑`
4. 修改选项为`手动`
5. 打开`IPv4`
6. 填入以下内容：
   - 首选DNS：`223.5.5.5`
   - 备用DNS：`223.6.6.6`
   - DNS over HTTPS：`开（手动模板）`
   - DNS over HTTPS模板：`https://dns.alidns.com/dns-query`
7. 关闭`失败时使用未加密请求`

## DNS over HTTPS模板

> 添加了相对应的模板后，`DNS over HTTPS`的选项可以由`开（手动模板）`修改为`开（自动模板）`，系统将会自动填充内容

### 添加模板

1. 按下`Windows徽标`+`X`
2. 点击`终端管理员`
3. 输入以下内容并回车：

```shell
netsh dns add encryption server=223.5.5.5 dohtemplate=https://dns.alidns.com/dns-query
netsh dns add encryption server=223.6.6.6 dohtemplate=https://dns.alidns.com/dns-query
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
```
