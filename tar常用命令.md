
# tar 常用命令

## 基本命令

- `-c` 建立压缩档案
- `-x` 解压
- `-t` 查看内容
- `-r` 向压缩归档文件末尾追加文件
- `-u` 更新原压缩包中的文件

## 可选

- `-z` gzip
- `-j` bz2
- `-Z` 有compress属性的
- `-v` 显示所有过程
- `-O` 将文件解开到标准输出

## `-f`参数必选

`-f` 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名

	这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名
	tar -cf all.tar *.jpg

## 查看

	在不解压的情况下查看压缩包的内容
	tar -tf aaa.tar.gz

## 压缩

	将目录里所有jpg文件打包成tar.jpg
	tar –cvf jpg.tar *.jpg

	将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz
	tar –czf jpg.tar.gz *.jpg

	将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2
	tar –cjf jpg.tar.bz2 *.jpg

	将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z
	tar –cZf jpg.tar.Z *.jpg

## 解压

- `tar –xvf file.tar` 解压 tar包
- `tar -xzvf file.tar.gz` 解压tar.gz
- `tar -xjvf file.tar.bz2` 解压 tar.bz2tar –xZvf file.tar.Z
