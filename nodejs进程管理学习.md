

nodejs 的单进程并非 nodejs 只能单进程工作。web server 中同为脚本语言的PHP， 处理请求时，为每个请求创建一个独立进程，负责当前请求、返回、错误，然后关闭进程。nodejs 区别与 PHP 的是，在独立的单个进程里，异步处理多个请求，通过回调来处理返回、错误。PHP  天生就是多进程，

于是 nodejs 提供了 cluster 内置模块，用于管理多进程，并提供负载均衡能力。cluster 可以通过主进程启动多个子进程，主进程将请求均衡的分配给多个子进程。进一步监听子进程的异常事件，在异常发生时，主动拉起子进程，已保障 nodejs 服务的可用性。

官方文档给出了 cluster 的使用方法：

创建一个 `cluster.js`

	const cluster = require('cluster');
	const http = require('http');
	const numCPUs = require('os').cpus().length;
	
	if(cluster.isMaster){ // 主进程
	  for(var i = 0; i < numCPUs; i++){
	  	let worker = cluster.fork(); // 拷贝主进程
	  }
	  
	  // 监听进程的 `exit` 事件，生产环境用于告警，或自动重启等
	  cluster.on('exit', (worker, code, signal) => {
	  	/* 参数 worker （退出的子进程） code （错误代码） 
	  	 * worker 是具体宕掉的子进程
	  	*/
	  })
	}else{ // 子进程
	  /* 在这里启动业务代码
	   * 例如：
	  */
	  
	  http.createServer((req, res) => {
	    res.writeHead(200);
	    res.end();
	  }).listen(80)
	}


需要注意的是，以上`cluster.on`监听的是子进程事件，等同于：

	let worker = cluster.fork();
	worker.on('exit', (code, signal) => {
	  
	});

以上实现了一个`cluster.js`，可以通过 `node cluster.js` 启动，利用 cluster 实现子进程创建、负载均衡。



待续...如何补齐子进程