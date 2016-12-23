#hadowsocks + polipo + Squid 认证的 http 代理

## polipo 

	proxyAddress = "0.0.0.0"
	socksParentProxy = "10.0.0.200:1080"
	socksProxyType = socks5
	chunkHighMark = 50331648
	objectHighMark = 16384
	serverMaxSlots = 64
	serverSlots = 16
	serverSlots1 = 32

## squid3 配置

**注意：** 安装 `apt-get install squid3`


	
	##################################################################
	# 基本设置
	##################################################################

	#代理服务器的监听端口
	http_port 8964

	visible_hostname pi.imfer.me

	cache_peer 0.0.0.0 parent 8123 0 no-query no-digest name=polipo

	#内存缓冲区的大小
	cache_mem 2048 MB

	#设置硬盘缓冲区最大4096MB，16个一级目录，256个二级目录。
	cache_dir ufs /var/spool/squid 4096 16 256

	#设置访问日志文件
	cache_access_log /var/log/squid3/access.log

	#设置缓存日志文件
	cache_log /var/log/squid3/cache.log

	#设置网页缓存日志文件
	cache_store_log /var/log/squid3/store.log

	##################################################################
	# acl
	##################################################################

	acl manager proto cache_object
	acl localhost src 10.0.0.1/32 ::1
	acl to_localhost dst 10.0.0.1/8 0.0.0.0/32 ::1

	acl localnet src 10.0.0.0/8

	# 定义ssl端口、一些安全端口和http访问的connect方法
	acl SSL_ports port 443
	acl Safe_ports port 80      # http
	acl Safe_ports port 21      # ftp
	acl Safe_ports port 443     # https
	acl Safe_ports port 70      # gopher
	acl Safe_ports port 210     # wais
	acl Safe_ports port 1025-65535  # unregistered ports
	acl Safe_ports port 280     # http-mgmt
	acl Safe_ports port 488     # gss-http
	acl Safe_ports port 591     # filemaker
	acl Safe_ports port 777     # multiling http
	acl CONNECT method CONNECT

	# 国内IP、拒绝IP
	acl chinaip dst "/root/ss/chnroute.txt"
	acl rejectlist src "/root/ss/reject.list"

	acl ALL src all


	##################################################################
	# 权限设置
	##################################################################

	# 允许本机管理缓存，其他的拒绝
	http_access allow manager localhost
	http_access deny manager

	# 拒绝非安全端口
	http_access deny !Safe_ports

	# 拒绝connect到非ssl 443端口（上面定义了）
	http_access deny CONNECT !SSL_ports

	# 强烈建议去除注释。防止通过代理来访问本代理服务器上的web程序
	# 以免认为是localhost用户访问web服务。
	#http_access deny to_localhost

	# 国内ip 
	always_direct allow chinaip
	# 局域网
	always_direct allow to_localhost
	# 非国内IP
	never_direct allow ALL

	# 拒绝 rejectlist 的 IP
	http_access deny rejectlist

	# 允许所有
	http_access allow all


	##################################################################
	# 其他优化
	##################################################################
	client_persistent_connections on
	server_persistent_connections on
	request_timeout 15 seconds
	client_lifetime 8 hours
	persistent_request_timeout 30 seconds
	pconn_timeout 30 seconds
	connect_timeout 60 seconds
	read_timeout 60 seconds
 




## 设置认证

	apt-get install apache2-utils


	htpasswd -c /etc/squid3/passwords <username>


## 参考

- [http://blog.shengbin.me/posts/setup-proxy-on-an-ubuntu-server-using-squid/](http://blog.shengbin.me/posts/setup-proxy-on-an-ubuntu-server-using-squid/)
- [http://tingxueren.com/blog/2014/01/10/jian-yi-http-proxy-da-jian/](http://tingxueren.com/blog/2014/01/10/jian-yi-http-proxy-da-jian/)
- [http://library.zenlogic.com/ss/2014/05/10/shadowsocks-polipo-squid/](http://library.zenlogic.com/ss/2014/05/10/shadowsocks-polipo-squid/)
- [http://www.chenyudong.com/archives/squid-forward-proxy.html](http://www.chenyudong.com/archives/squid-forward-proxy.html)