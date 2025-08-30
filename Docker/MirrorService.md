---
lastUpdated: 2024-9-2T14:16:00+8:00
---

# 容器镜像服务 | Docker

> 下面以`nginx`作为示例

## 拉取镜像

```bash
docker pull nginx
```

## 登录

```bash
docker login --username=用户名 容器镜像服务链接
```

## 获取nginx镜像id

```bash
docker images
```

## 复制nginx镜像到容器镜像服务

1. 前往容器镜像服务创建命名空间
2. 在命名空间内创建仓库

```bash
docker tag nginx镜像id 容器镜像服务链接/命名空间/仓库名称
```

## 上传镜像到容器镜像服务

```bash
docker push 容器镜像服务链接/命名空间/仓库名称
```
