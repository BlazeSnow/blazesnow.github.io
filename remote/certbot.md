---
title: Certbot | 远程链路
lastUpdated: 2026-06-24T12:30:00+8:00
description: Certbot证书申请工具的简要介绍
---

# <TitleIcon icon="letsencrypt" /> Certbot

> Certbot 对应本章前言方案的一个通用步骤：为`公网服务器 -> 用户`部分提供 TLS 证书。

## TLS 证书

对于 DockerSeries 章节中的大部分内容，在提供服务时，都需要使用 HTTPS 来保证传输内容的安全性，这其中就需要使用到 TLS 证书。而 Certbot 很好地解决了这个问题。

Certbot 是 Let's Encrypt 官方推荐的 ACME 客户端，通过命令行即可完成证书申请。相比 Caddy 内嵌的 ACME 模块，Certbot 更灵活——支持多种 DNS 插件，不受 CDN 或 HTTP 验证的限制。

Certbot -> NS 服务商 API (写入 TXT 记录) -> Let's Encrypt (验证) -> 证书签发

## 容器的附加性

在 DockerSeries 中的 Certbot 容器独立于实际提供服务的容器之外，但提供了用于 HTTPS 加密所需的私钥与证书。这些文件通过 volume 映射到宿主机，其他容器（如 Caddy）通过挂载相同路径即可使用，互不耦合。

证书文件可由 Certbot 定期续签以避免过期。Let's Encrypt 证书有效期 90 天，配合 crontab 定时任务或重启策略，可实现无人值守的自动续期。

## 具体部署教程

- [证书申请器](/dockerseries/certbot/)
