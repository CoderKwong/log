# javascript closure

## 计数器

	var timer = {
		init: function(i){
			return this.set(i);
		},
	
		get: function(){
			return this.times;
		},
	
		set: function(i){
			var self = this;
			return function(){
				i++;
				self.times = i;
				console.log(i)
			}
		}
	}
	
	var doo = timer.init(0);
	
	doo();
	doo();
	doo();
	
	console.log('==========')
	console.log(timer.get())

输出：

	1
	2
	3
	==========
	3

