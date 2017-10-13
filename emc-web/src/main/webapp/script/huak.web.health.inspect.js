var imgPath =_web + "/static/" + (localStorage.faceKey == "dark" ? "imgdark" : "img");

function loadDataFun() {
    initRuning();
    chart01Fun();

    $("#runbtn").click(function() {
        $(".erroritem").show();
        $(".normalitem").show();
        polling();
        loadRuning1();
    });

    $(".normalitem h1").click(function() {
        $(this).parent().parent().find("ul").toggle();
        if ($(this).parent().parent().find("ul").is(":hidden")) {
            $(this).addClass('open');
        } else {
            $(this).removeClass('open');

        }

    });

}
/**
 * 修改第一个图标为运行状态
 */
function modifyStateRuning(){
    var $ul = $("#healthlistul");
    var $first_li = $ul.find("li").first();
    $first_li.find("div").addClass("state0");
    var url = $first_li.find("img").attr("src");
    var path = url.substr(0,url.lastIndexOf("/"));
    var imgName = url.substr(url.lastIndexOf("/"),url.length);
    imgName = imgName.replace("-nor","");
    $first_li.find("img").attr("src",path + imgName);
}
/**
 * 修改运行图标
 * 如果num>0为异常
 * num==0为正常，分组显示
 * @param num
 */
function modifyStateStop(num){
    var $ul = $("#healthlistul");
    var $first_li = $ul.find("li").first();
    var $li = $first_li.clone();
    $li.find("div").removeClass("state0");
    var url = $li.find("img").attr("src");
    var path = url.substr(0,url.lastIndexOf("/"));
    var imgName = url.substr(url.lastIndexOf("/"),url.length);

    if(num>0){//异常
        imgName = imgName.replace(".png","-abnor.png");
        $li.find("img").attr("src",path + imgName);
        $li.find("p").append('<span>'+num+'</span>');

        $("#errorlistul").append($li.hide());
        $li.fadeIn(1000,function(){
            $li.show();
        });
        var count = Number($("#errorcount").text());
        if(count==null||count=='NaN'){
            count = 0;
        }
        $("#errorcount").text(count+1);
    }else{
        imgName = imgName.replace(".png","-nor.png");
        $li.find("img").attr("src",path + imgName);
        var parentName = $li.attr("parentName");
        var parentTitle = $li.attr("parentTitle");
        if($('#'+parentName).length==0){
            var html = '<div class="panelwrap" id="'+parentName+'"><div class="title"><h1>'+parentTitle+' - 共<span>0</span>项</h1></div><ul></ul></div>';
            $('.normalitem').append(html);
        }
        $('#'+parentName).find('ul').append($li.hide());
        $li.fadeIn(1000,function(){
            $li.show();
        });

        var $span = $('#'+parentName).find('.title').find('span');
        var count1 = Number($span.text());
        if(count1==null||count1=='NaN'){
            count1 = 0;
        }
        $span.text(count1+1);

        var count = Number($("#normalcount").text());
        if(count==null||count=='NaN'){
            count = 0;
        }
        $("#normalcount").text(count+1);
    }
    $first_li.remove();

    modifyStateRuning();

}
/**
 * 打印信息
 * @param msg
 */
function printlnMsg(msg){
    var $div = $("#printMsg");
    var length = $div.find("p").length;
    if(length<7){
        $div.append('<p>' + msg + '</p>');
    }else if(length == 7){
        $div.find("p").first().text("...");
        $div.find("p").eq(1).remove();
        $div.append('<p>' + msg + '</p>');
    }
}

function loadRuning1(){
    modifyStateRuning();
    var healthItems = eval($("#healthItem").val());
    $.ajax({
        url : _web+"/health/testing",
        contentType : 'application/json;charset=utf-8', //设置请求头信息
        type : "POST",
        cache : false,
        data: JSON.stringify(healthItems),
        dataType: "json",
        success : function(data) {

        }
    });
}
/**
 * 长连接
 */
function polling(){
    $.ajax({
        url : _web+"/health/polling",
        type : "GET",
        timeout:30000,
        cache : false,
        dataType:"JSON",
        success : function(data) {
            if(data != null && data != ""){
                if(data.msg!=null&&data.msg!="undefined"&&data.msg!=""){
                    printlnMsg(data.msg);
                }
                if(data.num!=null&&data.num!="undefined"){
                    modifyStateStop(data.num);
                }
                if(data.end==null||data.end==""||data.end=="undefined"){
                    polling();
                }else{

                }
            }else{
                polling();
            }

        },
        complete:function(XMLHttpRequest,status){
            console.info("status"+status);
            if(status=='timeout') {//超时,status还有success,error等值的情况
                polling();
            }
        }
    });
}
/**
 * 初始化待检测项
 */
function initRuning(){
    var healthItem = eval($("#healthItem").val());
    $("#healthlistul").empty();
    $("#healthcount").html(healthItem.length);
    $.each(healthItem,function(idx,item){
        var  $li = '<li parentName="'+item.parentName+'" parentTitle="'+item.parentTitle+'"><div><img src="'+imgPath+'/health/'+item.img+'-nor.png"></div><p>'+item.title+'</p></li>';
        $("#healthlistul").append($li);
    });
}

