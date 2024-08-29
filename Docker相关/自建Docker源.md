---
lastUpdated: 2024-8-29T22:38:00+8:00
---

# 自建Docker源

> 本篇介绍利用```容器镜像服务```自建Docker源

> 下面以```nginx```作为示例

## 拉取镜像

```docker pull nginx```

## 登录容器镜像服务

```docker login --username=用户名 容器镜像服务链接```

## 获取nginx镜像id

```docker images```

## 复制nginx镜像到容器镜像服务

1. 前往容器镜像服务创建命名空间
2. 在命名空间内创建仓库
3. ```docker tag nginx的镜像id 容器镜像服务链接/命名空间/仓库名称```

## 上传镜像到容器镜像服务

```docker push 容器镜像服务链接/命名空间/仓库名称```

## 完成

可以使用```docker pull 容器镜像服务链接/命名空间/仓库名称```拉取镜像了