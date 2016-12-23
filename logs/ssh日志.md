**查看登陆失败的日志**

```
cat /var/log/auth.log | grep 'sshd.*Invalid'
```

**把登陆失败的日志打印到文件**

```
cat /var/log/auth.log | grep 'sshd.*Invalid' > ~/sshd.log
```

**查看登录成功的日志**

```
cat /var/log/auth.log | grep 'sshd.*opened'
```