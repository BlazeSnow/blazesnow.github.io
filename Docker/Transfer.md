---
lastUpdated: 2024-11-22T18:06:00+8:00
description: docker的镜像传递方法
---

# 传递镜像 | Docker

> 本篇介绍从`有docker镜像的设备`导出为文件，然后导入至`无docker镜像的设备`。本篇以nginx为例

## 导出镜像

```bash
docker save nginx -o nginx.tar
```

## 复制文件

将`nginx.tar`复制至`无docker镜像的设备`

## 导入镜像

```bash
docker load -i nginx.tar
```
