﻿$(function() {
    var myChartEnergy;
    var myChartQualified;
    var myChartCarbon;
    $.ajax({
        url : _web+"/energy/top/all",
        type : "GET",
        data:$("#searchTools").serialize(),
        dataType: "json",
        success : function(data) {
            if(data.all.eTotal==null||data.all.eTotal==''){
                $(".eTotal").html(0+" TCE");
            }else{
                $(".eTotal").html(data.all.eTotal+" TCE");
            }
            if(data.all.carbonTotal==null||data.all.carbonTotal==''){
                $(".carbonTotal").html(0+" T");
            }else{
                $(".carbonTotal").html(data.all.carbonTotal+" T");
            }

            if(data.all.costAll==null||data.all.costAll==''){
                $(".costAll").html(0+" 万元");
            }else{
                $(".costAll").html(data.all.costAll+" 万元");
            }
            if(data.all.yardage==null||data.all.yardage==''){
                $(".yardage").html(0+" TCE/㎡");
            }else{
                $(".yardage").html(data.all.yardage+" TCE/㎡");
            }
            $(".zyardage").html(2358+" GJ/㎡");
            if(data.all.priceArea==null||data.all.priceArea==''){
                $(".priceArea").html(0+" 万㎡");
            }else{
                $(".priceArea").html(data.all.priceArea+" 万㎡");
            }

        }

    });


//    //供热源数据去取
//    $.ajax({
//        url : _web+"/energy/top/feed",
//        type : "GET",
//        data:$("#searchTools").serialize(),
//        dataType: "json",
//        success : function(data) {
//            if(data.all.eTotal==null||data.all.eTotal==''){
//                $(".feTotal").html(0+" TCE");
//            }else{
//                $(".feTotal").html(data.all.eTotal+" TCE");
//            }
//            if(data.all.carbonTotal==null||data.all.carbonTotal==''){
//                $(".fCarbonTotal").html(0+" T");
//            }else{
//                $(".fCarbonTotal").html(data.all.carbonTotal+" T");
//            }
//            if(data.all.costAll==null||data.all.costAll==''){
//                $(".fCostAll").html(0+" 万元");
//            }else{
//                $(".fCostAll").html(data.all.costAll+" 万元");
//            }
//
//        }
//
//        });
////管网数据去取
//    $.ajax({
//        url : _web+"/energy/top/net",
//        type : "GET",
//        data:$("#searchTools").serialize(),
//        dataType: "json",
//        success : function(data) {
//            if(data.all.netLen==null||data.all.netLen==''){
//                $(".netLen").html(0+" km");
//            }else{
//                $(".netLen").html(data.all.netLen+" km");
//            }
//            if(data.all.netCost==null||data.all.netCost==''){
//                $(".netCost").html(0+" 万元");
//            }else{
//                $(".netCost").html(data.all.netCost+" 万元");
//            }
//
//        }
//
//    });
//    //换热站数据去取
//    $.ajax({
//        url : _web+"/energy/top/station",
//        type : "GET",
//        data:$("#searchTools").serialize(),
//        dataType: "json",
//        success : function(data) {
//            if(data.all.eTotal==null||data.all.eTotal==''){
//                $(".seTotal").html(0+" TCE");
//            }else{
//                $(".seTotal").html(data.all.eTotal+" TCE");
//            }
//            if(data.all.carbonTotal==null||data.all.carbonTotal==''){
//                $(".sCarbonTotal").html(0+" T");
//            }else{
//                $(".sCarbonTotal").html(data.all.carbonTotal+" T");
//            }
//            if(data.all.costAll==null||data.all.costAll==''){
//                $(".sCostAll").html(0+" 万元");
//            }else{
//                $(".sCostAll").html(data.all.costAll+" 万元");
//            }
//
//        }
//
//    });
//    //管网数据去取
//    $.ajax({
//        url : _web+"/energy/top/line",
//        type : "GET",
//        data:$("#searchTools").serialize(),
//        dataType: "json",
//        success : function(data) {
//            if(data.all.lineLen==null||data.all.lineLen==''){
//                $(".lineLen").html(0+" km");
//            }else{
//                $(".lineLen").html(data.all.lineLen+" km");
//            }
//            if(data.all.lineCost==null||data.all.lineCost==''){
//                $(".lineCost").html(0+" 万元");
//            }else{
//                $(".lineCost").html(data.all.lineCost+" 万元");
//            }
//
//        }
//
//    });
//    //民户数据去取
//    $.ajax({
//        url : _web+"/energy/top/room",
//        type : "GET",
//        data:$("#searchTools").serialize(),
//        dataType: "json",
//        success : function(data) {
//            if(data.all.rTotal==null||data.all.rTotal==''){
//                $(".rTotal").html(0+" TCE");
//            }else{
//                $(".rTotal").html(data.all.rTotal+" TCE");
//            }
//            if(data.all.hgl==null||data.all.hgl==''){
//                $(".hgl").html(0+"%");
//            }else{
//                $(".hgl").html(data.all.hgl);
//            }
//            if(data.all.roomCost==null||data.all.roomCost==''){
//                $(".roomCost").html(0+" 万元");
//            }else{
//                $(".roomCost").html(data.all.roomCost+" 万元");
//            }
//
//        }
//
//    });

    $.ajax({
        url : _web+"/static/json/h-1.json",
        type : "GET",
        dataType: "json",
        error : function(request) {
            alert("Connection error");
        },
        success : function(data) {
            chart01Fun();

            chart02Fun(data.data.branchCost.data, data.data.branchCost.yearDate, data.data.branchCost.other);

            chart03Fun(data.data.carbonEmission.data, data.data.carbonEmission.yearDate);

            chart04Fun(data.data.cost.data, data.data.cost.yearDate, data.data.cost.other);

            chart05Fun();

            chart06Fun();

            chart07Fun();

            chart08Fun();

            chart09Fun();

            chart10Fun();

            chart11Fun();
            chart12Fun();
        }
    });

});
var myChartEnergy;
var myChartQualified;
var chart01;
var chart02;
var chart03;
var chart04;
var chart05;
var chart11;
var chart12;
var chart10;
/*website*/
var websiteheight;
websiteheight = $("#website").height() - 12;
$(".index_menuBox").height(websiteheight);

