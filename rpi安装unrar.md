# raspbery pi 安装 unrar

## 安装

	apt-get build-dep unrar-nonfree
	apt-get source -b unrar-nonfree
	dpkg -i unrar_*_armhf.deb

## 命令

	unrar x FILENAME.rar 解压文件
	unrar t FILENAME.rar 测试文件
	unrar l FILENAME.rar 列出文件

 