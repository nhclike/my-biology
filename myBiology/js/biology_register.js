/**
 * Created by uid on 2017/5/8.
 */

$(function(){
    //加载头部
    $('#header').load('../html/biology_header_fix.html');

    //用户名验证
    $('#login_board input').keyup(function() {
        function yz(text, reg) {
            if (reg.test($(text).val())) {
                //console.log(1);
                $(text).parent().next().html('设置成功');
            }
            else {
                //console.log(2);
                $(text).parent().next().html('重新输入');
            }
        }

        var uname = yz($('#uname'), /\w{6,10}/);
        var upwd = yz($('#upwd'), /\d{6}/);
    });

    //页面加载完成以后给立即注册绑定点击事件
    $('#register').click(function(e){
        e.preventDefault();
        //获取页面值
        var ua=uname.value;
        var up=upwd.value;
        //console.log(ua);
        //console.log(up);
        //发送ajax请求传递ua和up
        $.ajax({
            type:'post',
            url:'/register',
            data:{uname:ua,upwd:up},
            success:function(data){
                console.log('成功接收服务器发来的数据');
                console.log(data);
                alert('注册成功');
                setInterval(function(){
                    location.href='biology_index.html'
                },3000)
            }
        });
    })
})