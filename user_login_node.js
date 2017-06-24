/**
 * Created by uid on 2017/5/8.
 */
const express=require('express');
const user=require('./user');
var app=express();
require('http').createServer(app).listen(8080);
app.use(express.static('myBiology'));
app.post('/register',user.add);
app.post('/login',user.test);
