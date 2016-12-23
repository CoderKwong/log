#nginx 配置

**禁止IP、未绑定域名访问站点**


    server {
        listen 80 default;
        return 500;
    }

**`www.imfer.me`跳转到`imfer.me`**

    if ($host ~* www.imfer.me){
    	rewrite ^/(.*)$ http://imfer.me/$1 permanent;
    }

**支持shtml**

    ssi on;
    ssi_silent_errors on;
    ssi_types text/shtml;

**nodejs 代理**

    upstream nodejs {
        server 127.0.0.1:3000;
    }
    
    if ($args ~ _escaped_fragment_) {
        rewrite ^ /api;
    }

    location ~* ^/feed.*$ {
        proxy_pass http://nodejs;
    }

    location ~* ^/sitemap {
        proxy_pass http://nodejs;
    }
    
    location /api {
        proxy_set_header X-Request-URI   $request_uri;
        proxy_set_header X-Real-IP       $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host            $host;
        proxy_set_header Port            $server_port;
        proxy_pass http://nodejs;
        proxy_redirect off;
    }


**Ningx 跳转8080端口到443

    server {
        listen 8000;
        server_name pi.imfer.me;
        rewrite ^(.*) https://pi.imfer.me$1 permanent;
    }
