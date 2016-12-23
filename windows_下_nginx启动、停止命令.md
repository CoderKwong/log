#Windows 下 Nginx启动、停止命令

**启动**

     C:\nginx>start nginx
     
     或者
     
     C:\nginx>nginx.exe
     
注：建议使用第一种，第二种会使你的cmd窗口一直处于执行中，不能进行其他命令操作。

**停止**

    C:\nginx>nginx.exe -s stop
    
    或者
    
    C:\nginx>nginx.exe -s quit

注：stop是快速停止nginx，可能并不保存相关信息；quit是完整有序的停止nginx，并保存相关信息。

**重载**

    C:\nginx>nginx.exe -s reload

**重新打开日志文件**

    C:\nginx>nginx.exe -s reopen


**查看版本**

    C:\nginx>nginx -v