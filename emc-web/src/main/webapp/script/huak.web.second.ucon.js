

$(function(){
    //加载分公司单耗
    $.ajax({
        url : _web+"/cons/analysis/fgs/list",
        type : "POST",
        data:$("#searchTools").serialize(),
        dataType: "json",
        error : function(request) {
            alert("Connection error");
        },
        success : function(data) {
            fgsEnergyList(data);
        }
    });
    $.ajax({
        url : _web+"/cons/analysis/fgs/ratio",
        type : "POST",
        data:$("#searchTools").serialize(),
        dataType: "json",
        error : function(request) {
            alert("Connection error");
        },
        success : function(data) {
            chart01Fun(data.list);
        }
    });
    $.ajax({
        url : _web+"/cons/analysis/fgs/trend",
        type : "POST",
        data:$("#searchTools").serialize(),
        dataType: "json",
        error : function(request) {
            alert("Connection error");
        },
        success : function(data) {
            chart02Fun(data);
        }
    });
    $.ajax({
        url : _web+"/cons/analysis/fgs/an",
        type : "POST",
        data:$("#searchTools").serialize(),
        dataType: "json",
        error : function(request) {
            alert("Connection error");
        },
        success : function(data) {
            chart03Fun(data);
        }
    });
    $.ajax({
        url : _web+"/cons/analysis/fgs/ranking",
        type : "POST",
        data:$("#searchTools").serialize(),
        dataType: "json",
        error : function(request) {
            alert("Connection error");
        },
        success : function(data) {
            console.info(data)
            chart04Fun(data);
        }
    });
    $.ajax({
        url : _web+"/cons/analysis/groupDanHao",
        type : "GET",
        data:$("#searchTools").serialize(),
        dataType: "json",
        error : function(request) {
            alert("Connection error");
        },
        success : function(data) {
            $("#groupTotal").html(data.data.groupTotal.energy.value);
            if(data.data.groupTotal.energy.type == 1){
                $("#groupTotal").addClass("energy_gray");
            };
            if(data.data.groupTotal.changeRate.type == 1){
                $("#groupchangeRate").addClass("energy_gray2");
                $("#groupchangeRate").html(data.data.groupTotal.changeRate.rate + "<span class='arrow'>↓</span>");
            }else{
                $("#groupchangeRate").html(data.data.groupTotal.changeRate.rate + "<span class='arrow'>↑</span>");
            };
            //水单耗
            $("#waterTotal").html(data.data.waterTotal.energy.value);
            if(data.data.waterTotal.energy.type == 1){
                $("#waterTotal").closest(".energy-head").addClass("energy-snh");
            }else{
                $("#waterTotal").next("span").addClass("energy-remind");
                $("#waterTotal").addClass("energy-remind");
                $("#waterTotal").closest(".energy-head").addClass("energy-snh-remind");
            };
            if(data.data.waterTotal.changeRate.type == 1){
                $("#waterchangeRate").html("("+data.data.waterTotal.changeRate.rate + "↓)");
            }else{
                $("#waterchangeRate").addClass("energy-remind");
                $("#waterchangeRate").html("("+data.data.waterTotal.changeRate.rate + "↑)");
            };
            //电单耗
            $("#electricTotal").html(data.data.electricTotal.energy.value);
            if(data.data.electricTotal.energy.type == 1){
                $("#electricTotal").closest(".energy-head").addClass("energy-dnh");
            }else{
                $("#electricTotal").next("span").addClass("energy-remind");
                $("#electricTotal").addClass("energy-remind");
                $("#electricTotal").closest(".energy-head").addClass("energy-dnh-remind");
            };
            if(data.data.electricTotal.changeRate.type == 1){
                $("#elechangeRate").html("("+data.data.electricTotal.changeRate.rate + "↓)");
            }else{
                $("#elechangeRate").html("("+data.data.electricTotal.changeRate.rate + "↑)");
                $("#elechangeRate").addClass("energy-remind");
            };
            //气单耗
            $("#gasTotal").html(data.data.gasTotal.energy.value);
            if(data.data.gasTotal.energy.type == 1){
                $("#gasTotal").closest(".energy-head").addClass("energy-qnh");
            }else{
                $("#gasTotal").next("span").addClass("energy-remind");
                $("#gasTotal").addClass("energy-remind");
                $("#gasTotal").closest(".energy-head").addClass("energy-qnh-remind");
            };
            if(data.data.gasTotal.changeRate.type == 1){
                $("#gaschangeRate").html("("+data.data.gasTotal.changeRate.rate + "↓)");
            }else{
                $("#gaschangeRate").html("("+data.data.gasTotal.changeRate.rate + "↑)");
                $("#gaschangeRate").addClass("energy-remind");
            };

            //热单耗
            $("#hotTotal").html(data.data.hotTotal.energy.value);
            if(data.data.hotTotal.energy.type == 1){
                $("#hotTotal").closest(".energy-head").addClass("energy-rnh");
            }else{
                $("#hotTotal").next("span").addClass("energy-remind");
                $("#hotTotal").addClass("energy-remind");
                $("#hotTotal").closest(".energy-head").addClass("energy-rnh-remind");
            };
            if(data.data.hotTotal.changeRate.type == 1){
                $("#hotchangeRate").html("("+data.data.hotTotal.changeRate.rate + "↓)");
            }else{
                $("#hotchangeRate").html("("+data.data.hotTotal.changeRate.rate + "↑)");
                $("#hotchangeRate").addClass("energy-remind");
            };

            //煤单耗
            $("#coalTotal").html(data.data.coalTotal.energy.value);
            if(data.data.coalTotal.energy.type == 1){
                $("#coalTotal").closest(".energy-head").addClass("energy-mnh");
            }else{
                $("#coalTotal").next("span").addClass("energy-remind");
                $("#coalTotal").addClass("energy-remind");
                $("#coalTotal").closest(".energy-head").addClass("energy-mnh-remind");
            };
            if(data.data.coalTotal.changeRate.type == 1){
                $("#coalchangeRate").html("("+data.data.coalTotal.changeRate.rate + "↓)");
            }else{
                $("#coalchangeRate").html("("+data.data.coalTotal.changeRate.rate + "↑)");
                $("#coalchangeRate").addClass("energy-remind");
            };
            groupEnergyChartFun(data.data.groupEnergy.data, data.data.groupEnergy.yearDate);
            waterEnergyChartFun(data.data.waterEnergy.data, data.data.waterEnergy.yearDate);
            electricEnergyChartFun(data.data.electricEnergy.data, data.data.electricEnergy.yearDate);
            gasEnergyChartFun(data.data.gasEnergy.data, data.data.gasEnergy.yearDate);
            hotEnergyChartFun(data.data.hotEnergy.data, data.data.hotEnergy.yearDate);
            coalEnergyChartFun(data.data.coalEnergy.data, data.data.coalEnergy.yearDate);
        }
    });
})
function fgsEnergyList(data){

    var html = "";
    $.each(data.list,function(idx,item){
        html +='<tr class="'+(idx%2 == 0?"":"bgc")+'">';
        html +='<td><a href="javascript:;" class="need_a">'+item.orgName+'</a></td>';
        html +=getHtmlTd(item.totalBq,item.totalAn);
        html +=getHtmlTd(item.waterBq,item.waterAn);
        html +=getHtmlTd(item.electricBq,item.electricAn);
        html +=getHtmlTd(item.gasBq,item.gasAn);
        html +=getHtmlTd(item.heatBq,item.heatAn);
        html +=getHtmlTd(item.coalBq,item.coalAn);
        html +=getHtmlTd(item.oilBq,item.oilAn);
        html +='</tr>';
    });
    $("#fgsEnergyTbody").html(html);
}

