---
lastUpdated: 2024-8-4T13:24:00+8:00
---

# Docker换源

## Docker信息

```docker info```

## 换源

1. 转到```/etc/docker```目录
2. 新建文件```daemon.json```
3. 写入源
4. 重启docker：```sudo systemctl restart docker```

### ```daemon.json```

```json
{
    "registry-mirrors": ["镜像源地址"]
}
```