---
lastUpdated: 2025-07-15T21:21:00+8:00
description: Docker系列教程的有关Volumes的前言
---

# 命名卷 | Docker系列

> 卷是容器的持久数据存储，由 Docker 创建和管理。创建卷时，它会存储在 Docker 主机上的一个目录中。将卷挂载到容器中时，该目录就是被挂载到容器中的目录。这与绑定挂载的工作方式类似，不同之处在于卷由 Docker 管理，并且与主机的核心功能隔离。

## 管理命名卷

```shell
# 创建命名卷
docker volume create example_data

# 列出所有命名卷
docker volume ls

# 命名卷属性
docker volume inspect example_data

# 删除命名卷
docker volume rm example_data
```

## 引用命名卷

```yml{2-4,10}
volumes:
  data:                 # 命名卷内部名称：data
    name: example_data  # 命名卷外部名称：example_data
    external: true      # 不关联命名卷

services:
  example:
    image: busybox:latest
    volumes:
      - data:/data      # 引用命名卷，使用内部名称data
```

## 转移命名卷的准备工作

> [!TIP]
> 在需要转入及转出的计算机上，都需要进行此步骤

```shell
# 前往var目录
cd /var

# 创建工作目录
mkdir transfervolumes

# 进入工作目录
cd transfervolumes

# 创建docker配置文件
touch compose.yml

# 编辑docker配置文件
nano compose.yml
```

### `compose.yml`

> [!TIP]
> 将`compose.yml`中的命名卷名称修改为需要转移的命名卷名称

<<< @/DockerSeries/Volumes.yml{3}

## 转移命名卷

> [!TIP]
> 转移命名卷前，请确保没有容器正在使用该命名卷

```shell
# 前往需要转出命名卷的计算机的工作目录
cd /var/transfervolumes

# 转出命名卷
docker compose run --rm output

# 切换计算机
# 将data.tar.gz拷贝至需要转入命名卷的计算机的工作目录

# 前往需要转入命名卷的计算机的工作目录
cd /var/transfervolumes

# 创建命名卷
docker volume create example_data

# 转出命名卷
docker compose run --rm input
```
