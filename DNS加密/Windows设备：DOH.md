---
lastUpdated: '2024-6-8 18:58'
---

# Windows设备：DOH

1. 按下```Windows徽标```+```I```打开设置
2. 选中```网络和Internet```
3. 选择```WLAN```（或```以太网```）
4. 打开```硬件属性```（```以太网```跳过此步）
5. 点击```DNS服务器分配```旁边的```编辑```
6. 将```DHCP```修改为```手动```
7. 打开```IPV4```
8. 修改以下内容：
	- ```首选DNS```：```223.5.5.5```
	- ```备用DNS```：```223.6.6.6```
	- ```DNS over HTTPS```：```开（手动模板）```
	- ```DNS over HTTPS模板```：```https://dns.alidns.com/dns-query```
9. 关闭```失败时使用未加密请求```

## 管理DNS over HTTPS模板

> 添加了相对应的DNS over HTTPS模板后，```DNS over HTTPS```选项可以由```开（手动模板）```修改为```开（自动模板）```，系统将会自动填充内容

### 添加模板

1. 按下```Windows徽标```+```X```
2. 点击```终端管理员```
3. 输入：```netsh dns add encryption server=223.5.5.5 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=yes udpfallback=no```
4. 输入：```netsh dns add encryption server=223.6.6.6 dohtemplate=https://dns.alidns.com/dns-query autoupgrade=yes udpfallback=no```

### 显示已有模板

1. 按下```Windows徽标```+```X```
2. 点击```终端管理员```
3. 输入：```netsh dns show encryption```

### 删除模板

1. 按下```Windows徽标```+```X```
2. 点击```终端管理员```
3. 输入：```netsh dns delete encryption server=223.5.5.5```
4. 输入：```netsh dns delete encryption server=223.6.6.6```