---
lastUpdated: 2024-9-27T18:01:00+8:00
---

# 配置系统 | 搭建DNS服务器

> Ubuntu系统的DNSStubListener占用53端口，导致Adguard Home无法启动，需要关闭DNSStubListener

## 查看53端口占用情况

```sudo lsof -i :53```

## 编辑系统配置文件

1. 进入配置文件目录：```cd /etc/systemd```
2. 编辑配置文件：```nano resolved.conf```

### ```resolved.conf```

```txt{10,11}
#DNS=
#FallbackDNS=
#Domains=
#DNSSEC=no
#DNSOverTLS=no
#MulticastDNS=no
#LLMNR=no
#Cache=no-negative
#CacheFromLocalhost=no
#这里改为no，并删去井号
DNSStubListener=no
#DNSStubListenerExtra=
#ReadEtcHosts=yes
#ResolveUnicastSingleLabel=no
```

## 重启systemd-resolved

```sudo systemctl restart systemd-resolved```

## 验证53端口占用情况

```sudo lsof -i :53```