function loadRuning() {

    $("#running").show();
    $("#runbtn").hide();

    var data =[{
        title:'',
        item:[{
            img: 'test-01-01',
            name: '万平米工单',
            error: 1
        },{
            img: 'test-01-01',
            name: '万平米工单',
            error: 3
        }]
    },{

    },{

    },{

    }];


    if (healthRuning) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<div class="panelwrap">';
            html += '	<div class="title"><h1>' + data[i].title + ' - 共<span>' + data[i].items.length + '</span>项</h1></div>';
            html += '	<ul>';
            for (var j = 0; j < data[i].items.length; j++) {
                var statestr = "";
                if (data[i].items[j].state == 1) {
                    statestr = '-abnor';
                } else if (data[i].items[j].state == 2) {
                    statestr = '-nor';
                }
                html += '		<li>';
                html += '<div class="state' + data[i].items[j].state + '"><img src="' + faceKey + '/health/' + data[i].items[j].img + statestr + '.png" /></div>';
                html += '			<p>' + data[i].items[j].name + (data[i].items[j].error == 0 ? "" : "<span>" + data[i].items[j].error + "</span>") + '</p>';
                html += '		</li>';
            }
            html += '	</ul>';
            html += '</div>';
        }
        $("#resulthealth").html(html);
    } else {
        var html = "<div class='resultlist'>";
        html += '<div class="erroritem">';
        html += '<div>';
        html += '<h1>发现<span id="errorcount">0</span>项异常</h1>';
        html += '</div>';
        html += '<div class="panelwrap">';
        html += '<ul id="errorlistul">';
        html += '</ul>';
        html += '</div>';
        html += '</div>';
        html += '<div class="normalitem">';
        html += '<div>';
        html += '<h1>以下<span id="normalcount">0</span>项无异常</h1>';
        html += '</div>';
        var normalcount = 0;
        var errorcount = 0;
        var count = 0;
        var normalHtml = "";
        var errorHtml = "";
        for (var i = 0; i < data.length; i++) {

            html += '<div class="panelwrap">';

            count = 0;
            normalHtml = ""

            for (var j = 0; j < data[i].items.length; j++) {
                var itemshtml = "";
                itemshtml += '		<li>';
                itemshtml += '<div><img src="' + faceKey + '/health/' + data[i].items[j].img + (data[i].items[j].state == 1 ? '-abnor' : '-nor') + '.png" /></div>';
                itemshtml += '			<p>' + data[i].items[j].name + (data[i].items[j].error == 0 ? "" : "<span>" + data[i].items[j].error + "</span>") + '</p>';
                itemshtml += '		</li>';

                if (data[i].items[j].state == 1) {
                    errorcount++;
                    errorHtml += itemshtml;
                } else {
                    count++;
                    normalHtml += itemshtml;
                }
            }
            html += '	<div class="title"><h1>' + data[i].title + ' - 共<span>' + count + '</span>项</h1></div>';
            html += "<ul>" + normalHtml + "</ul>";
            html += '</div>';
            normalcount += count;
        }


        html += '</div></div>';
        $("#resulthealth").html(html);
        $("#normalcount").html(normalcount);
        $("#errorcount").html(errorcount);
        $("#errorlistul").html(errorHtml);
    }


}

function chart01Fun() {

    //占比-赋值即可
    var level_ = 0.75;
    //$("#level_num").text((level_ * 100) + '%');
    var wavehealth = (function() {
        var ctx;
        var waveImage;
        var canvasWidth;
        var canvasHeight;
        var needAnimate = false;

        function init(callback) {
            var wave = document.getElementById('chart01');
            if ($(wave).find("canvas").length > 0) {
                return;
            }
            var canvas = document.createElement('canvas');
            if (!canvas.getContext) return;
            ctx = canvas.getContext('2d');
            canvasWidth = wave.offsetWidth;
            canvasHeight = wave.offsetHeight;
            canvas.setAttribute('width', canvasWidth);
            canvas.setAttribute('height', canvasHeight);
            wave.appendChild(canvas);
            waveImage = new Image();
            waveImage.onload = function() {
                waveImage.onload = null;
                callback();
            }
            waveImage.src = _web + '/static/img/wave2.png';
        }

        function animate() {
            var waveX = 0;
            var waveY = 0;
            var waveX_min = -220;
            var waveY_max = canvasHeight * level_;
            var requestAnimationFrame =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };

            function loop() {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                if (!needAnimate) return;
                if (waveY < waveY_max) waveY += 1.5;
                if (waveX < waveX_min) waveX = 0;
                else waveX -= 3;

                ctx.globalCompositeOperation = 'source-over';
                ctx.beginPath();
                ctx.arc(canvasWidth / 2, canvasHeight / 2, canvasHeight / 2, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();

                ctx.globalCompositeOperation = 'source-in';
                ctx.drawImage(waveImage, waveX, canvasHeight - waveY);

                requestAnimationFrame(loop);
            }
            loop();
        }

        function start() {
            if (!ctx) return init(start);
            needAnimate = true;
            setTimeout(function() {
                if (needAnimate) animate();
            }, 500);
        }

        function stop() {
            needAnimate = false;
        }
        return {
            start: start,
            stop: stop
        };
    }());
    wavehealth.start();
}