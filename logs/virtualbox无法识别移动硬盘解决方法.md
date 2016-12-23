# Virtualbox在OS X上无法识别USB硬盘

直奔主题：

1. 安装**Guest Additions**，启动Windows虚拟机后，找到"Device - Insert Guest Additions...";
2. 安装**Oracle VM VirtualBox Extension Pack**，在这里下载[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)，找到“VirtualBox 4.3.20 Oracle VM VirtualBox Extension Pack”。
3. 在Virtualbox的虚拟机的菜单"Machine - Setting - Port - Usb"勾选**USB controller**，下方**Filters**添加设备；
4. 必须在OS X里推出移动硬盘，虚拟机才能识别。

太坑了！搜了好多方法，其实就是第四步（没在Mac推出硬盘）的原因。大家都在说什么vboxusers，都是linux桌面的问题。