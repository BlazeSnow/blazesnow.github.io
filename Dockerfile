# 构建镜像
FROM node:24-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY . /app

# 安装 pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install --frozen-lockfile

# 构建静态文件
RUN pnpm run docs:build

# 生产环境
FROM caddy:alpine

# 设置工作目录
WORKDIR /app

# 复制构建的静态文件
COPY --from=builder /app/docs/.vitepress/dist /app

# 自定义 Caddy 配置
COPY Caddyfile /etc/caddy/Caddyfile

# 暴露端口
EXPOSE 80 443 443/udp

# 启动 Web 服务器
CMD ["caddy","run","--config","/etc/caddy/Caddyfile","--adapter","caddyfile"]
