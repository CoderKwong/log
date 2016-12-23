告诉Windows以最新的IE版本渲染：

```
<meta http-equiv="X-UA-Compatible" content="edge" />
```

告诉Windows以最新的**IE8**渲染：

```
<meta http-equiv="X-UA-Compatible" content="IE=8" />
```

##注意X-UA-Compatible放置的位置，MSDN[《定义文档兼容性》](http://msdn.microsoft.com/zh-cn/library/cc288325%28VS.85%29.aspx)中是这样说的：

>The X-UA-compatible header is not case sensitive; however, it must appear in the Web page’s header (the HEAD section) before all other elements, except for the title element and other metaelements.

>X-UA-compatible 标头不区分大小写；不过，它必须显示在网页中除 title 元素和其他 meta 元素以外的所有其他元素之前的标头（HEAD 节（可能为英文网页））中。

###示例：

```

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=IE7,IE9">
    <title></title>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="...">
    <script type="text/javascript" src="..."></script>
</head>
<body>
	<!--网页主体-->
</body>
</html>

````


附：

[IE兼容性语法测试](http://emological.com/ie/)