# 小米路由器+shadowsocks+dnsmasq



目标，让小米路由器完成局域网内访问海内外网站的分流，使用 `dnsmasq` 缓存 DNS 解析，避免 DNS 的污染。

## 刷小米路由器开发版

刷开发版，直接使用路由器网页版管理界面的升级功能，下载 `.bin` 文件，上传升级，（不会影响硬盘数据）。

## 获取 `root` 权限

1. 查询到路由器的默认初始密码（[https://d.miwifi.com/rom/ssh](https://d.miwifi.com/rom/ssh "https://d.miwifi.com/rom/ssh")）;
2. 用官方的工具开启 `ssh` 登录功能；

## 启动 `shadowsocks` 脚本

小米路由开发版自带 shadowsocks，创建启动脚本即可


	#!/bin/sh /etc/rc.common

	. /lib/functions.sh
	
	START=95
	
	SS_REDIR_PID_FILE=/var/run/ss-redir.pid
	SS_TUNNEL_PID_FILE=/var/run/ss-tunnel.pid
	CONFIG=/etc/shadowsocks.json
	DNS=8.8.8.8:53
	TUNNEL_PORT=5353
	
	start() {
	    # Client Mode
	    #service_start /usr/bin/ss-local -c $CONFIG -b 0.0.0.0 -f $SERVICE_PID_FILE
	    # Proxy Mode
	    service_start /usr/bin/ss-redir -c $CONFIG -b 0.0.0.0 -f $SS_REDIR_PID_FILE
	    # Tunnel
	    service_start /usr/bin/ss-tunnel -c $CONFIG -b 0.0.0.0 -u -l $TUNNEL_PORT -L $DNS -f $SS_TUNNEL_PID_FILE
	}
	
	stop() {
	    # Client Mode
	    #service_stop /usr/bin/ss-local
	    # Proxy Mode
	    service_stop /usr/bin/ss-redir
	    # Tunnel
	    service_stop /usr/bin/ss-tunnel
	}

设置开机启动

	/etc/init.d/myshadowsocks enable

## 分流

	ipset -N gfwlist iphash
	iptables -t nat -A PREROUTING -p tcp -m set --match-set gfwlist dst -j REDIRECT --to-port 1984 #这里的最后的数字要和第三部的local_port对应


然后重启 firewall

	/etc/init.d/firewall restart

## gfwlist2dnsmasq

下载[http://fankangsong.github.io/tools/dnsmasq_list.conf](http://fankangsong.github.io/tools/dnsmasq_list.conf "dnsmasq_list.conf")，上传到 `/etc/dnsmasq.d/`

重启 dnsmasq `/etc/init.d/dnsmasq restart`

完。