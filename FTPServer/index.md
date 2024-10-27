---
lastUpdated: 2024-10-27T11:19:00+8:00
---

# 前言 | 搭建FTP文件服务器

::: danger 警告：安全性
FTP通常不提供加密传输，数据以明文形式在网络中传输，容易被窃听和篡改。建议使用教程：[搭建SFTP文件服务器](/SFTPServer/)
:::

本章介绍使用```fauria/vsftpd```在Ubuntu服务器上搭建FTP文件服务器

```fauria/vsftpd```地址：<https://hub.docker.com/r/fauria/vsftpd/>