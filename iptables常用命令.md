
## 清理规则

```
iptables -t nat -F
```

##封IP

###查看iptables状态

```
service iptables status #查看状态
service iptables start  #开启
service iptables stop   #关闭
```

**或者**

```
iptables -L --line-numbers
```


###封锁单个IP

```
iptables -I INPUT -s 211.1.0.0 -j DROP
```

###封锁IP段

```
iptables -I INPUT -s 211.1.0.0/16 -j DROP
iptables -I INPUT -s 211.2.0.0/16 -j DROP
iptables -I INPUT -s 211.3.0.0/16 -j DROP
```

###封整个IP段

```
iptables -I INPUT -s 211.0.0.0/8 -j DROP
```

###封几个段的命令

```
iptables -I INPUT -s 61.37.80.0/24 -j DROP
iptables -I INPUT -s 61.37.81.0/24 -j DROP
```

###解封

```
iptables -L INPUT
```

```
iptables -L --line-numbers #然后iptables -D INPUT 序号
```
