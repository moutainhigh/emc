/*function loadDataFun() {
 loadFun();
 loadassessment();
 }

 function loadassessment(){
 var data = $("#searchTools").serialize()+"&type="+$("#type").val();
 $.ajax({
 url: _web + '/third/energy/assessment',
 type: 'post',
 async: true,//要指定不能异步,必须等待后台服务校验完成再执行后续代null码
 data:data,
 dataType: "json",
 success: function (result) {
 console.info(result);
 initassessment(result);
 }
 });

 }

 *//*三级页面-能耗分析-站的各种能源类型排名*//*
 function initassessment(result){
 if(result.flag){
 echartsSelf({
 id: 'linechart_as',
 echartsConfig: {
 xAxisBoundaryGap: true,
 dataZoom: true,
 dataZoomstartValue: 1,
 dataZoomendValue: 5,
 xData: result.object.heatnames,
 series: [{
 type: 'bar',
 dataList:  result.object.heatnum

 }]
 }
 });

 echartsSelf({
 id: 'piechart_as',
 echartsConfig: {
 xAxisBoundaryGap: true,
 dataZoom: true,
 dataZoomstartValue: 1,
 dataZoomendValue: 5,
 xData: result.object.stationnames,
 series: [{
 type: 'bar',
 dataList: result.object.stationnums

 }]
 }
 });
 }
 }

 *//*三级页面-能耗分析-源、网、站、线、户的各种能源类型能耗*//*
 function loadFun(){
 var data = $("#searchTools").serialize()+"&type="+$("#type").val();
 $.ajax({
 url: _web + '/third/energy/energyDetail',
 type: 'post',
 async: true,//要指定不能异步,必须等待后台服务校验完成再执行后续代null码
 data:data,
 dataType: "json",
 success: function (result) {
 initchart(result);
 }
 });
 }

 function initchart(result){

 if(result.flag){
 var datelist = result.object.date;
 $.each(result.object.data,function(index,value){
 var options = {
 id: value.type,
 echartsConfig: {
 xData: datelist,
 series: [{
 type: 'line',
 dataList: value.currentYear,
 typeLine: 'solid'
 },
 {
 type: 'line',
 dataList:value.lastyear,
 typeLine: 'dashed'
 }
 ]
 }
 };
 echartsSelf(options);
 })
 }


 };*/
$(function() {
    loadDHdetail();
    loadOrgDH();
    loadFeedDH(1);
    loadStationDH(1);
    loadTable();
});
//加载水单耗明细
function loadDHdetail(){
    var id = $("#id").val();
    $.ajax({
        url: _web + "/third/analysis/fgs/detail/"+id,
        type: "GET",
        data: $("#searchTools").serialize(),
        dataType: "json",
        success: function (data) {

            $(".groupTotal").text(data.reMap.ZDH);
            if(data.reMap.TQ>0){
                var TQ = data.reMap.TQ+"<span class='arrow'>↑</span>";
                $(".groupchangeRate").html(TQ);
            }else if(data.reMap.TQ==0){
                var TQ = data.reMap.TQ+"<span class='arrow'>→</span>";
                $(".groupchangeRate").html(TQ)
            }else if(data.reMap.TQ<0){
                var TQ = data.reMap.TQ+"<span class='arrow'>↓</span>";
                $(".groupchangeRate").html(TQ)
            }
            echartsSelf({
                id: "groupEnergyChart",
                echartsConfig: {
                    xData: data.xaxis,
                    series: [{
                        type: 'line',
                        dataList: data.newDate,
                        typeLine: 'solid'

                    },
                        {
                            type: 'line',
                            dataList: data.oldDate,
                            typeLine: 'dashed'
                        }
                    ]
                }
            });
        }
    });
}
/*三级页面-用能单位-表单数据查询*/
function loadTable(){
    createtable();
    var data = $("#searchTools").serialize()+"&id="+$("#id").val();
    $.ajax({
        url: _web + '/third/analysis/fgs/unitTableList',
        type: 'post',
        async: true,//要指定不能异步,必须等待后台服务校验完成再执行后续代null码
        data: data,
        dataType: "json",
        success: function (result) {

            thirdTable(result.object);
        }
    });

}
//加载分公司热源的单耗排名
function loadFeedDH(type) {
    var id = $("#id").val();
    $.ajax({
        url: _web + "/third/analysis/fgs/feed-dh/"+type+"/"+id,
        type: "GET",
        data: $("#searchTools").serialize(),
        dataType: "json",
        success: function (data) {
            console.log(data);
            feedDh(data);
        }
    });
}

