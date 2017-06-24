/**
 * Created by uid on 2017/5/9.
 */
$(function(){
    //页面加载完成后
    //给#login添加单击事件
    $('#login').click(function(e){
        e.preventDefault();
        //从页面获取uname
        var un=uname.value;
        var up=upwd.value;
        //发送ajax请求验证是否是已有用户
        $.ajax({
            type:'post',
            url:'/login',
            data:{uname:un,upwd:up},
            success:function(data){
                console.log('成功接收服务器发来的数据');
                console.log(data);
                var uname=data[0].uname;
                sessionStorage['una']=uname;
                alert('登录成功,欢迎'+sessionStorage['una']+'回来')
            }
        })
    })
});