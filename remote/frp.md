---
title: frp | 远程链路
lastUpdated: 2026-06-24T11:09:00+8:00
description: frp内网穿透工具，将部署在私有服务器的服务，通过公网服务器暴露给用户。
---

# <TitleIcon src="/icon/frp.svg" /> frp

> frp 对应方案①：部署在私有服务器的服务 -> 公网服务器 -> 用户

## 网络流向

frp 由 **frps（服务端）** 和 **frpc（客户端）** 组成。frps 部署在公网服务器，frpc 部署在内网私有服务器。

部署在私有服务器的服务 -> frpc -> frps -> 用户

## frpc

frpc 部署在内网，负责将私有服务的流量导入隧道：

```
私有服务(:端口) -> frpc(:localPort) -> frps
```

frpc 读取 `frpc.toml`，为每个代理建立一个到 frps 的连接。收到 frps 转发的请求后，frpc 将请求代理到 `localPort` 对应的内网服务，响应沿原隧道返回。

## frps

frps 部署在公网，负责将隧道流量暴露给用户：

```
frpc隧道 -> frps(:remotePort) -> 用户
```

frps 绑定 `remotePort` 等待外部连接，收到用户请求后通过已建立的隧道交给 frpc。支持 TCP、UDP 等多种协议，可启用 Dashboard 监控连接状态。

## 核心机制

- **隧道**：frpc 主动向 frps 建立 TCP 长连接，所有流量单条连接承载。
- **认证**：`auth.token` 确保只有授权客户端可接入。
- **端口映射**：`remotePort` → `localPort`，支持一对一和负载均衡。

## 具体部署教程

[端口转发服务端](/dockerseries/frps/) / [端口转发客户端](/dockerseries/frpc/)
