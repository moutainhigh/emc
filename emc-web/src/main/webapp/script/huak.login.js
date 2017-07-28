/**
 * Copyright (C), 2009-2012, 北京华热科技发展有限公司.<BR>
 * Author:  lichao  <BR>
 * Project:eccp    <BR>
 * Version: v 1.0      <BR>
 * Date: 2016/8/24<BR>
 */

//回车事件
var loge;
document.onkeydown = function(e){
    if(!loge){
        loge = true;
        return;
    }
    e = e ? e : event;
    if(e.keyCode == 13){
        $('#login').click();
        return false;
    }
}
//以下为官方示例
$(function () {
    $("#login").click(function(){
            $.ajax({
                url:ctx + '/login-in?' + Math.random(),
                data:$('form').serialize(),
                type:'POST',
                dataType:'json',
                success:function(result) {
                    if(result.isLogin){
                        window.location.replace(ctx + "/index");
                    }else{
                        $('.login-error').remove();
                        $("#login").after('<span style="color: red;" class="help-block m-b-none login-error"><i class="fa fa-times-circle"></i> '+result.msg+'</span>');
                        $('.ver-code-img').click();
                    }
                }
            })
    }

    );


    //刷新验证码
    $('.ver-code-img').bind('click', function() {
        this.src = this.src + '?';
    });
});