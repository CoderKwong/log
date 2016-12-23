# 部署 letsencrypt 免费 SSL 证书

## 开始前的准备

设置网站的 `.well-know` 目录可以访问，例如：

	http://example.com/.well-know/test.html // http访问必须返回200

1. 去这个网站，下载自动完成的脚本[https://certbot.eff.org/](https://certbot.eff.org/)
2. 选择操作系统版本和 HTTP 软件，下载对应的脚本

##  Ubuntu 14.04 + Nginx 为例

```
wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto
```
执行完以上脚本，再执行
```
./certbot-auto certonly --webroot -w /var/www/example -d example.com www.example.com -w /var/www/blog.example -d blog.example.com
```

## 自动续期

`letsencrypt` 有效期只有90天，自动续期的命令：

```
./certbot-auto renew --dry-run
```

加入到定时任务中（每60天执行一次）：

```
0 0 */60 * * /root/0 0 */60 * * /root/renew_ssl.sh
```

## 最后 Nginx 配置

```
server {
	listen 80;
	server_name example.com www.example.com;
	return 301 https://example.com$request_uri;
}
server {
	listen 443;
	server_name example.com www.example.com;
	
	ssl on;
	ssl_certificate /etc/letsencrypt/live/example.me/fullchain.pem;
	ssl_certificate_key /etc/letsencrypt/live/example.me/privkey.pem;
	ssl_trusted_certificate /etc/letsencrypt/live/example.me/chain.pem;
}
```