//加载分公司换热站的单耗排名
function loadStationDH(type) {
    var id = $("#id").val();
    $.ajax({
        url: _web + "/third/analysis/fgs/station-dh/"+type+"/"+id,
        type: "GET",
        data: $("#searchTools").serialize(),
        dataType: "json",
        success: function (data) {
            console.log(data);
            stationDh(data);
        }
    });
}

//加载源、网、站、线、户  的水单耗

function loadOrgDH() {

    var id = $("#id").val();
    $.ajax({
        url: _web + "/third/analysis/fgs/org/"+id,
        type: "GET",
        data: $("#searchTools").serialize(),
        dataType: "json",
        success: function (data) {
            console.log(data);
            getWater(data);
            getElectric(data);
            getGas(data);
            getHot(data);
            getCoal(data);
        }
    });

    function getWater(data){
        $(".waterDw").html("T/m²");
        $(".waterTotal").html(data.TotalTq.STotal);

        if(data.TotalTq.STB < 0){
            $(".waterTotal").closest(".energy-head").addClass("energy-snh");
        }else{
            $(".waterTotal").next("span").addClass("energy-remind");
            $(".waterTotal").addClass("energy-remind");
            $(".waterTotal").closest(".energy-head").addClass("energy-snh-remind");
        }
        if(data.TotalTq.STB < 0){
            $(".waterchangeRate").css('color','#3db1b0');
            $(".waterchangeRate").html("("+data.TotalTq.STB + "↓)");
        }else if(data.TotalTq.STB > 0){
            $(".waterchangeRate").addClass("energy-remind");
            $(".waterchangeRate").html("("+data.TotalTq.STB + "↑)");
        }else{
            $(".waterchangeRate").css('color','#999');
            $(".waterchangeRate").html("("+data.TotalTq.STB + "→)");
        }
        echartsSelf({
            id: "waterEnergyChart",
            echartsConfig: {
                xData: data.resultData.dateLine,
                series: [{
                    type: 'line',
                    dataList: data.resultData.waterBq,
                    typeLine: 'solid'
                },
                    {
                        type: 'line',
                        dataList: data.resultData.waterTq,
                        typeLine: 'dashed'
                    }
                ]
            }
        });
    }
    function getElectric(data){
        $(".electricTotal").html(data.TotalTq.DTotal);
        $(".electricDw").html("kW·h/m²");

        if(data.TotalTq.STB < 0){
            $(".electricTotal").closest(".energy-head").addClass("energy-snh");
        }else{
            $(".electricTotal").next("span").addClass("energy-remind");
            $(".electricTotal").addClass("energy-remind");
            $(".electricTotal").closest(".energy-head").addClass("energy-snh-remind");
        }
        if(data.TotalTq.STB < 0){
            $(".elechangeRate").css('color','#3db1b0');
            $(".elechangeRate").html("("+data.TotalTq.STB + "↓)");
        }else if(data.TotalTq.STB > 0){
            $(".elechangeRate").addClass("energy-remind");
            $(".elechangeRate").html("("+data.TotalTq.STB + "↑)");
        }else{
            $(".elechangeRate").css('color','#999');
            $(".elechangeRate").html("("+data.TotalTq.STB + "→)");
        }
        echartsSelf({
            id: "electricEnergyChart",
            echartsConfig: {
                xData: data.resultData.dateLine,
                series: [{
                    type: 'line',
                    dataList: data.resultData.electricBq,
                    typeLine: 'solid'

                },
                    {
                        type: 'line',
                        dataList: data.resultData.electricTq,
                        typeLine: 'dashed'
                    }
                ]
            }
        });
    }
    function getGas(data){
        $(".gasTotal").html(data.TotalTq.QTotal);
        $(".gasDw").html("m³/m²");

        if(data.TotalTq.STB < 0){
            $(".gasTotal").closest(".energy-head").addClass("energy-snh");
        }else{
            $(".gasTotal").next("span").addClass("energy-remind");
            $(".gasTotal").addClass("energy-remind");
            $(".gasTotal").closest(".energy-head").addClass("energy-snh-remind");
        }
        if(data.TotalTq.STB < 0){
            $(".gaschangeRate").css('color','#3db1b0');
            $(".gaschangeRate").html("("+data.TotalTq.STB + "↓)");
        }else if(data.TotalTq.STB > 0){
            $(".gaschangeRate").addClass("energy-remind");
            $(".gaschangeRate").html("("+data.TotalTq.STB + "↑)");
        }else{
            $(".gaschangeRate").css('color','#999');
            $(".gaschangeRate").html("("+data.TotalTq.STB + "→)");
        }
        echartsSelf({
            id: "gasEnergyChart",
            echartsConfig: {
                xData: data.resultData.dateLine,
                series: [{
                    type: 'line',
                    dataList: data.resultData.gasBq,
                    typeLine: 'solid'

                },
                    {
                        type: 'line',
                        dataList: data.resultData.gasTq,
                        typeLine: 'dashed'
                    }
                ]
            }
        });
    }
    function getHot(data){
        $(".hotTotal").html(data.TotalTq.RTotal);
        $(".hotDw").html("GJ/m²");

        if(data.TotalTq.STB < 0){
            $(".hotTotal").closest(".energy-head").addClass("energy-snh");
        }else{
            $(".hotTotal").next("span").addClass("energy-remind");
            $(".hotTotal").addClass("energy-remind");
            $(".hotTotal").closest(".energy-head").addClass("energy-snh-remind");
        }
        if(data.TotalTq.STB < 0){
            $(".hotchangeRate").css('color','#3db1b0');
            $(".hotchangeRate").html("("+data.TotalTq.STB + "↓)");
        }else if(data.TotalTq.STB > 0){
            $(".hotchangeRate").addClass("energy-remind");
            $(".hotchangeRate").html("("+data.TotalTq.STB + "↑)");
        }else{
            $(".hotchangeRate").css('color','#999');
            $(".hotchangeRate").html("("+data.TotalTq.STB + "→)");
        }
        echartsSelf({
            id: "hotEnergyChart",
            echartsConfig: {
                xData: data.resultData.dateLine,
                series: [{
                    type: 'line',
                    dataList: data.resultData.hotBq,
                    typeLine: 'solid'

                },
                    {
                        type: 'line',
                        dataList: data.resultData.hotTq,
                        typeLine: 'dashed'
                    }
                ]
            }
        });
    }
    function getCoal(data){
        $(".coalTotal").html(data.TotalTq.MTotal);
        $(".coalDw").html("T/m²");

        if(data.TotalTq.STB < 0){
            $(".coalTotal").closest(".energy-head").addClass("energy-snh");
        }else{
            $(".coalTotal").next("span").addClass("energy-remind");
            $(".coalTotal").addClass("energy-remind");
            $(".coalTotal").closest(".energy-head").addClass("energy-snh-remind");
        }
        if(data.TotalTq.STB < 0){
            $(".coalchangeRate").css('color','#3db1b0');
            $(".coalchangeRate").html("("+data.TotalTq.STB + "↓)");
        }else if(data.TotalTq.STB > 0){
            $(".coalchangeRate").addClass("energy-remind");
            $(".coalchangeRate").html("("+data.TotalTq.STB + "↑)");
        }else{
            $(".coalchangeRate").css('color','#999');
            $(".coalchangeRate").html("("+data.TotalTq.STB + "→)");
        }
        echartsSelf({
            id: "coalEnergyChart",
            echartsConfig: {
                xData: data.resultData.dateLine,
                series: [{
                    type: 'line',
                    dataList: data.resultData.coalBq,
                    typeLine: 'solid'

                },
                    {
                        type: 'line',
                        dataList: data.resultData.coalTq,
                        typeLine: 'dashed'
                    }
                ]
            }
        });
    }
}
//加载热源的单耗排名
function feedDh(data){

    echartsSelf({
        id: 'linechart_as',
        echartsConfig: {
            axisLabelRotate: '-30', //倾斜角度
            xAxisBoundaryGap: true,
            dataZoom: true,
            dataZoomstartValue: 0,
            dataZoomendValue: 9,
            axisLabelInterval:0,
            bg: 'row',
            xData: data.mapName,
            series: [{
                type: 'bar',
                dataList: data.mapValue,
                barWidth: 20
            }]
        }
    });
}

