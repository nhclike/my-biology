
const express=require('express');
const msg=require('./msg');
const user=require('./user');
var app=express();
require('http').createServer(app).listen(8080);
//服务器提供静态页面
app.use(express.static('myBiology'));
//接收客户端添加留言的请求
app.post('/msg',msg.add);
//接受客户端请求所有留言的请求
app.get('/msg',msg.getAll);
app.post('/register',user.add);
app.post('/login',user.test);
