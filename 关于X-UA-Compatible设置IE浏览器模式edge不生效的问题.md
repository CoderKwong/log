# 关于X-UA-Compatible设置IE浏览器模式edge不生效的问题

	<meta http-equiv="X-UA-Compatible" content="IE=edge">

>X-UA-compatible 标头不区分大小写；不过，它必须显示在网页中除 title 元素和其他 meta 元素以外的所有其他元素之前的标头（HEAD 节（可能为英文网页））中。

也就是说`X-UA-compatible`必须写在最上面。

参考：[https://msdn.microsoft.com/zh-cn/library/cc288325](https://msdn.microsoft.com/zh-cn/library/cc288325)