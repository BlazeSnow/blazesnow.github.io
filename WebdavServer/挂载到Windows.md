---
lastUpdated: 2024-11-8T22:49:00+8:00
---

# 挂载到Windows | 搭建Webdav文件服务器

> Windows默认仅支持https协议，需要调整设置以支持http协议

1. 按下```Windows徽标```+```R```
2. 输入```regedit```
3. 前往```HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\WebClient\Parameters```
4. 将```BasicAuthLevel```的值由```1```改为```2```
5. 重新启动电脑

::: danger 警告：请勿随意修改注册表
对注册表的随意修改会导致不可预知的问题
:::