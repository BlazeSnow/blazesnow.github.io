---
title: frp | 远程链路
lastUpdated: 2026-06-24T12:00:00+8:00
description: frp内网穿透工具，将部署在私有服务器的服务，通过公网服务器暴露给用户。
---

# <TitleIcon src="/icon/frp.svg" /> frp

> frp 对应本章前言的方案①：部署在私有服务器的服务 -> 公网服务器 -> 用户

## 网络流向

> frp 由 **frps（服务端）** 和 **frpc（客户端）** 组成。
>
> frps 部署在公网服务器，frpc 部署在内网私有服务器。

部署在私有服务器的服务 -> frpc -> frps -> 用户

## frpc

> frpc 部署在内网，负责将私有服务的流量导入隧道。

私有服务(:端口) -> frpc(:localPort) -> frps

## frps

> frps 部署在公网，负责将隧道流量暴露给用户。

frpc隧道 -> frps(:remotePort) -> 用户

## 核心机制

- **隧道**：frpc 主动向 frps 建立 TCP 长连接，所有流量单条连接承载。
- **认证**：frps 的 auth.token 确保只有得到授权的 frpc 可接入。
- **端口映射**：remotePort → localPort，支持一对一和负载均衡。

## 具体部署教程

- frps：[端口转发服务端](/dockerseries/frps/)
- frpc：[端口转发客户端](/dockerseries/frpc/)
