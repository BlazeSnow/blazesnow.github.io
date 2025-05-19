---
lastUpdated: 2024-12-15T20:17:00+8:00
---

# 管理防火墙 | Ubuntu

## 安装防火墙

```bash
apt install ufw
```

## 开启防火墙

```bash
ufw enable
```

## 禁用防火墙

```bash
ufw disable
```

## 放行80端口

> 将会同时放行ipv4和ipv6的端口

```bash
ufw allow 80
```

## 阻断3389端口

> 将会同时阻断ipv4和ipv6的端口

```bash
ufw deny 3389
```

## 查看防火墙规则

```bash
# 查看
ufw status
# 带编号查看
ufw status numbered
```

## 删除防火墙规则

```bash
# 按编号删除
ufw delete 2
# 按规则删除
ufw delete allow 80
# 按规则删除
ufw delete deny 3389
```

## 重载防火墙

> 手动修改ufw的配置文件后，需要重新加载防火墙

```bash
ufw reload
```

## 查看app规则

```bash
ufw app list
```

## app规则配置文件目录

`/etc/ufw/applications.d`
