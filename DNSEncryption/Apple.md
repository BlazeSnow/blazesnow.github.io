---
lastUpdated: 2025-05-30T08:30:00+8:00
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

### `alibaba-https.txt`

<<< @/DNSEncryption/alibaba-https.xml
