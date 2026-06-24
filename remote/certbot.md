---
title: Certbot | 远程链路
lastUpdated: 2026-06-24T11:09:00+8:00
description: Certbot证书申请工具的简要介绍
---

# <TitleIcon icon="letsencrypt" /> Certbot

> Certbot 对应本章前言方案的一个通用步骤：为`公网服务器 -> 用户`部分提供 TLS 证书。

## TLS证书

对于 DockerSeries 章节中的大部分内容，在提供服务时，都需要使用 HTTPS 来保证传输内容的安全性，这其中就需要使用到 TLS 证书。而 Certbot 很好地解决了这个问题。

## 容器的附加性

在 DockerSeries 中的 Certbot 容器独立于实际提供服务的容器之外，但提供了用于 HTTPS 加密所需的私钥与证书，这些文件可由其他容器引用，并可由 Certbot 定期续签以避免过期。

## 具体部署教程

- [证书申请器](/dockerseries/certbot/)
