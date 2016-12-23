# vps iptables 防火墙

	# 允许本地回环 127.0.0.1
	iptables -A INPUT -i lo -p all -j ACCEPT
	
	# 允许已经建立的所有连接
	iptables -A INPUT -p all -m state --state ESTABLISHED,RELATED -j ACCEPT

	# 允许所有向外发起的连接
	iptables -A OUTPUT -j ACCEPT

	# 允许 服务端口
	iptables -A INPUT -p tcp --dport 80 -j ACCEPT
	iptables -A INPUT -p tcp --dport 443 -j ACCEPT
	iptables -A INPUT -p tcp --dport 5175 -j ACCEPT

	# 拒绝其他所有未被允许的连接
	iptables -A INPUT -j REJECT
	iptables -A FORWARD -j REJECT

设置开机启动：

	# 保存一份
	iptables-save > /etc/firewall.conf

	# 新建一个启动文件
	touch /etc/network/if-up.d/iptables

	# 编辑 /etc/network/if-up.d/iptables
	iptables-restore < /etc/firewall.conf

	chmod +x /etc/network/if-up.d/iptables

打开所有网卡的Ping

	iptables -A INPUT -i eth+ -p icmp --icmp-type 8 -j ACCEPT
	iptables -A OUTPUT -o eth+ -p icmp --icmp-type 0 -j ACCEPT
