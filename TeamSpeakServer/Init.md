---
lastUpdated: 2024-9-24T15:19:00+8:00
---

# 获取文件 | 搭建TeamSpeak服务器

## 获取服务端压缩包

1. 打开```TeamSpeak```下载页面：<https://teamspeak.com/zh-CN/downloads/>
2. 选择```服务器server```下载
3. 找到```Linux Server 64-bit```
4. 复制下载链接
5. 前往```/var```目录：```cd /var```
6. 下载压缩包：```wget 下载链接```

## 解压压缩包

1. 获取压缩包名称：```ls -l```
    - 例如：```teamspeak3-server_linux_amd64-3.13.7.tar.bz2```
2. 解压压缩包：```tar -xjf 压缩包名称.tar.bz2```
3. 获取解压后目录名称：```ls -l```
    - 例如：```teamspeak3-server_linux_amd64```
4. 修改为便于记忆的名称：```mv 目录名称 ts```

## 运行文件提权

1. 进入目录：```cd ts```
2. 运行文件提权：```chmod 700 ts3server_startscript.sh```