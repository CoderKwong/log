# ubuntu 安装 ffmpeg.md


	apt-get install python-software-properties software-properties-common
	apt-add-repository ppa:mc3man/trusty-media
	apt-get update
	apt-get install ffmpeg gstreamer0.10-ffmpeg


安装 youtubel-dl [via](http://rg3.github.io/youtube-dl/download.html)：

	curl https://yt-dl.org/downloads/2015.03.09/youtube-dl -o /usr/local/bin/youtube-dl
	chmod a+x /usr/local/bin/youtube-dl