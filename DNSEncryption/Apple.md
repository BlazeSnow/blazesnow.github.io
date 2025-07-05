---
lastUpdated: 2025-05-30T08:34:00+8:00
description: Apple设备的DNS加密教程
---

# Apple设备 | DNS加密

> 加密方法来源于：<https://github.com/paulmillr/encrypted-dns>

## 使用签名的描述文件

1. 单击下载`alibaba-https.mobileconfig`：
   <https://github.com/paulmillr/encrypted-dns/raw/master/signed/alibaba-https.mobileconfig>
2. 将文件传输至Apple设备
3. 在Apple设备中打开此文件
4. 在设置中启用此描述文件

## 使用未签名的描述文件

1. 创建文件`alibaba-https.txt`
2. 填充内容
3. 修改文件名为`alibaba-https.mobileconfig`
4. 将文件传输至Apple设备
5. 在Apple设备中打开此文件
6. 在设置中启用此描述文件

### `alibaba-https.txt`

<<< @/DNSEncryption/alibaba-https.mobileconfig{xml}
