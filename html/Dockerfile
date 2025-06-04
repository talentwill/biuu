FROM nginx:alpine

# 复制网站文件
COPY . /usr/share/nginx/html/

# 复制 nginx 配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 设置工作目录
WORKDIR /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 nginx
CMD ["nginx", "-g", "daemon off;"]