function typefun(these, code) {
    $(these).addClass("on").siblings().removeClass("on");
    $("#website").attr("src", _web + "/static/img/index/websitet_cs0" + code + ".png");

    if(code == 6) {
        $(".PeopleTabdiv").show();
        $(".otherTabdiv").hide();
        myChartQualified.resize();
        myChartCarbon.resize();
        setCookie('toolOrgType', 5, 3);
        $("#toolOrgType").val(5);
    }else if(code == 5){
        setCookie('toolOrgType', 4, 3);
        $("#toolOrgType").val(4);
    }else if(code == 4){
        setCookie('toolOrgType', 3, 3);
        $("#toolOrgType").val(3);
    }else if(code == 3){
        setCookie('toolOrgType', 2, 3);
        $("#toolOrgType").val(2);
    }else if(code == 2){
        setCookie('toolOrgType', 1, 3);
        $("#toolOrgType").val(1);
    }else if(code == 1){
        setCookie('toolOrgType', '', 3);
        $("#toolOrgType").val("");
    } else {
        $(".PeopleTabdiv").hide();
        $(".otherTabdiv").show();
    }
    chart07Fun();
    chart01Fun();

};

function chart01Fun(){
    $.ajax({
        url:_web +'/component/energycomparison',
        type:'post',
        async:true,//要指定不能异步,必须等待后台服务校验完成再执行后续代null码
        data:$("#searchTools").serialize(),
        dataType:"json",
        success:function(result) {
            chart01Show(result.object.data,result.object.yearDate,result.object.other);
        }
    });
}

