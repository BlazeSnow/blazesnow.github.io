---
lastUpdated: 2025-02-13T11:20:00+8:00
description: 搭建内网穿透服务教程的前言
---

# 前言 | 搭建内网穿透服务

本章介绍使用`fatedier/frp`在Windows客户端和Ubuntu服务端上搭建frp内网穿透服务。

官方网站：<https://gofrp.org/zh-cn/>

仓库：<https://github.com/fatedier/frp>

## 配置说明

### 区分客户端与服务端

数据的传输路径：Windows客户端 -> Ubuntu服务端 -> 最终用户

### 区分远程与本地端口号

数据的传输路径：本地端口号 -> 远程端口号 -> 最终用户

### 举例

1. 本地运行：`127.0.0.1:12345`
2. 服务器运行：`服务器ip地址:80`
3. 用户访问：`http://服务器ip地址`
