#iftop的filter命令详解

> **Filtering networks, hosts, and ports :**

> While it’s nice to see all the hosts your computer is talking to, it’s often the case that you’re only interested in a certain segment of the network. iftop allows you to filter connections by network, host, and port, which gives you complete control over which connections are displayed. iftop accepts [pcap-filter formatted filters](http://www.manpagez.com/man/7/pcap-filter/) on the commandline with the -f flag. Below is a table of some of the filers you might want to use with iftop:

	dst host xxxx
	dst net xxxx	
	dst port xxxx	
	dst portrange start-end
	src net net
	src port xxxx
	src portrange start-end
	src host xxxx
	gateway xxxx
	ip proto protocol


**For example:**

* to view only traffic going from your local machine to google.com over eth0, you could run:

	```iftop -i eth0  -f  “dst host Linux.com”```
* to see only ssh traffic over eth1:

	```iftop  -i  eth1   -f    “dst port 22″```