/*单耗趋势-折线图*/
function chart01Show(datalist, datelist, other){
    $("#chart01").empty();
    chart01 = echarts.init(document.getElementById('chart01'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '15',
            top: '10',
            right: '40',
            bottom: '10',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick:{show:false},
            splitArea: {
                show: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            axisLabel : {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            },
            data: datelist

        },
        yAxis: {
            type: 'value',
            axisTick:{show:false},
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#e8e8e8',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        },
        color:['#3B96DD', '#c2ccd3','green'],
        series: []
    }
    $.each(datalist,function(index,value){
        var typeName = value.typeName;
        var typeLine = "";
        if(index == 0){
            typeLine = "solid";

        }
        if(index == 1){
            typeLine = "dashed";
        }
        var item = {
            name:typeName,
            type:'line',
            symbol: 'circle',
            smooth: false,
            lineStyle:{normal:{type:typeLine}},
            data:value.dataList
        }

        option.series.push(item);
    });

    //配置上限值 下限值  今年平均值
    var upperList = [];
    var lowerList = [];
    var averageList = [];
    var labelStyle= {
        normal: {
            show: true,
            position:'right',
            textStyle:{color:'#666666'},
            formatter:function(params){
                if(params.dataIndex == datelist.length - 1){
                    return params.data
                }else{
                    return ""
                }

            }
        }
    }
    $.each(datelist,function(index,value){
        upperList.push(parseFloat(other.upperLimit.data[index]))
        lowerList.push(parseFloat(other.lowerLimit.data[index]))
        averageList.push(parseFloat(other.average.data[index]))
    })
    option.series.push({
        name:other.upperLimit.typeName,
        type:'line',
        symbolSize:1,
        lineStyle:{normal:{type:'dashed',color:'greenyellow'}},
        label:labelStyle,
        data:upperList
    });
    option.series.push({
        name:other.lowerLimit.typeName,
        type:'line',
        symbolSize:1,
        lineStyle:{normal:{type:'dashed',color:'red'}},
        label:labelStyle,
        data:lowerList
    });
    option.series.push({
        name:other.average.typeName,
        type:'line',
        symbolSize:1,
        lineStyle:{normal:{type:'dashed',color:'green'}},
        label:labelStyle,
        data:averageList
    });
    chart01.setOption(option);
}

/*分公司成本-柱状图*/
function chart02Fun(datalist, datelist, other) {
    $("#branchcost-year").html(other.year);
    $("#chart02").empty();
    chart02 = echarts.init(document.getElementById('chart02'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '15',
            top: '10',
            right: '45',
            bottom: '10',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            },
            data: datelist

        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            splitArea: {
                show: true
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#e8e8e8',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        },
        color: ['#3B96DD'],
        series: []
    }
    $.each(datalist, function(index, data) {
        var typeName = data.typeName;
        var item = {
            name: typeName,
            type: 'bar',
            barWidth: '20',
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            },
            data: data.dataList
        }
        option.series.push(item);
    });
    chart02.setOption(option);
}

/*分公司成本-柱状图*/

function chart02Fun(datalist, datelist, other){
    $("#branchcost-year").html(other.year);
    $("#chart02").empty();
    chart02 = echarts.init(document.getElementById('chart02'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '15',
            top: '10',
            right: '45',
            bottom: '10',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick:{show:false},
            splitLine: {
                show: false
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            axisLabel : {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            },
            data: datelist

        },
        yAxis: {
            type: 'value',
            axisTick:{show:false},
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            splitArea: {
                show: true
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#e8e8e8',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        },
        color:['#3B96DD'],
        series: []
    }
    $.each(datalist,function(index,data){
        var typeName = data.typeName;
        var item = {
            name:typeName,
            type:'bar',
            barWidth: '20',
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            },
            data:data.dataList
        }
        option.series.push(item);
    });
    chart02.setOption(option);
}

/*碳排放趋势-折线图*/
function chart03Fun(datalist,datelist){
    $("#chart03").empty();
    chart03 = echarts.init(document.getElementById('chart03'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '15',
            top: '10',
            right: '40',
            bottom: '10',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick:{show:false},
            splitLine: {
                show: false
            },
            splitArea: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            axisLabel : {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            },
            data: datelist

        },
        yAxis: {
            type: 'value',
            axisTick:{show:false},
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },

            splitLine: {
                show: false,
                lineStyle: {
                    color: '#e8e8e8',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        },
        color:['#3B96DD', '#c2ccd3'],
        series: []
    }
    $.each(datalist,function(index,data){
        var typeName = data.typeName;
        var typeLine = "";
        if(index == 0){
            typeLine = "solid";
        }
        if(index == 1){
            typeLine = "dashed";
        }
        var item = {
            name:typeName,
            type:'line',
            symbol: 'circle',
            smooth: false,
            lineStyle:{normal:{type:typeLine}},
            data:data.dataList
        }
        option.series.push(item);
    });
    chart03.setOption(option);
}

/*公司成本-折线图*/
function chart04Fun(datalist,datelist, other){
    $("#branchcost-year").html(other.year);
    $("#chart04").empty();
    chart04 = echarts.init(document.getElementById('chart04'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '15',
            top: '10',
            right: '40',
            bottom: '10',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick:{show:false},
            splitLine: {
                show: false
            },
            splitArea: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            axisLabel : {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            },
            data: datelist

        },
        yAxis: {
            type: 'value',
            axisTick:{show:false},
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#e8e8e8',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        },
        color:['#3B96DD', '#c2ccd3'],
        series: []
    }
    $.each(datalist,function(index,data){
        var typeName = data.typeName;
        var typeLine = "";
        if(index == 0){
            typeLine = "solid";
        }
        if(index == 1){
            typeLine = "dashed";
        }
        var item = {
            name:typeName,
            type:'line',
            symbol: 'circle',
            smooth: false,
            lineStyle:{normal:{type:typeLine}},
            data:data.dataList
        }
        option.series.push(item);
    });
    chart04.setOption(option);
}


/*成本明细-饼图*/
function chart05Fun(){
    $.ajax({
        url:_web +'/component/costDetail',
        type:'post',
        async:true,//要指定不能异步,必须等待后台服务校验完成再执行后续代null码
        data:$("#searchTools").serialize(),
        dataType:"json",
        success:function(result) {
            var energy = result.object.ccs;
            var device = result.object.device;
            var labor  = result.object.labor;
            var manage = result.object.manage ;
            var other = result.object.other ;
            var total = result.object.total_sum;
            var tb_flag = result.object.flag_total;
            var total_tb = result.object.tb_total;
            var tbl ="";
            if(tb_flag == 'true'){
                tbl ="("+total_tb+"↑)";

            }
            if(tb_flag == 'false'){
                tbl= "("+total_tb+"↓)";
            }
            if(tb_flag == 'null'){
                tbl = "("+total_tb+"→)";
            }
            /*能源费*/
            $("#energy_cost").html(energy);
            var tb_flag = result.object.flag_ccs;
            var total_tb = result.object.tb_css;
            if(tb_flag == 'true'){
                $("#energy_tb").html("("+total_tb+"↑)");
                $("#energy_tb").attr('class',' cost-list-remind');

            }
            if(tb_flag == 'false'){
                $("#energy_tb").html("("+total_tb+"↓)");
                $("#energy_tb").attr('class',' cost-list-relax');
            }
            if(tb_flag == 'null'){
                $("#energy_tb").html("("+total_tb+"→)");
            }
            /*设备费*/
            $("#device_cost").html(device);
            var tb_flag = result.object.flag_device;
            var total_tb = result.object.tb_device;
            if(tb_flag == 'true'){
                $("#device_tb").html("("+total_tb+"↑)");
                $("#device_tb").attr('class',' cost-list-remind');
            }
            if(tb_flag == 'false'){
                $("#device_tb").html("("+total_tb+"↓)");
                $("#device_tb").attr('class',' cost-list-relax');
            }
            if(tb_flag == 'null'){
                $("#device_tb").html("("+total_tb+"→)");
            }
            /*人工费*/
            $("#labor_cost").html(labor);
            var tb_flag = result.object.flag_labor;
            var total_tb = result.object.tb_labor;
            if(tb_flag == 'true'){
                $("#labor_tb").html("("+total_tb+"↑)");
                $("#labor_tb").attr('class',' cost-list-remind');
            }
            if(tb_flag == 'false'){
                $("#labor_tb").html("("+total_tb+"↓)");
                $("#labor_tb").attr('class',' cost-list-relax');
            }
            if(tb_flag == 'null'){
                $("#labor_tb").html("("+total_tb+"→)");
            }
            /*管理费*/
            $("#manage_cost").html(manage);
            var tb_flag = result.object.flag_manage;
            var total_tb = result.object.tb_manage;
            if(tb_flag == 'true'){
                $("#manage_tb").html("("+total_tb+"↑)");
                $("#manage_tb").attr('class',' cost-list-remind');
            }
            if(tb_flag == 'false'){
                $("#manage_tb").html("("+total_tb+"↓)");
                $("#manage_tb").attr('class',' cost-list-relax');
            }
            if(tb_flag == 'null'){
                $("#manage_tb").html("("+total_tb+"→)");
            }
            /*其他费*/
            $("#other_cost").html(other);
            var tb_flag = result.object.flag_other;
            var total_tb = result.object.tb_other;
            if(tb_flag == 'true'){
                $("#other_tb").html("("+total_tb+"↑)");
                $("#other_tb").attr('class',' cost-list-remind');
            }
            if(tb_flag == 'false'){
                $("#other_tb").html("("+total_tb+"↓)");
                $("#other_tb").attr('class',' cost-list-relax');
            }
            if(tb_flag == 'null'){
                $("#other_tb").html("("+total_tb+"→)");
            }
            initChart05(energy,device,manage,labor,other,total,tbl);
        }
    });

}
/*成本明细-饼图初始化*/
function initChart05(energy,device,manage,labor,other,total,tbl){
    $("#chart05").empty();
    chart05 = echarts.init(document.getElementById('chart05'));
    var option = {
        title: {
            text: "897.2",
            subtext: '成本总量（万元）\n（1.6%↓）', //↑↓
            x: 'center',
            y: 'center',
            top: '40%',
            itemGap: 0,
            textStyle: {
                color: '#8394aa',
                fontFamily: '微软雅黑',
                fontSize: 44,
                fontWeight: 'normal'
            },
            subtextStyle: {
                color: '#2eada8',
                fontFamily: '微软雅黑',
                fontSize: 12,
                fontWeight: 'normal'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            show: true
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: []
        },
        toolbox: {
            show: false,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: false,
        color: ['#32bbb6', '#8394aa', '#b7c1cf', '#df5f4a', '#3b96db'],
        series: [{
            type: 'pie',
            radius: ['0%', '64%'],
            silent: true,
            itemStyle: {
                normal: {
                    color: '#ffffff',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: [{
                value: 1,
                name: '圈',
                selected: false,
                hoverAnimation: false
            }]
        },
            {
                name: '成本明细',
                type: 'pie',
                radius: ['70%', '80%'],

                // for funnel
                x: '60%',
                width: '35%',
                funnelAlign: 'left',
                itemStyle: {
                    normal: {
                        borderColor: '#f0f1f2',
                        borderWidth: '2',
                        label: {
                            show: false
                        }
                    }
                },


                data:[
                    {value:labor, name:'人工费'},
                    {value:manage, name:'管理费'},
                    {value:other, name:'其他费'},
                    {value:energy, name:'能源费'},
                    {value:device, name:'设备费'}
                ]
            }
        ]
    };
    chart05.setOption(option);
}

function chart06Fun(){
    //占比-赋值即可
    var level_ = 0.75;
    //$("#level_num").text((level_ * 100) + '%');
    var wave = (function () {
        var ctx;
        var waveImage;
        var canvasWidth;
        var canvasHeight;
        var needAnimate = false;
        function init (callback) {
            var wave = document.getElementById('chart06');
            var canvas = document.createElement('canvas');
            if (!canvas.getContext) return;
            ctx = canvas.getContext('2d');
            canvasWidth = wave.offsetWidth;
            canvasHeight = wave.offsetHeight;
            canvas.setAttribute('width', canvasWidth);
            canvas.setAttribute('height', canvasHeight);
            wave.appendChild(canvas);
            waveImage = new Image();
            waveImage.onload = function () {
                waveImage.onload = null;
                callback();
            }
            waveImage.src = _web+'/static/img/index/wave.png';
        }

        function animate () {
            var waveX = 0;
            var waveY = 0;
            var waveX_min = -220;
            var waveY_max = canvasHeight * level_;
            var requestAnimationFrame =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { window.setTimeout(callback, 1000 / 60); };
            function loop () {
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);
                if (!needAnimate) return;
                if (waveY < waveY_max) waveY += 1.5;
                if (waveX < waveX_min) waveX = 0; else waveX -= 3;

                ctx.globalCompositeOperation = 'source-over';
                ctx.beginPath();
                ctx.arc(canvasWidth/2, canvasHeight/2, canvasHeight/2, 0, Math.PI*2, true);
                ctx.closePath();
                ctx.fill();

                ctx.globalCompositeOperation = 'source-in';
                ctx.drawImage(waveImage, waveX, canvasHeight - waveY);

                requestAnimationFrame(loop);
            }
            loop();
        }

        function start () {
            if (!ctx) return init(start);
            needAnimate = true;
            setTimeout(function () {
                if (needAnimate) animate();
            }, 500);
        }
        function stop () {
            needAnimate = false;
        }
        return {start: start, stop: stop};
    }());
    wave.start();
}

/*能耗明细*/
function chart07Fun(){
    $.ajax({
        url:_web +'/component/energyDetail',
        type:'post',
        async:true,//要指定不能异步,必须等待后台服务校验完成再执行后续代null码
        data:$("#searchTools").serialize(),
        dataType:"json",
        success:function(result) {
            if (result.flag) {
                /*仪表盘*/
                var kedu1 = result.object.kedu1; //蓝色的刻度
                var pcd =result.object.pcd; //偏差度
                var pcdz = result.object.pcdz; //偏差值
                var currentPlan =result.object.currentPlan;
                var bm_total =result.object.bm_total;
                initChart(kedu1,currentPlan,bm_total);
                pcd =  toDecimal(pcd);
                pcdz =  toDecimal(pcdz);
                $("#pc_plan_percent").html("偏差度("+pcd+"%)");
                $("#pc_plan").html(pcdz);
                /*总标煤展示*/
                $("#bm_total").html(result.object.bm_total);
                var tb_flag = result.object.total_flag;
                var total_tb = result.object.total_tb;
                if(tb_flag == true){
                    $("#total_tb").html("("+total_tb+"↑)");
                    $("#total_tb").attr("class","energyBoxLegendListPara_cb");
                }
                if(tb_flag == false){
                    $("#total_tb").html("("+total_tb+"↓)");
                    $("#total_tb").attr("class","energyBoxLegendListPara_cd");
                }
                if(tb_flag == null){
                    $("#total_tb").html("("+total_tb+"→)");
                }
                /*水*/
                $("#whater").html(result.object.whater+"T");
                var tb_flag = result.object.whater_flag;
                var total_tb = result.object.whater_tb;
                if(tb_flag == true){
                    $("#whater_tb").html("("+total_tb+"↑)");
                    $("#whater_tb").attr("class","energyBoxLegendListPara_cb");
                    $("#whater").attr("class","energyBoxLegendListPara_cb");
                    $("#w1").addClass("energyBoxLegendListIcon01_cb");
                }
                if(tb_flag == false){
                    $("#whater_tb").html("("+total_tb+"↓)");
                    $("#whater_tb").attr("class","energyBoxLegendListPara_cd");
                    $("#whater").attr("class","energyBoxLegendListPara_cd");
                }
                if(tb_flag == null){
                    $("#whater_tb").html("("+total_tb+"→)");
                }
                /*电*/
                $("#electric").html(result.object.electric+"Kw/h");
                var tb_flag = result.object.electric_flag;
                var total_tb = result.object.electric_tb;
                if(tb_flag == true){
                    $("#electric_tb").html("("+total_tb+"↑)");
                    $("#electric_tb").attr("class","energyBoxLegendListPara_cb");
                    $("#electric").attr("class","energyBoxLegendListPara_cb");
                    $("#e1").addClass("energyBoxLegendListIcon02_cb");
                }
                if(tb_flag == false){
                    $("#electric_tb").html("("+total_tb+"↓)");
                    $("#electric_tb").attr("class","energyBoxLegendListPara_cd");
                    $("#electric").attr("class","energyBoxLegendListPara_cd");
                }
                if(tb_flag == null){
                    $("#electric_tb").html("("+total_tb+"→)");
                }
                /*气*/
                $("#gas").html(result.object.gas+"M3");
                var tb_flag = result.object.gas_flag;
                var total_tb = result.object.gas_tb;
                if(tb_flag == true){
                    $("#gas_tb").html("("+total_tb+"↑)");
                    $("#gas_tb").attr("class","energyBoxLegendListPara_cb");
                    $("#gas").attr("class","energyBoxLegendListPara_cb");
                    $("#g1").addClass("energyBoxLegendListIcon03_cb");
                }
                if(tb_flag == false){
                    $("#gas_tb").html("("+total_tb+"↓)");
                    $("#gas_tb").attr("class","energyBoxLegendListPara_cd");
                    $("#gas").attr("class","energyBoxLegendListPara_cd");
                }
                if(tb_flag == null){
                    $("#gas_tb").html("("+total_tb+"→)");
                }
                /*热*/
                $("#heat").html(result.object.heat+"GJ");
                var tb_flag = result.object.heat_flag;
                var total_tb = result.object.heat_tb;
                if(tb_flag == true){
                    $("#heat_tb").html("("+total_tb+"↑)");
                    $("#heat_tb").attr("class","energyBoxLegendListPara_cb");
                    $("#heat").attr("class","energyBoxLegendListPara_cb");
                    $("#h1").addClass("energyBoxLegendListIcon05_cb");
                }
                if(tb_flag == false){
                    $("#heat_tb").html("("+total_tb+"↓)");
                    $("#heat_tb").attr("class","energyBoxLegendListPara_cd");
                    $("#heat").attr("class","energyBoxLegendListPara_cd");
                }
                if(tb_flag == null){
                    $("#heat_tb").html("("+total_tb+"→)");
                }
                /*煤*/
                $("#coal").html(result.object.coal+"T");
                var tb_flag = result.object.coal_flag;
                var total_tb = result.object.coal_tb;
                if(tb_flag == true){
                    $("#coal_tb").html("("+total_tb+"↑)");
                    $("#coal_tb").attr("class","energyBoxLegendListPara_cb");
                    $("#coal").attr("class","energyBoxLegendListPara_cb");
                    $("#c1").addClass("energyBoxLegendListIcon04_cb");
                }
                if(tb_flag == false){
                    $("#coal_tb").html("("+total_tb+"↓)");
                    $("#coal_tb").attr("class","energyBoxLegendListPara_cd");
                    $("#coal").attr("class","energyBoxLegendListPara_cd");
                }
                if(tb_flag == null){
                    $("#coal_tb").html("("+total_tb+"→)");
                }
            } else {
                alert("系统错误！");
            }
        },
        error:function(e){
            alert("访问失败");
        }
    });

}

/*能耗明细图表初始化*/
function initChart(kedu1,mx,bm_total){
    myChartEnergy = echarts.init(document.getElementById('EnergyChart'));
    var max = returnFloat(mx/0.75)
    if(max == undefined ){
        max = 1;
    }
    var option1 = {
        tooltip : {
            formatter: "{a} <br/>{c} {b}"
        },
        series: [{
            name: '能耗',
            type: 'gauge',
            z: 3,
            min: 0,
            max: max,
            startAngle: 180,
            endAngle: 0,
            splitNumber: -1,
            radius: '100%',
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [0.5, '#3b96db'],
                        [1, '#df5f4a']
                    ],
                    width: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#d44243'
                }
            },
            detail: {
                show: true,
                formatter: '{value}',
                textStyle: {
                    fontSize: 15
                }
            },
            data: [{
                value: "100"
            }]
        }, {

            type: 'gauge',
            z: 4,
            min: 0,
            max: max,
            startAngle: 180,
            endAngle: 0,
            radius: '88%',
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#ccc']
                    ],
                    width: 2
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0,
                    color: '#fff'
                }
            },
            axisTick: {
                lineStyle: {
                    color: "#ccc",
                    width: 1
                },
                length: 2,
                splitNumber: 1
            },
            splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                    color: '#ccc',
                    width: 1
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ccc'
                }

            },

            data: [{
                value: "0"
            }]
        }

        ]
    }
   var  colorvalue = [[kedu1, '#3b96db'],[0.75, '#32bbb6'],[1, '#df5f4a']];
    option1.series[0].axisLine.lineStyle.color=colorvalue;
    option1.series[0].data[0].value= bm_total;//这个值设大点
    myChartEnergy.setOption(option1);
}

/**
 * 保留小数位
 * @param x
 * @returns {Number}
 */
function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x*100)/100;
    return f;
}

