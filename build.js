process.chdir(__dirname);

var fs = require('fs')
var path = require('path')

var dirnames = fs.readdirSync('./')

var ignores = ['assets']

/*
读成文件序列
function read(filename){

	var stat = fs.statSync(filename)

	if(stat.isDirectory()){
		var filenames = fs.readdirSync(filename);
		filenames = filenames.filter(function(f){
			return f.substr(0,1) !== '.'
		})

		return filenames.map(function(f){
			var map = {}
			map[f] = read(path.join(filename,f))
			return map;
		})
	}
	else if(stat.isFile()){
		return filename;
	}
}
*/

function build(filePath,fileName,i){

	var markdown = [];
	var stat = fs.statSync(filePath)

	filePath = filePath.replace(/\\/g, '/');

	i++

	//忽略 ignores 中的文件
	if(ignores.some(function(ignore) {
		return ignore == path.basename(filePath)
	})) {
		return markdown
	}

	if(stat.isDirectory()){

		markdown.push({
			depth:i,
			filename:fileName,
			path:filePath,
			isDirectory:true
		})

		var fileNames = fs.readdirSync(filePath);
		fileNames = fileNames.filter(function(f){
			return f.substr(0,1) !== '.'
		})

		fileNames.forEach(function(f){
			markdown = markdown.concat(build(path.join(filePath,f),f,i));
		})

		var readme = [].concat(markdown);
		readme = readme.map(function(item){
			var url = item.path.replace(/\s/g, '%20');
			return '\t'.repeat(item.depth-i)+'+ ['+item.filename+']('+url+')';
		})

		fs.writeFileSync(path.join(filePath,'README.md'),readme.join('\n'))
	}
	else if(stat.isFile()){
		markdown.push({
			depth:i,
			filename:fileName,
			path:filePath
		})
	}

	return markdown
}


build('./','log',0);
