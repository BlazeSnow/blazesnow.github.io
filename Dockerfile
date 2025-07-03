# 构建环境
FROM node:current-alpine AS build

# 设置工作目录
WORKDIR /app

# 复制项目代码
COPY . /app/

# 安装依赖并构建静态文件
RUN npm install npm -g
RUN npm ci
RUN npm run docs:build

# 生产环境
FROM nginx:mainline-alpine

# 设置工作目录
WORKDIR /app

# 复制构建的静态文件
COPY --from=build /app/.vitepress/dist /app/

# 自定义 Nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 HTTP 端口
EXPOSE 80 443

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