/**
 * 返回float
 * @param value
 * @returns {number}
 */
function returnFloat(value){
    var value=Math.round(parseFloat(value)*100)/100;
    var xsd=value.toString().split(".");
    if(xsd.length>1){
            value=xsd[0];
        return value;
    }
}


/*居民 合格率趋势*/
function chart08Fun() {
    $.ajax({
        url: _web + '/component/roomtemperature',
        type: 'post',
        async: true,//要指定不能异步,必须等待后台服务校验完成再执行后续代null码
        data:{min:18,max:22},
        dataType: "json",
        success: function (result) {
            console.info(result);
            if(result.flag == true){
                if(result.object.bar != null)
                    chart08Bar(result.object.bar);
                chart08Sd(result.object.datas,result.object.times,result.object.low,result.object.range,result.object.high)
            }
        }
    });




}

/*居民 合格率趋势图 bar*/
function chart08Bar(data){
    var databar = [];
    data.forEach(function(value, index, array) {
        var item ={
            value: value.value,
            color: '#32bbb6',
            text: value.text
        };
        databar.push(item);
    });
    var barchartdiv = $("#barchart");
    var barcharthtml = "";
    for(var i = 0; i < databar.length; i++) {
        barcharthtml += "<div style='width:" + databar[i].value + "%;'><p style='color:" + databar[i].color + "'>" + databar[i].value + "%</p><div><span style='background:" + databar[i].color + "'><span></div><p>" + databar[i].text + "</p></div>";
    }
    barchartdiv.html(barcharthtml);
}

