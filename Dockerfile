# 构建环境
FROM node:current-alpine AS build

# 设置工作目录
WORKDIR /app

# 复制项目代码
COPY . /app/

# 安装依赖并构建静态文件
RUN npm ci
RUN npm run docs:build

# 生产环境
FROM blazesnow/caddy:cloudflare-alpine

# 设置工作目录
WORKDIR /app

# 复制构建的静态文件
COPY --from=build /app/.vitepress/dist /app/

# 自定义 Caddy 配置
COPY Caddyfile /etc/caddy/Caddyfile

# 暴露端口
EXPOSE 80 443

# 启动 Web 服务器
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
