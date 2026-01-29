---
lastUpdated: false
---

# ComposeBuilder

## 一、软件介绍

ComposeBuilder 是一个用于快速生成 docker-compose.yml 的工具。它提供图形化流程，帮助用户为多个镜像逐项配置容器名称、重启策略、端口映射或网桥、挂载卷/目录、环境变量与健康检查。

## 二、使用方式

打开 <https://composebuilder.blazesnow.com> 使用本工具

## 三、本地部署

> [!TIP]
> 推荐使用Docker Compose运行本软件

1. 使用下述的Docker Compose或Docker run方式运行本工具
2. 访问 <http://localhost> 使用本工具

### Docker Compose

```yml
services:
  composebuilder:
    image: composebuilder/composebuilder:latest
    container_name: composebuilder
    restart: no
    ports:
      - 80:80
```

### Docker

```shell
docker run --name composebuilder --restart no -p 80:80 composebuilder/composebuilder:latest
```

## 四、许可证

本软件以 GNU Affero General Public License v3.0 的条款发布。

Copyright © 2026 BlazeSnow. 保留所有权利。

### 第三方软件许可证

- Caddy 遵守其原有的许可证
- 所有未提及的第三方软件均遵守其原有的许可证

## 五、相关链接

- 官方网站：<https://composebuilder.blazesnow.com/>
- 说明文档：<https://www.blazesnow.com/composebuilder>
- DockerHub：<https://hub.docker.com/r/composebuilder/composebuilder>
- 软件仓库：<https://github.com/composebuilder/composebuilder>
- 许可证：<https://www.gnu.org/licenses/agpl-3.0.html>
- 软件作者：<https://github.com/BlazeSnow>
