# Raspberry Pi 安装 VPN

路由器地址：`10.0.0.1`，树莓派地址：`10.0.0.200`
    
    
    sudo apt-get install  libpcap0.8-dev libpcap0.8 libcap-dev
    sudo apt-get install lsof
    
    

不要apt-get 安装 openswan，ios设备无法登录，问题表现可搜索**L2TP-PSK-NAT IPSEC_INITIAL_CONTACT**
    
    
    wget http://snapshot.raspbian.org/201403301125/raspbian/pool/main/o/openswan/openswan_2.6.37-3_armhf.deb
    sudo dpkg -i openswan_2.6.37-3_armhf.deb
    
    

后续操作参考这个网站[HOW TO SETUP L2TP VPN SERVER ON RASPBERRY PI?](http://linux.tips/tutorials/how-to-setup-l2tp-vpn-server-on-raspberry-pi)

**注意：** 编辑 `ipsec.conf` 文件时注意缩进必须用 `tab`，且一个 `tab`

启动命令：
    
    
    /etc/init.d/xl2tpd restart
    /etc/init.d/ipsec restart
    
    

端口映射
    
    
    pptp: TCP:1723
    L2TP:
        UDP:500    (isakmp)
        UDP:4500   (nat-t)
        UDP:1701   (l2tp)
    
    

  1. 是否已经打开IP转发？

查看`/proc/sys/net/ipv4/ip_forward`文件中的值是否为`1`, 如果不是, 则需要在`/etc/sysctl.conf`文件中添加`net.ipv4.ip_forward=1`;

  1. 无法访问internet？

  


`iptables --table nat --append POSTROUTING --out-interface eth0 --jump MASQUERADE`
