#简单配置终端配色for OS X

编辑：

	vim ~/.bash_profile
	
输入以下：
	
	# for color
	export CLICOLOR=1
	# \h:\W \u\$
	export PS1='\[\033[01;33m\]\u@\h\[\033[01;31m\] \W\$\[\033[00m\] '

	# 浅色
	export LSCOLORS=GxFxCxDxBxegedabagaced

	#export LSCOLORS=ExFxCxDxBxegedabagacad
	
	#export LSCOLORS=GxFxCxDxBxegedabagaced
	
然后再终端设置里，选择一个主题，改下背景色。

试试`ls`，看看高亮的颜色，完成。