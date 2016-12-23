#denyhosts屏蔽本地IP的解决办法

Denyhosts的屏蔽地址：

	cat /etc/hosts.deny

如果查到自己的IP被屏蔽了，可以先去SSH登录日志查询：

	#登陆失败的日志
	cat /var/log/auth.log | grep 'sshd.*Invalid'
	
	#把登陆失败的日志打印到文件
	cat /var/log/auth.log | grep 'sshd.*Invalid' > ~/sshd.log
	
	#查看登录成功的日志
	cat /var/log/auth.log | grep 'sshd.*opened'



**注意：可能Centos的日志文件名是`/var/log/secure`**



##接下来就是清理要删掉的IP

第一步：

	service denyhosts stop #停止denyhosts工作，否则无法删除

此时要先清理登录日志

	echo "" > /var/log/auth.log

第二步：

	#查找denyhosts的的WORK_DIR路径
	vim /etc/denyhosts.conf #配置文件去搜搜`work_dir`

第三步：
	
打开/var/lib/denyhosts目录，删除里面文件包含要自己IP的文件保存。

然后重启denyhosts


##一定要先清空登录日志，原因是denyhosts可能是按照登录错误的次数屏蔽，历史保存了登录错误的IP都可能会被屏蔽，具体还是要花点时间去阅读下denyhosts的配置文件。