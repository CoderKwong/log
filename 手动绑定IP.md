
手动绑定IP 

	ifconfig venet0:0 174.140.166.38 netmask 255.255.255.255


手动网关

	route add default gw 174.140.166.38

开机启动

	/etc/rc.local 