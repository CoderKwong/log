# 使用Markdown编辑印象笔记

印象笔记的编辑器本身不支持Markdown语法，Sublime Text有evennote扩展，可以支持印象笔记的新增、编辑、选择笔记本、标签等功能，相当强大。

这里使用Sublime Text 3，Sublime Text 2不支持这个插件。

确认你已安装Sublime text的[Package Contrul](https://sublime.wbond.net/)，如果安装时报错，可能是网络原因，开启VPN再试试，或者使用http代理：

```
{
	"http_proxy": "http://user:password@proxyserver.com:port",
	"https_proxy": "http://user:password@proxyserver.com:port"
}
```

目前我还不知道如何设置socks5代理。

##安装插件evernote

1. `ctrl` + `shift` + `p`打开Package Control，输入`install package`，加载成功后，输入`evernote`回车安装。


2. 菜单栏打开`Preferences` > `Package Settings` > `Evernote ` > `Reconfigure Authorisation`

3. 打开https://www.evernote.com/api/DeveloperToken.action，生成一个Developer Tokens，包含一个Token和NoteStore Url。（印象笔记用户打开https://app.yinxiang.com/api/DeveloperToken.action）。

4. 菜单栏打开`Preferences` > `Package Settings` > `Evernote ` > `User`，把生成Token和NoteStore Url粘贴：

	```
	{
	    "noteStoreUrl": "http://生成的URL",
	    "token": "这里替换你的token"
	}
    ````
    
5. 新增一个笔记，`ctrl` + `shift` + `p`输入`evernote`
![](https://dl.dropboxusercontent.com/u/2589242/2014/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202014-12-25%2000.02.11.png)

享受Markdown吧！