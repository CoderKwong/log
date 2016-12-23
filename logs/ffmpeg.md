

	ffmpeg -i input.mp4 -i input.mp3 -c copy -map 0:0 -map 1:0 output.mp4