/*居民 合格率趋势图 散点图*/
function chart08Sd(data,times){
    var obj = new Array();
    $.each(data,function(index,value){
        var temp = [];
        temp.push(value.times);
        temp.push(value.temps);
        temp.push(value.station);
        temp.push(value.village);
        temp.push(value.roomcode);
        obj.push(temp);
    });

    /*居民 合格率趋势*/
    myChartQualified = echarts.init(document.getElementById('QualifiedChart'));

    // See https://github.com/ecomfe/echarts-stat
    var myRegression = ecStat.regression('linear', obj);
    myRegression.points.sort(function(a, b) {
        return a[0] - b[0];
    });
    optionQualified = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            left: '15',
            top: '10',
            right: '30',
            bottom: '10',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            splitArea: {
                show: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            },
            data:times
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#e8e8e8',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        },
        series: [{
                name:"最大值",
                type: 'scatter',
                data:[],
                makeLine:{
                    data:{value:18}
                }
             },{
                name: '室温',
                type: 'scatter',
                markLine: {
                    lineStyle: {
                        normal: {
                            color:'red'
                        }
                    },
                    data: [{
                        type: 'average',
                        name: '平均值'
                    }]
                },
                itemStyle: {
                    normal: {
                        color: '#7fb7e1'
                    }
                },
                data: obj
        }]
    };
    myChartQualified.setOption(optionQualified);
}
/*居民室温合格率--chartCarbon*/
function chart09Fun(){
     myChartCarbon = echarts.init(document.getElementById('chartCarbon'));
    optionCarbon = {
        title: {
            text: "67.2",
            subtext: '室温合格率（%）\n（1.6%↓）',  //↑↓
            x: 'center',
            y: 'center',
            itemGap: -5,
            textStyle : {
                color : '#348bce',
                fontFamily : '微软雅黑',
                fontSize : 44,
                fontWeight : 'normal'
            },
            subtextStyle : {
                color : '#d4513b',
                fontFamily : '微软雅黑',
                fontSize : 12,
                fontWeight : 'normal'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        series: [
            {
                type:'pie',
                radius : ['0', '82%'],
                silent:true,
                itemStyle : {
                    normal : {
                        color:'#ffffff',
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:1, name:'背景', selected:false,hoverAnimation:false}
                ]
            },
            {
                name:'合格率',
                type:'pie',
                radius : ['60%', '80%'],
                itemStyle : {
                    normal : {
                        color:'#dce0e5',
                        label : {show:false}
                    }
                },
                data:[
                    {value:1, name:'圈', selected:false,hoverAnimation:false}
                ]
            },
            {
                name:'合格率',
                type:'pie',
                radius : ['60%', '80%'],
                funnelAlign: 'left',
                itemStyle : {
                    normal : {
                        label : {show:false}
                    }
                },
                data: [{
                    value: 206.4,
                    name: '合格率',
                    itemStyle: {
                        normal: {
                            color: '#3b96db'
                        }
                    }
                }, {
                    value: 800,
                    name: '占位',
                    hoverAnimation:false,
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal : {
                            color: 'rgba(0,0,0,0)',
                            label: {show:false},
                            labelLine: {show:false}
                        },
                        emphasis : {
                            color: 'rgba(0,0,0,0)'
                        }
                    }
                }]
            }
        ]
    };
    myChartCarbon.setOption(optionCarbon);
}

function chart10Fun() {
    $.ajax({
        url:_web +'/component/weather',
        type:'post',
        async:true,//要指定不能异步,必须等待后台服务校验完成再执行后续代null码
//        data:$("#searchTools").serialize(),
        dataType:"json",
        success:function(result) {
            $(".chart-content.clearfix").empty();
            if(result.flag == true){
                if(result.object.aqi != null && result.object.currentWeather != null){
                    var dates = new  Pdate();
                    var date = dates.format(result.object.aqi.reportDate);
                    var s = dates.showCal(result.object.aqi.reportDate);
                    var html = '<div class="cb-header clearfix" id="dates">'+
                        '<span class="cb-title" >'+date+' '+result.object.currentWeather.weekDay+' 农历'+s+'</span>'+
                        '<div class="cb-title-right ">实时空气质量：<span >'+result.object.aqi.aqi+''+result.object.aqi.aqiLevel+'</span></div></div>'
                    $(".chart-content.clearfix").append(html) ;
                    var html2 ="<ul>";
                    html2 +=" <li> <div class='wather weather01'></div>"+
                                "<div class='detail clearfix'> <div>22</div>"+
                                "<div> <p>℃</p> <p>"+result.object.currentWeather.weatherCurrent+"（实时）</p></div></div>"+
                                "<h3>"+result.object.currentWeather.tempLow+"~"+result.object.currentWeather.tempHigh+"℃<h5>"+result.object.currentWeather.wind+"</h5>"+
                            " </li>"
                    if(result.object.weekForcast.length>0){
                          result.object.weekForcast.forEach(function(value, index, array) {
                              html2 +=" <li>"+
                                  "<h1>"+value.week+"</h1>"+
                                  "<h2>"+ dates.format(value.reportDate)+"</h2>"+
                                  "<div class='wather weather01'></div>"+
                                  "<h3>"+value.tempLow+"~"+value.tempHigh+"℃</h3>"+
                                  "<h4>"+value.weather+"</h4>"+
                                  "<h5>"+value.wind+""+value.winp+"</h5>"+
                                  "</li>";
                          });
                    }
                    html2 +="</ul>";
                    $(".chart-content.clearfix").append(html2);
                }
            }
            initchart10(result.object.weathers.hour,result.object.weathers.temp);
        }

    });

}



/*天气预报图表*/
function initchart10(hours,temps){
    $("#chart10").empty();
    chart10 = echarts.init(document.getElementById('chart10'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '15',
            top: '10',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false
            },
            splitArea: {
                show: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            data: hours

        },

        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            }
        },
        series: [{
            name: "温度",
            type: 'line',
            symbol: 'circle',
            smooth: false,
            hoverAnimation: false,
            symbolSize: [8, 8],
            lineStyle: {
                normal: {
                    color: '#277aba'
                }
            },
            itemStyle: {
                normal: {
                    color: '#277aba',
                    borderWidth: 1,
                    borderColor: "#fff"
                }
            },
            data:temps
        }]
    }

    chart10.setOption(option);
}