function getHtmlTd(bq,an){
    return '<td class="need_title">'+bq+'（同<span class="'+(an == 0?"":(an > 0?"redcolor":"bluecolor"))+'">'+toDecimal(an)+'%'+(an == 0?"→":(an > 0?"↑":"↓"))+'</span>）</td>';
}


/*集团总单耗-折线图*/
function groupEnergyChartFun(datalist, datelist){
    $("#groupEnergyChart").empty();
    groupEnergyChart = echarts.init(document.getElementById('groupEnergyChart'));
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
                show: true,
                lineStyle: {
                    color: '#dbdcdf'
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#abcd'
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
                show: true,
                lineStyle: {
                    color: '#dbdcdf'
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
    groupEnergyChart.setOption(option);
}

function waterEnergyChartFun(datalist, datelist){
    $("#waterEnergyChart").empty();
    waterEnergyChart = echarts.init(document.getElementById('waterEnergyChart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0',
            top: '10',
            right: '35',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
    waterEnergyChart.setOption(option);
}

function electricEnergyChartFun(datalist, datelist){
    $("#electricEnergyChart").empty();
    electricEnergyChart = echarts.init(document.getElementById('electricEnergyChart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0',
            top: '10',
            right: '35',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
    electricEnergyChart.setOption(option);
}

/*气单耗-折线图*/
function gasEnergyChartFun(datalist, datelist){
    $("#gasEnergyChart").empty();
    gasEnergyChart = echarts.init(document.getElementById('gasEnergyChart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0',
            top: '10',
            right: '35',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
    gasEnergyChart.setOption(option);
}

/*热单耗-折线图*/
function hotEnergyChartFun(datalist, datelist){
    $("#hotEnergyChart").empty();
    hotEnergyChart = echarts.init(document.getElementById('hotEnergyChart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0',
            top: '10',
            right: '35',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
    hotEnergyChart.setOption(option);
}

/*煤单耗-折线图*/
function coalEnergyChartFun(datalist, datelist){
    $("#coalEnergyChart").empty();
    coalEnergyChart = echarts.init(document.getElementById('coalEnergyChart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0',
            top: '10',
            right: '35',
            bottom: '0',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
    coalEnergyChart.setOption(option);
}








/*分公司单耗占比分布图*/
function chart01Fun(data){
    var piechart = echarts.init(document.getElementById('piechart'));
    var option = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            show:true
        },

        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : false,

        series : [
            {
                type:'pie',
                radius : ['0', '80%'],
                silent:true,
                itemStyle : {
                    normal : {
                        color:'#fff',
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:1, name:'圈', selected:false,hoverAnimation:false}
                ]
            },
            {
                name:'分公司单耗占比',
                type:'pie',
                radius : ['60%', '80%'],

                // for funnel
                x: '60%',
                width: '35%',
                funnelAlign: 'left',
                itemStyle : {
                    normal : {
                        borderColor: '#fff',
                        borderWidth: '4',
                        label : {show:true}
                    }
                },
                color:color,
                data:data

            }
        ]
    };
    piechart.setOption(option);
}


/*分公司单耗趋势对比图*/
function chart02Fun(data){
    var linechart = echarts.init(document.getElementById('linechart'));
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        grid: {
            //left: '15%',
            top: '28',
            right: '115',
            bottom: '5',
            containLabel: true
        },
        legend: {
            orient : 'vertical',
            right : '5%',
            top: '28',
            itemWidth:8,
            itemHeight:4,
            icon:'rect',
            itemGap:20,
            data:data.legends
        },
        color:color,
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
            splitArea: {
                show: true
            },
            data: data.xaxis

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

        series: data.list
    };

    linechart.setOption(option);
}


/*分公司单耗同比*/
function chart03Fun(data) {
    var barchart01 = echarts.init(document.getElementById('barchart01'));
    var option = {
        title:{
            subtext:'单耗 (单位: tce/㎡)',
            top:'-18px',
            left:'35px',
            subtextStyle:{
                color: '#666',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        legend: {
            data:['本期','同期'],
            itemWidth:8,
            itemHeight:4,
            right: '40',
            top:'10px',
            textStyle: {
                color: '#666',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        grid: {
            //left: '15',
            top: '50',
            right: '45',
            bottom: '5',
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
            data:data.xaxis

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
            splitArea: {
                show: true
            },
            axisLabel: {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        },
        color:['#3B96DD','#a1b1c5'],
        series: [
            {
                name:"本期",
                type:'bar',
                barWidth: '20',
                data:data.bq
            },
            {
                name:"同期",
                type:'bar',
                barWidth: '20',
                data:data.tq
            }
        ]
    }

    barchart01.setOption(option);
}


/*分公司单耗排名---barchart02*/
function chart04Fun(data){
    var	barchart02 = echarts.init(document.getElementById('barchart02'));
    var option = {
        title:{
            subtext:'单耗 (单位: tce/㎡)',
            top:'-18px',
            left:'35px',
            subtextStyle:{
                color: '#666',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        legend: {
            data:['今年','去年'],
            itemWidth:8,
            itemHeight:4,
            right: '40',
            top:'10px',
            textStyle: {
                color: '#666',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        grid: {
            //left: '15',
            top: '50',
            right: '45',
            bottom: '5',
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
            data:data.xaxis

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
            splitArea: {
                show: true
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
        series: [
            {
                name:"分公司单耗",
                type:'bar',
                barWidth: '20',
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                },
                data:data.list
            }
        ]
    }

    barchart02.setOption(option);
}



/*能源流单耗占比分布图*/

/*能源流单耗占比分布图------*/
function chart05Fun(data){
    var piechart_as = echarts.init(document.getElementById('piechart_as'));
    var option = {

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            show:true
        },

        toolbox: {
            show : false,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : false,

        series : [
            {
                type:'pie',
                radius : ['0', '80%'],
                silent:true,
                itemStyle : {
                    normal : {
                        color:'#fff',
                        label : {
                            show : false
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:1, name:'圈', selected:false,hoverAnimation:false}
                ]
            },
            {
                name:'能源流单耗占比',
                type:'pie',
                radius : ['60%', '80%'],

                // for funnel
                x: '60%',
                width: '35%',
                funnelAlign: 'left',
                itemStyle : {
                    normal : {
                        borderColor: '#fff',
                        borderWidth: '4',
                        label : {show:true}
                    }
                },
                color:color,
                data:data.list

            }
        ]
    };
    piechart_as.setOption(option);
}


/*能源流单耗趋势对比图*/
function chart06Fun(data){
    var linechart_as = echarts.init(document.getElementById('linechart_as'));
    var option = {

        tooltip: {
            trigger: 'axis'
        },
        grid: {
            //left: '15%',
            top: '28',
            right: '115',
            bottom: '5',
            containLabel: true
        },
        legend: {
            orient : 'vertical',
            right : '5%',
            top: '28',
            itemWidth:8,
            itemHeight:4,
            icon:'rect',
            itemGap:20,
            data:data.legends
        },
        color:['#c675c3', '#8d82cc', '#3b96db', '#32bbb6', '#df614c'],
        xAxis: {
            type: 'category',
            boundaryGap: false,
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
            splitArea: {
                show: true
            },
            data: data.xaxis

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

        series: data.list
    };

    linechart_as.setOption(option);
}


/*能源流单耗同比*/
function chart07Fun(data){
    var barchart01_as = echarts.init(document.getElementById('barchart01_as'));
    var option = {
        title:{
            subtext:'能源流单耗 (单位: GJ/㎡)',
            top:'-18px',
            left:'35px',
            subtextStyle:{
                color: '#666',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        legend: {
            data:['今年','去年'],
            itemWidth:8,
            itemHeight:4,
            right: '40',
            top:'10px',
            textStyle: {
                color: '#666',
                fontStyle: 'normal',
                fontWeight: 'lighter',
                fontFamily: '微软雅黑',
                fontSize: 12
            }
        },
        grid: {
            //left: '15',
            top: '50',
            right: '45',
            bottom: '5',
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
            data:data.xaxis

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
            splitArea: {
                show: true
            },
            axisLabel: {
                show:true,
                textStyle: {
                    color: '#666',
                    fontFamily: 'arial'
                }
            }
        },
        color:['#3B96DD','#a1b1c5'],
        series: [
            {
                name:"今年",
                type:'bar',
                barWidth: '20',
                data:data.bq
            },
            {
                name:"去年",
                type:'bar',
                barWidth: '20',
                data:data.tq
            }
        ]
    }

    barchart01_as.setOption(option);
}


window.onresize = function(){
    groupEnergyChart.resize();
    waterEnergyChart.resize();
    electricEnergyChart.resize();
    gasEnergyChart.resize();
    hotEnergyChart.resize();
    coalEnergyChart.resize();

    piechart.resize();
    linechart.resize();
    barchart01.resize();
    barchart02.resize();

    piechart_as.resize();
    linechart_as.resize();
    barchart01_as.resize();
}