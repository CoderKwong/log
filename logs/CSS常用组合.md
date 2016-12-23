##CSS文字溢出胜率号：

	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;

##CSS三角形箭头（用于手机端）：

HTML
	<span class="arrow"></span>

CSS

	.arrow{
	    display: inline-block;
	    border: 2px 2px 0 0;
	    border-style: solid;
	    border-color: #ccc;
	}

##重置表单样式（去掉边框、阴影等默认样式）

	-webkit-appearance:none;
	-ms-appearance: none

##去掉手机链接、表单点击的响应阴影

	-webkit-tap-highlight-color: rgba(0,0,0,0);

##flex-box内text-overflow: ellipsis不生效的办法

	.box{display: box;}

	/* 加上 */
	.box{display: box; width: 1%}

此时，.box内`text-overflow: ellipsis`不会生效，必须加上`width`属性才会生效。

参考文章：

* [How to keep a flex item from overflowing due to its text?](http://stackoverflow.com/questions/12022288/how-to-keep-a-flex-item-from-overflowing-due-to-its-text)
* [http://jsfiddle.net/iamanubhavsaini/zWtBu/](http://jsfiddle.net/iamanubhavsaini/zWtBu/)

##flex box的宽度不均等的解决方法

	.header .inner{
	    width: 100%;
	    max-width: 640px;
	    height: 40px;
	    margin: auto;
	    -webkit-box: box;
	    display: box;
	}
	.header .col-l,
	.header .col-r{
	    -webkit-box-flex: 1;
	    box-flex: 1;
	    text-align: center;
	    line-height: 40px;
	    position: relative;
	}
	.header .col-m{
	    -webkit-box-flex: 2;
	    box-flex: 2;
	}

碰到的问题是，.col-l与.col-r的宽度不是相等的。碰到flex-box计算不均等时，给每个子容器加上width宽度值：

	.header .inner > div{
	    width: 1%
	}