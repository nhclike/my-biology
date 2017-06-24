/**
 * Created by uid on 2017/4/26.
 */
$(function(){
    //加载头部尾部
    $('#header').load('../html/biology_index_header.html');

    $('#footer').load('../html/biology_footer.html');
    //用户登录表单切换
    $('#u_login').on('click','li',function(e){
        e.preventDefault();
        console.log(this);
        $(this).addClass('active').siblings('.active').removeClass('active');
        var id=$(this).children().attr('href');
        $(id).removeClass('hidden').siblings(':not(.hidden)').addClass('hidden');
    });

})