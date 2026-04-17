---
lastUpdated: 2026-03-16T13:29:00+8:00
---

# npm换源 | Nodejs

> [!TIP]
> 使用命令或修订配置文件均可

## 命令

```shell
npm config set registry https://registry.npmmirror.com
```

## 修订配置文件

在[npm配置文件](/nodejs/npmrc)内修改以下内容：

```txt
registry=https://registry.npmmirror.com
```

## 源信息

### npm官方源

官方网址：<https://www.npmjs.com/>

```txt
registry=https://registry.npmjs.org
```

### cnpm源

> cnpm是淘宝团队开发的一个针对中国用户的npm镜像源

官方网址：<https://npmmirror.com/>

```txt
registry=https://registry.npmmirror.com
```
