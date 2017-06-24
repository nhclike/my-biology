/**
 * Created by uid on 2017/5/3.
 */

$(function(){
    //将用户名显示出来
    if(sessionStorage['una']){
        $('.username').html(sessionStorage['una']);
    }
    else{
        location.href='biology_register.html';
    }
    $.ajax({
        type:'GET',
        url:'/msg',
        success:function(list){
            console.log('成功接受服务器返回的数据');
            //console.log(list);


            var html='';

            for(var i=0;i<list.length;i++){

                var ptime=list[i].pubTime;

                var ptime2=new Date(ptime);
                var now=new Date().getTime();
                var s=(now-ptime2)/1000;
                var d=parseInt(s/(60*60*24));
                var h=parseInt(s%(60*60*24)/3600);
                var m=parseInt(s%(3600*24*3600)/60);
                var pt='';
                if(m<60&&d==0&&h==0){
                   pt=m+'分钟前'
                }
                if(m>=60&&h<24&&d==0){
                    pt=h+'小时前'
                }
                if(m>=60&&h>=24&&d<29){
                    pt=d+'天前'
                }
console.log(pt);
                html+=`
                <div class="msg panel panel-success">
                        <div class="panel-heading clearfix">
                            <h4 class="pull-left">发布人:
                            <span>${list[i].uname}</span> </h4>
                            <h4 class="pull-right">发布时间:${pt}</h4>
                        </div>
                        <div class="panel-body">
                             <p>留言内容：${list[i].content}</p>
                        </div>
                        <div class="panel-footer clearfix">
                            <button type="button" class="btn btn-success btn-sm pull-right">回复</button>
                        </div>
                 </div>
                <!--<div class="msg">-->
                      <!--<p>发布人：${list[i].uname}   发布时间：${list[i].pubTime}</p>-->
                      <!--<p>留言内容：${list[i].content}</p>-->
                    <!--</div>-->
                `
            }
            $('#bbs_list').html(html);
        }
    }),

    $('.btn_send').click(function(){
        var uname=sessionStorage['una'];
        var content=$('#bbs_content').val();
        console.log(content);
        $.ajax({
            type:'POST',
            url:'/msg',
            data:{'uname':uname,'content':content},
            success:function(list){
                console.log('成功接受服务器返回的数据');
                console.log(list);
                alert('添加成功');
            }
        })
    })
});