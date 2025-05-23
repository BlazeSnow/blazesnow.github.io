---
lastUpdated: 2024-12-05T16:14:00+8:00
---

# Apple设备 | DNS加密

> 加密方法来源于：<https://github.com/paulmillr/encrypted-dns>

## 使用签名的描述文件

1. 单击下载`alibaba-https.mobileconfig`：
   <https://github.com/paulmillr/encrypted-dns/raw/master/signed/alibaba-https.mobileconfig>
2. 在`Apple设备`中打开此文件
3. 在`设置`中启用此描述文件

## 使用未签名的描述文件

1. 创建文件`alibaba-https.txt`
2. 填充内容
3. 修改文件名为`alibaba-https.mobileconfig`
4. 在`Apple设备`中打开此文件
5. 在`设置`中启用此描述文件

### alibaba-https.txt

```xml
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
    <string>HTTPS</string>
    <key>ServerAddresses</key>
    <array>
     <string>2400:3200::1</string>
     <string>2400:3200:baba::1</string>
     <string>223.5.5.5</string>
     <string>223.6.6.6</string>
    </array>
    <key>ServerURL</key>
    <string>https://dns.alidns.com/dns-query</string>
   </dict>
   <key>PayloadDescription</key>
   <string>Configures device to use AliDNS Encrypted DNS over TLS</string>
   <key>PayloadDisplayName</key>
   <string>AliDNS DNS over HTTPS</string>
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
 <string>AliDNS over HTTPS</string>
 <key>PayloadIdentifier</key>
 <string>com.paulmillr.apple-dns</string>
 <key>PayloadRemovalDisallowed</key>
 <false/>
 <key>PayloadType</key>
 <string>Configuration</string>
 <key>PayloadUUID</key>
 <string>A4475135-633A-4F15-A79B-BE15093DC97A</string>
 <key>PayloadVersion</key>
 <integer>1</integer>
</dict>
</plist>
```
