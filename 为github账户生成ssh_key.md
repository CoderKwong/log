##为Github账户生成SSH key

本地已有其他服务器的SSH密钥，需要对生成密钥定义命名：

	ssh-keygen -t rsa -f ~/.ssh/id_rsa.github -C "youname@mail.com"

生成的密钥在`~/.ssh`目录下，打开`open .`，然后拷贝`id_rsa.github.pub`的内容，填充到Github网站的SSH key管理界面。

接下来必须要配置config文件

	vim ~/.ssh/config
	
	#内容如下
	
	Host github
	Hostname github.com
	Port 22
	User git
	IdentityFile ~/.ssh/id_rsa.github

这里指定Github.com账户使用的私钥`id_rsa.github`

##测试方法：

	ssh -T git@github.com

首先返回：

````````
The authenticity of host 'github.com (192.30.252.**)' can't be established.
RSA key fingerprint is xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:
Are you sure you want to continue connecting (yes/no)? 
````````


返回表示成功：

````````
Hi youname! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
````````