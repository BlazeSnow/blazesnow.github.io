---
lastUpdated: 2024-6-16T17:23:00+8:00
---

# Windows设备-模板 | DNS加密

> 添加了相对应的模板后，```DNS over HTTPS```的选项可以由```开（手动模板）```修改为```开（自动模板）```，系统将会自动填充内容

## 添加模板

1. 按下```Windows徽标```+```X```
2. 点击```终端管理员```
3. 输入：
   ```netsh dns add encryption server=223.5.5.5 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=yes udpfallback=no```
4. 输入:
   ```netsh dns add encryption server=223.6.6.6 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=yes udpfallback=no```

## 显示已有模板

1. 按下```Windows徽标```+```X```
2. 点击```终端管理员```
3. 输入：```netsh dns show encryption```

## 删除模板

1. 按下```Windows徽标```+```X```
2. 点击```终端管理员```
3. 输入：```netsh dns delete encryption server=223.5.5.5```
4. 输入：```netsh dns delete encryption server=223.6.6.6```