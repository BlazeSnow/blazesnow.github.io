---
lastUpdated: 2025-05-10T15:27:00+8:00
---

# 清理缓存

```shell
docker system prune -f
```

> [!TIP]
> 此操作将删除停止的容器、未被使用的网络、dangling镜像（无tag且无引用的镜像）和未被使用的构建缓存，`-f`表示无需确认
