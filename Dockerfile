# 生产环境
FROM blazesnow/caddy:cloudflare-alpine

# 设置工作目录
WORKDIR /app

# 复制构建的静态文件
COPY .vitepress/dist /app

# 自定义 Caddy 配置
COPY Caddyfile /etc/caddy/Caddyfile

# 暴露端口
EXPOSE 80 443

# 设置入口点
ENTRYPOINT [ "/usr/bin/caddy" ]

# 启动 Web 服务器
CMD ["run", "--config", "/etc/caddy/Caddyfile"]
