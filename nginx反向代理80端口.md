# nginx反向代理80端口

    server{
        listen      80;
        server_name a.domain.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        location /{
            proxy_pass http://b.domain.com:81;
        }

    }