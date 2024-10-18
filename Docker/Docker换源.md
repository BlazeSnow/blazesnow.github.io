---
lastUpdated: 2024-10-18T18:41:00+8:00
---

# Docker换源

## Docker信息

```docker info```

## 换源

1. 转到```/etc/docker```目录：```cd /etc/docker```
2. 新建配置文件：```touch daemon.json```
3. 编辑配置文件：```nano daemon.json```
4. 检验配置文件：```sudo systemctl daemon-reload```
5. 重启docker：```sudo systemctl restart docker```

### ```daemon.json```

```json
{
    "registry-mirrors": ["镜像源地址"]
}
```