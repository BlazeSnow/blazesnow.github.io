# DNS加密

## 适用于Windows设备：DOH方式

> DNS over HTTPS(DoH)是一种协议，它将传统的DNS查询和响应封装在HTTPS协议中进行传输。
> 这样做可以增强隐私保护，因为DNS查询内容会被加密，外界无法轻易窥探用户的浏览行为或操纵DNS数据。
> DoH通常使用443端口，与常规HTTPS流量混合，使得其难以被识别和过滤。

1. 首选DNS：```223.5.5.5```
2. 备用DNS：```223.6.6.6```
3. DNS over HTTPS：```开（手动模板）```
4. DNS over HTTPS模板：```https://dns.alidns.com/dns-query```

## 适用于Android设备：DOT方式

> DNS over TLS(DoT)同样是为了提高DNS查询的安全性，它通过TLS（Transport Layer Security）协议对DNS通信进行加密。
> 与DoH不同的是，DoT保持了DNS协议的原貌，只是在其基础上添加了TLS层进行安全传输，通常使用853端口。

1. 选择```私人DNS```
2. 输入DOT地址：```dns.alidns.com```

## 适用于Apple设备：推荐使用DOT方式

> 此内容来源于：<https://github.com/paulmillr/encrypted-dns>

1. 创建```alibaba-tls.txt```文件
2. 复制下面内容
3. 粘贴内容进```alibaba-tls.txt```文件
4. 更改文件后缀名为```.mobileconfig```
5. 在```Apple设备```中打开此文件
6. 在```设置```中启用此描述文件
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>PayloadContent</key>
	<array>
		<dict>
			<key>DNSSettings</key>
			<dict>
				<key>DNSProtocol</key>
				<string>TLS</string>
				<key>ServerAddresses</key>
				<array>
					<string>2400:3200::1</string>
					<string>2400:3200:baba::1</string>
					<string>223.5.5.5</string>
					<string>223.6.6.6</string>
				</array>
				<key>ServerName</key>
				<string>dns.alidns.com</string>
			</dict>
			<key>PayloadDescription</key>
			<string>Configures device to use AliDNS Encrypted DNS over TLS</string>
			<key>PayloadDisplayName</key>
			<string>AliDNS DNS over TLS</string>
			<key>PayloadIdentifier</key>
			<string>com.apple.dnsSettings.managed.9d6e5fdf-e404-4f34-ae94-27ed2f636ac4</string>
			<key>PayloadType</key>
			<string>com.apple.dnsSettings.managed</string>
			<key>PayloadUUID</key>
			<string>35d5c8a0-afa6-4b36-a9fe-099a997b44ad</string>
			<key>PayloadVersion</key>
			<integer>1</integer>
			<key>ProhibitDisablement</key>
			<false/>
		</dict>
	</array>
	<key>PayloadDescription</key>
	<string>Adds the AliDNS to Big Sur and iOS 14 based systems</string>
	<key>PayloadDisplayName</key>
	<string>AliDNS over TLS</string>
	<key>PayloadIdentifier</key>
	<string>com.paulmillr.apple-dns</string>
	<key>PayloadRemovalDisallowed</key>
	<false/>
	<key>PayloadType</key>
	<string>Configuration</string>
	<key>PayloadUUID</key>
	<string>6C7F342C-930C-49D7-8FFF-750F38CE39DD</string>
	<key>PayloadVersion</key>
	<integer>1</integer>
</dict>
</plist>
```

## DNS大全

|            |    DNS 1     |   DNS 2   |                 DOH                  |        DOT         |
|:----------:|:------------:|:---------:|:------------------------------------:|:------------------:|
|  Alibaba   |  223.5.5.5   | 223.6.6.6 |   https://dns.alidns.com/dns-query   |   dns.alidns.com   |
|  Tencent   | 119.29.29.29 |           |      https://doh.pub/dns-query       |      dot.pub       |
|   Google   |   8.8.8.8    |  8.8.4.4  |     https://dns.google/dns-query     |     dns.google     |
| CloudFlare |   1.1.1.1    |  1.0.0.1  | https://cloudflare-dns.com/dns-query | cloudflare-dns.com |
