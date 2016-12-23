# tmux

### 会话命令

	创建新会话
	tmux new -s SESSION_NAME

	创建新会话在后台
	tmux new -s SESSION_NAME -d

	会话列表
	tmux ls

	恢复会话
	tmux attach -t SESSION_NAME

	关闭会话
	tmux kill-session -t SESSION_NAME

### 会话操作

	挂起会话到后台，离开 tmux
	ctrl + b d

	关闭会话
	exit


### 窗口命令

	创建一个窗口
	tmux new -s windows -n WINDOWS_NAME

### 窗口操作

	创建一个窗口
	ctrl + b c

	命名窗口
	ctrl + b ,

	窗口切换
	ctrl + b 0 1 2 3...
	ctrl + b p

	窗口列表
	ctrl + b w

	窗口查找
	ctrl + b f

	关闭
	ctrl + b x


### 面板操作

	垂直分割
	ctrl + b %

	水平分割
	ctrl + b "

	面板切换
	ctrl + b up right left down
	ctrl + b o

	水平、垂直切换
	ctrl + b space

	关闭面板
	exit


----------


### 命令模式

	进入命令模式
	ctrl + b :

