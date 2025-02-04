# 构建环境
FROM node:current-slim AS build

# 设置工作目录
WORKDIR /app

# 克隆项目代码
COPY . /app/

# 安装依赖并构建静态文件
RUN npm install
RUN npm run docs:build

# 生产环境
FROM nginx:stable-alpine-perl

# 设置工作目录
WORKDIR /app

# 复制构建的静态文件到 Nginx 的服务目录
COPY --from=build /app/.vitepress/dist /app/

# 自定义 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 HTTP 端口
EXPOSE 80

# 启动容器时生成自签名证书并启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
