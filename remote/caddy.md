---
title: Caddy | 远程链路
lastUpdated: 2026-06-24T11:09:00+8:00
description: Caddy Web服务器的简要介绍
---

# <TitleIcon icon="caddy" /> Caddy

> Caddy 对应本章前言方案②：部署在公网服务器的服务 -> 公网服务器 -> 用户

## 自动 HTTPS

对于公网服务器上部署的服务，启用 HTTPS 是保障传输内容安全性的基础。Caddy 通过 ACME 协议自动向 Let's Encrypt 或 ZeroSSL 申请 TLS 证书，到期前自动续签，无需手动干预。

但是在实际的实行过程中，受限于CDN，Caddy难以实现自动申请TLS证书，此时就需要附带插件的Caddy，通过NS服务商的APIKEY验证身份，随后自动申请TLS证书。

## 反向代理

Caddy 作为用户与服务之间的桥梁，将请求转发到对应的后端服务。

## 容器的附加性

在 DockerSeries 中的 Caddy 容器可以与实际提供服务的容器结合，通过 Docker 内部网络方式访问实际服务，这种情况下，实际提供服务的容器不需要开放端口，为网络攻击减少了一个攻击面。

## 具体部署教程

- 反向代理示例：[密码服务器](/dockerseries/vaultwarden/)
