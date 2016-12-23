# js 模版

    var tmpDiv = document.createElement("div");
    var tmpl = function (str, param) {
        if (!str) {
            return '';
        }

        param = param || {};
        var fn = ['var __=[];'];

        // 获取模版中的html字符串，变量以及执行的语句
        var re = /([\s\S]*?)(?:(?:<%([^=][\s\S]*?)%>)|(?:<%=([\s\S]+?)%>)|$)/gm;
        re.lastIndex = 0;
        var m = re.exec(str || '');

        // html字串和Javascript代码分离
        while (m && (m[1] || m[2] || m[3])) {
            // html字符串
            m[1] && fn.push('__.push(\'', m[1], '\');');

            // Javascript执行语句
            m[2] && fn.push(m[2]);

            // Javascript变量
            m[3] && fn.push('__.push(this.htmlEncode(', m[3], '));');

            m = re.exec(str);
        }
        fn.push('return __.join(\'\');');
        var args = [], argv = [];
        for (var key in param) {
            args.push(key);
            argv.push(param[key]);
        }

        // 构造执行函数，并填充数据
        fn = new Function(args.join(','), fn.join(''));
        return fn.apply(tmpl, argv);
    };

    tmpl.htmlEncode = function (str) {
        ('textContent' in tmpDiv) ? (tmpDiv.textContent = str) : (tmpDiv.innerText = str);
        var output = tmpDiv.innerHTML;
        return output;
    }


