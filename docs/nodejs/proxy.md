---
lastUpdated: 2026-03-16T13:31:00+8:00
---

# npm代理 | Nodejs

> [!TIP]
> 使用命令或修订配置文件均可

## 命令

```shell
npm config set https-proxy http://127.0.0.1:端口
npm config set proxy http://127.0.0.1:端口
```

## 修订配置文件

在[npm配置文件](/nodejs/npmrc)内修改以下内容：

```txt
https-proxy=http://127.0.0.1:端口
proxy=http://127.0.0.1:端口
```
