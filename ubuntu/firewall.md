---
title: 管理防火墙 | Ubuntu
lastUpdated: 2026-05-02T22:55:00+8:00
---

# <TitleIcon icon="ubuntu" /> 管理防火墙

## 安装防火墙

```bash
sudo apt update && sudo apt install ufw
```

## 开启防火墙

```bash
sudo ufw enable
```

## 禁用防火墙

```bash
sudo ufw disable
```

## 放行80端口

> 将会同时放行ipv4和ipv6的端口

```bash
sudo ufw allow 80
```

## 阻断3389端口

> 将会同时阻断ipv4和ipv6的端口

```bash
sudo ufw deny 3389
```

## 查看防火墙规则

```bash
sudo ufw status numbered
```

## 删除防火墙规则

```bash
# 按编号删除
sudo ufw delete 2

# 按规则删除
sudo ufw delete allow 80

# 按规则删除
sudo ufw delete deny 3389
```

## 重载防火墙

> 手动修改ufw的配置文件后，需要重新加载防火墙

```bash
sudo ufw reload
```

## 查看app规则

```bash
sudo ufw app list
```

## app规则配置文件目录

```ansi
/etc/ufw/applications.d
```