function stationDh(data){

    echartsSelf({
        id: 'piechart_as',
        echartsConfig: {
            axisLabelRotate: '-30', //倾斜角度
            xAxisBoundaryGap: true,
            dataZoom: true,
            dataZoomstartValue: 0,
            dataZoomendValue: 9,
            axisLabelInterval:0,
            bg: 'row',
            xData: data.mapName,
            series: [{
                type: 'bar',
                dataList: data.mapValue,
                barWidth: 20
            }]
        }
    });
}
function loadDataFun() {
    createtable();
    $.each($(".ec_title"), function(index, item) {
        if(index == 0) {
            $.each($(this).find("a"), function(sindex, sitem) {
                $(this).click(function() {
                    $(this).addClass("button-group-act").siblings().removeClass("button-group-act");
                    chart01Fun(top1[sindex]);
                });

            });
        } else {
            $.each($(this).find("a"), function(sindex, sitem) {
                $(this).click(function() {
                    $(this).addClass("button-group-act").siblings().removeClass("button-group-act");
                    chart02Fun(top2[sindex]);
                });
            });
        }
    })

//    $.each($(".energy-list .energy-chart > div"), function(index, item) {
//        var options = {
//            id: item.id,
//            echartsConfig: {
//
//                xData: [1, 2, 3, 4, 5, 6, 7],
//                series: [{
//                    type: 'line',
//                    dataList: [1, 4, 5, 2, 3],
//                    typeLine: 'solid'
//
//                },
//                    {
//                        type: 'line',
//                        dataList: [2, 4, 7, 1, 4, 5],
//                        typeLine: 'dashed'
//                    }
//                ]
//            }
//        };
//        echartsSelf(options);
    // });
//
//    echartsSelf({
//        id: "groupEnergyChart",
//        echartsConfig: {
//            xData: [1, 2, 3, 4, 5, 6, 7, 8],
//            series: [{
//                type: 'line',
//                dataList: [1, 4, 5, 2, 3, 6],
//                typeLine: 'solid'
//
//            },
//                {
//                    type: 'line',
//                    dataList: [2, 4, 7, 1, 4, 5],
//                    typeLine: 'dashed'
//                }
//            ]
//        }
//    });

//    echartsSelf({
//        id: 'piechart_as',
//        echartsConfig: {
//            axisLabelRotate: '-50', //倾斜角度
//            xAxisBoundaryGap: true,
//            dataZoom: true,
//            dataZoomstartValue: 0,
//            dataZoomendValue: 9,
//            bg: 'row',
//            xData: ['站1', '站2', '站3', '站4', '站5', '站6', '站7', '站1', '站2', '站3', '站1', '站2', '站3', '站4', '站5', '站6', '站7', '站1', '站2', '站3'],
//            series: [{
//                type: 'bar',
//                dataList: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3],
//                barWidth: 20
//            }]
//        }
//    });
//
//    echartsSelf({
//        id: 'linechart_as',
//        echartsConfig: {
//            axisLabelRotate: '-50', //倾斜角度
//            xAxisBoundaryGap: true,
//            dataZoom: true,
//            dataZoomstartValue: 0,
//            dataZoomendValue: 9,
//            bg: 'row',
//            xData: ['站1', '站2', '站3', '站4', '站5', '站6', '站7', '站1', '站2', '站3', '站1', '站2', '站3', '站4', '站5', '站6', '站7', '站1', '站2', '站3'],
//            series: [{
//                type: 'bar',
//                dataList: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3],
//                barWidth: 20
//
//            }]
//        }
//    });
}
