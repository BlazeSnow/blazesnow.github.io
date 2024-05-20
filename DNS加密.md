# DNS加密

## Windows设备：DOH

> DNS over HTTPS(DoH)是一种协议，它将传统的DNS查询和响应封装在HTTPS协议中进行传输。
> 这样做可以增强隐私保护，因为DNS查询内容会被加密，外界无法轻易窥探用户的浏览行为或操纵DNS数据。
> DoH通常使用443端口，与常规HTTPS流量混合，使得其难以被识别和过滤。

1. 首选DNS：```223.5.5.5```
2. 备用DNS：```223.6.6.6```
3. DNS over HTTPS：```开（手动模板）```
4. DNS over HTTPS模板：```https://dns.alidns.com/dns-query```

## Android设备：DOT

> DNS over TLS(DoT)同样是为了提高DNS查询的安全性，
> 它通过TLS（Transport Layer Security）协议对DNS通信进行加密。
> 与DoH不同的是，DoT保持了DNS协议的原貌，只是在其基础上添加了TLS层进行安全传输，通常使用853端口。

1. 选择```私人DNS```
2. 输入DOT地址：```dns.alidns.com```

## Apple设备：DOT

> ```alibaba-tls.mobileconfig```
> 文件来源于：<https://github.com/paulmillr/encrypted-dns>

1. 单击下载```alibaba-tls.mobileconfig```：
	- <a href="alibaba-tls.mobileconfig" target="_blank">下载已签名的描述文件</a>
2. 在```Apple设备```中打开此文件
3. 在```设置```中启用此描述文件

## DNS大全

|            |    DNS 1     |   DNS 2   |                 DOH                  |        DOT         |
|:----------:|:------------:|:---------:|:------------------------------------:|:------------------:|
|  Alibaba   |  223.5.5.5   | 223.6.6.6 |   https://dns.alidns.com/dns-query   |   dns.alidns.com   |
|  Tencent   | 119.29.29.29 |   none    |      https://doh.pub/dns-query       |      dot.pub       |
|   Google   |   8.8.8.8    |  8.8.4.4  |     https://dns.google/dns-query     |     dns.google     |
| CloudFlare |   1.1.1.1    |  1.0.0.1  | https://cloudflare-dns.com/dns-query | cloudflare-dns.com |