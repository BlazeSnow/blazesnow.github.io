# 生产环境
FROM blazesnow/caddy:edgeone-alpine

# 设置工作目录
WORKDIR /app

# 复制构建的静态文件
COPY .vitepress/dist /app

# 自定义 Caddy 配置
COPY Caddyfile /etc/caddy/Caddyfile

# 暴露端口
EXPOSE 80 443 443/udp

# 启动 Web 服务器
CMD ["caddy","run","--config","/etc/caddy/Caddyfile","--adapter","caddyfile"]