function chart11Fun() {
    $("#chart11").empty();
    chart11 = echarts.init(document.getElementById('chart11'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '15',
            top: '10',
            right: '20',
            bottom: '10',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月']

        },
        yAxis: [{
            name: '条',
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            splitArea: {
                show: true
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#e8e8e8',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        }, {
            type: 'value',
            name: '线',
            position: 'right',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#9a9a9b'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#e8e8e8',
                    type: 'dashed'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        }],
        color: ['#3B96DD'],

        series: [{
            name: '条',
            type: 'bar',
            barWidth: '20',
            data: [10, 20, 10, 30, 40]
        }, {
            name: '线',
            yAxisIndex: 1,
            type: 'line',
            label: {
                normal: {
                    show: false

                }
            },
            smooth: true,
            symbol: 'circle',
            symbolSize: 9,
            showSymbol: false,
            lineStyle: {
                normal: {
                    shadowOffsetY: 2,
                    shadowColor: '#f0f1f2'
                }
            },
            data: [1, 13, 37, 35, 15]
        }]
    }

    chart11.setOption(option);
}

function chart12Fun() {

    //value1 严重 value2中度 value3轻度
    var data = [{
        value1: 0,
        value2: 1,
        value3: 2
    },{
        value1: 0,
        value2: 1,
        value3: 2
    }]; //参数数量有几个写几个 自动识别前台样式 1工况运行 2经济运行 3 服务情况 4作业管理
    var html = "";
    var titledata = ['工况运行', '经济运行', '服务情况', '作业管理'];

    html += "<div>";
    for(var i = 0; i < titledata.length; i++) {
        var classname = "runa";
        if(i == data.length - 1) {
            classname = "runb";
        } else if(i >= data.length) {
            classname = "runc";
        }
        html += "<div class='" + classname + "'><h1>" + titledata[i] + "</h1>" +
            "<div><div><div></div></div></div></div>";
    }
    html += "</div>";

    html += "<div>";

    for(var i = 0; i < titledata.length; i++) {
        var v1 = "--";
        var v2 = "--";
        var v3 = "--";
        var vc1 = "";
        var vc3 = "";
        var vc2 = "";
        if(i < data.length) {
            v1 = data[i].value1;
            v2 = data[i].value2;
            v3 = data[i].value3;
            if(parseInt(v1) > 0) {
                vc1 = "c";
            }
            if(parseInt(v2) > 0) {
                vc2 = "c";
            }
            if(parseInt(v3) > 0) {
                vc3 = "c";
            }
        }
        var classname = "runa";
        if(i == data.length - 1) {
            classname = "runb";
        } else if(i >= data.length) {
            classname = "runc";
        }
        html += "<div class='" + classname + "'><div class='jiao'></div><ul>";
        html += "<li>严重<span class='" + vc1 + "'>" + v1 + "</span></li>";
        html += "<li>中度<span class='" + vc2 + "'>" + v2 + "</span></li>";
        html += "<li>轻度<span class='" + vc3 + "'>" + v3 + "</span></li>";
        html += "</ul></div>";
    }
    html += "</div>";

    $("#chart12").html(html);
}

function cutNh(){
    if($("#bg-left").hasClass("button-group-act")) return;
    $("#bg-right").removeClass("button-group-act");
    $("#bg-left").addClass("button-group-act");

    $("#qs-title").hide();
    $("#nh-title").show();

    $("#chart04").hide();
    $("#chart02").show();
    chart02.resize();

}

function cutQs(){
    if($("#bg-right").hasClass("button-group-act")) return;
    $("#bg-left").removeClass("button-group-act");
    $("#bg-right").addClass("button-group-act");

    $("#nh-title").hide();
    $("#qs-title").show();

    $("#chart02").hide();
    $("#chart04").show();
    chart04.resize();
}

function selectYear(changeYear){
    $.ajax({
        url : "json/h-2.json",
        data: parseInt($("#branchcost-year").html()) + changeYear,
        type : "GET",
        dataType: "json",
        error : function(request) {
            alert("Connection error");
        },
        success : function(data) {
            chart02Fun(data.data.branchCost.data, data.data.branchCost.yearDate, data.data.branchCost.other);

            chart04Fun(data.data.branchCost.data, data.data.branchCost.yearDate, data.data.cost.other);
        }
    });
}
