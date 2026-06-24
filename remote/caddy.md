---
title: Caddy | 远程链路
lastUpdated: 2026-06-24T11:09:00+8:00
description: Caddy Web服务器的简要介绍
---

# <TitleIcon icon="caddy" /> Caddy

> Caddy 对应本章前言方案②：部署在公网服务器的服务 -> 公网服务器 -> 用户

## 自动 HTTPS

对于公网服务器上部署的服务，启用 HTTPS 是保障传输内容安全性的基础。Caddy 通过 ACME 协议自动向 Let's Encrypt 或 ZeroSSL 申请 TLS 证书，到期前自动续签，无需手动干预。只需在 Caddyfile 中写一个域名，Caddy 就会处理验证、签发、部署和续签的全部流程。

但是在实际的实行过程中，受限于 CDN，Caddy 难以实现自动申请 TLS 证书，此时就需要附带插件的 Caddy，通过 NS 服务商的 API Key 验证身份，随后自动申请 TLS 证书。例如域名托管在 Cloudflare 时，ACME 的 HTTP 验证流量被 CDN 拦截，需改用 DNS 验证方式——使用附带 Cloudflare DNS 插件的 Caddy 镜像，通过 API Key 写入 TXT 记录完成验证。

## 反向代理

Caddy 作为用户与服务之间的桥梁，将请求转发到对应的后端服务。

请求到达 Caddy 后先进行 TLS 解密，还原为明文 HTTP，再根据域名或路径匹配规则转发到对应的后端。后端服务只需处理 HTTP，无需配置证书，响应经 Caddy 加密后返回用户。

## 容器的附加性

在 DockerSeries 中的 Caddy 容器可以与实际提供服务的容器结合，通过 Docker 内部网络方式访问实际服务。做法是将 Caddy 与服务容器置于同一桥接网络，Caddy 使用服务名称即可直连，服务容器无需向外映射端口。这种情况下，实际提供服务的容器不需要开放端口，为网络攻击减少了一个攻击面。

## 具体部署教程

- 反向代理示例：[密码服务器](/dockerseries/vaultwarden/)
