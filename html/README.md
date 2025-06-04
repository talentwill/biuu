# BIUU 官方网站

这是 BIUU 品牌的官方网站项目，使用 Nginx 进行部署。

## 项目结构

```
.
├── index.html          # 主页面
├── public/             # 静态资源目录
│   ├── Logo.jpg       # 品牌 Logo
│   ├── favicon.ico    # 网站图标
│   ├── video1.mp4     # 视频资源1
│   └── video2.mp4     # 视频资源2
├── nginx.conf         # Nginx 配置文件
├── Dockerfile         # Docker 构建文件
└── docker-compose.yml # Docker Compose 配置文件
```

## 部署说明

### 使用 Docker Compose 部署

1. 确保已安装 Docker 和 Docker Compose

2. 在项目根目录下运行：
```bash
docker-compose up -d
```

3. 访问 http://localhost 即可查看网站

### 直接使用 Nginx 部署

1. 安装 Nginx

2. 将项目文件复制到 Nginx 的静态文件目录：
```bash
cp -r * /usr/share/nginx/html/
```

3. 将 nginx.conf 复制到 Nginx 配置目录：
```bash
cp nginx.conf /etc/nginx/conf.d/default.conf
```

4. 重启 Nginx：
```bash
systemctl restart nginx
```

## 开发说明

- 网站使用纯静态 HTML + TailwindCSS 构建
- 视频资源位于 public 目录下
- 菜单交互使用原生 JavaScript 实现

## 注意事项

- 确保视频文件格式正确且可以正常播放
- 注意调整 nginx.conf 中的缓存配置以优化性能
- 在生产环境中，建议使用 HTTPS 并相应调整 Nginx 配置



server {
    listen 80;
    server_name localhost;  # 或者使用您的域名
    root /root/www/biuu;  # 项目路径
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}