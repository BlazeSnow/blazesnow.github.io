---
lastUpdated: 2025-09-30T17:23:13+8:00
---

# 网络 | Docker系列

> 本文介绍Docker Compose项目中的网络，Docker的常用网络有host(主机网络)和bridge(桥接网络)

## 主机网络

> 如果容器使用host网络模式，则该容器的网络堆栈不会与Docker主机隔离（容器共享主机的网络命名空间），并且容器不会分配自己的IP地址。

```yml{4}
services:
  example:
    image: busybox:latest
    network_mode: "host"     # 使用主机网络
```

## 桥接网络

> 桥接网络使用软件桥，允许连接到同一桥接网络的容器进行通信，同时提供与未连接到该桥接网络的容器的隔离。启动Docker时，会自动创建一个默认的桥接网络，新启动的容器会连接到它，除非另有说明。

### 管理桥接网络

> [!TIP]
> 使用external网络前，需要创建桥接网络

```shell
# 创建名为example的桥接网络
docker network create example

# 列出所有网络
docker network ls

# 删除名为example的桥接网络
docker network rm example
```

### 单文件

```yml{2-4,10,12}
networks:
  example_network:          # 桥接网络在此文件内部名称
    name: example           # 桥接网络的外部名称
    external: true          # 标记桥接网络为外部网络

services:
  example:
    image: busybox:latest
    networks:
      - example_network     # 使用桥接网络example_network
    ports:
      - 80:80               # network与ports不冲突
```

### 多文件

> 在多文件中，若example1项目需使用example2项目的3000端口，此时无需为example2项目开放ports，只需要保持两个项目位于同一桥接网络，即可直接在example1项目中使用`example2:3000`。

```yml{3,7}
networks:
  example_network:
    name: example
    external: true

services:
  example1:
    image: busybox:latest
    networks:
      - example_network
```

```yml{3,7}
networks:
  example_network:
    name: example
    external: true

services:
  example2:
    image: busybox:latest
    networks:
      - example_network
```
