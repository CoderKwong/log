# 安装lrzsz

之前一直使用winSCP上传、下载文件。然后再公司内部，通常需要从一个跳板机再登录目标机器，winSCP显然不能做到这种登录。

于是上传文件只能通过终端命令来完成。

安装很简单`yum install lrzsz`或者`apt-get install lrzsz`

使用方法：

* 上传文件：`rz`
* 上传压缩包：`rz -bye` 具体没去研究-bye有什么作用
* 下载文件: `sz abc.txt` 下载abc.txt文件

