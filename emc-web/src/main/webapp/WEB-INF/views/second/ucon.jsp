<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="s" uri="http://www.opensymphony.com/sitemesh/decorator" %>
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="decorator" content="main"/>
    <title>华热能管系统-单耗分析</title>
    <script src="${web}/script/huak.web.second.ucon.js"></script>
</head>
<body>
<div class="index_mainbody selectbg ">

<div class="index_content row no-margin">
<div class="col-lg-12 no-padding index_contentList">
    <div class="col-lg-12 mb14  ">
        <div class=" index_contentBox clearfix">
            <div class="titbox clearfix no-padding no-margin">
                <div class="pull-left groupEnergyTit energyTit"><i></i>集团总单耗<small class="font-sm">Energy Monitoring</small></div>
            </div>
            <div class="groupEnergy-box col-lg-12  clearfix">
                <div class="chart-box groupEnergy-chart col-lg-10 ">
                    <div class="cb-header">
                        <span class="cb-title">集团总单耗 (单位: tce/㎡)</span>
                        <div class="cb-title-right" style="margin-right: 36px;">
                            <label>
                                <span class="cb-legend-blue"></span>
                                本期
                            </label>
                            <label>
                                <span class="cb-legend-gray"></span>
                                同期
                            </label>
                        </div>
                    </div>
                    <div id="groupEnergyChart" style="width: 100%;height:365px;"></div>
                </div>
                <div class="groupEnergy-info col-lg-2 ">
                    <h3 id="groupTotal"><!--760.4--></h3>
                    <div class="small">集团总单耗 (tce/㎡)</div>
                    <h4 id="groupchangeRate"><!--3.4<span class="arrow">↑</span>--></h4>
                    <div class="small">同比去年 (%)</div>
                </div>
            </div>

            <div class="clearfix energy-list col-lg-12 ">
                <div class="energy-list-box energy-list-box-first">
                    <div class="energy-head ">
                        <span class="energy-list-name">水单耗</span>
                        <div class="energy-list-info">
                            <span class="energy-list-num " id="waterTotal"></span>
                            <span class="energy-list-measure ">t/㎡</span>
                            <span class="energy-list-proportion " id="waterchangeRate"></span>
                        </div>
                    </div>

                    <div class="energy-chart">
                        <div id="waterEnergyChart"></div>
                    </div>
                </div>

                <div class="energy-list-box">
                    <div class="energy-head ">
                        <span class="energy-list-name">电单耗</span>
                        <div class="energy-list-info">
                            <span class="energy-list-num" id="electricTotal"></span>
                            <span class="energy-list-measure ">kW·h/㎡</span>
                            <span class="energy-list-proportion" id="elechangeRate"></span>
                        </div>
                    </div>
                    <div class="energy-chart">
                        <div id="electricEnergyChart"></div>
                    </div>
                </div>

                <div class="energy-list-box">
                    <div class="energy-head ">
                        <span class="energy-list-name">气单耗</span>
                        <div class="energy-list-info">
                            <span class="energy-list-num " id="gasTotal"></span>
                            <span class="energy-list-measure ">m³/㎡</span>
                            <span class="energy-list-proportion " id="gaschangeRate"></span>
                        </div>
                    </div>

                    <div class="energy-chart">
                        <div id="gasEnergyChart"></div>
                    </div>
                </div>

                <div class="energy-list-box">
                    <div class="energy-head ">
                        <span class="energy-list-name">热单耗</span>
                        <div class="energy-list-info">
                            <span class="energy-list-num" id="hotTotal"></span>
                            <span class="energy-list-measure">GJ/㎡</span>
                            <span class="energy-list-proportion" id="hotchangeRate"></span>
                        </div>
                    </div>

                    <div class="energy-chart">
                        <div id="hotEnergyChart"></div>
                    </div>
                </div>

                <div class="energy-list-box energy-list-box-last">
                    <div class="energy-head ">
                        <span class="energy-list-name">煤单耗</span>
                        <div class="energy-list-info">
                            <span class="energy-list-num" id="coalTotal"></span>
                            <span class="energy-list-measure ">t/㎡</span>
                            <span class="energy-list-proportion" id="coalchangeRate"></span>
                        </div>
                    </div>

                    <div class="energy-chart">
                        <div id="coalEnergyChart"></div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</div>
<!-- <div class="index_contentList">-->

<div class="col-lg-12 no-padding index_contentList">
    <div class="col-lg-12 mb14">
        <div class="index_contentBox clearfix">
            <div class="titbox clearfix no-padding no-margin">
                <div class="pull-left energyTit analy_tit"><i></i>${(company.nextDes ne null&&company.nextDes ne "")?company.nextDes:"分公司"}单耗明细<small class="font-sm">Assessment indicators</small></div>
                <a href="javascript:;" class="pull-right exportlist mr15" export-url="${web}/cons/analysis/fgs/export">导出列表</a>
            </div>
            <div class="AssessmentBox rconttable col-lg-12 no-padding">
                <table class="table table-striped table-bordered table-hover col-lg-12 no-padding">
                    <thead>
                    <tr class="first_tr">
                        <td>${(company.nextDes ne null&&company.nextDes ne "")?company.nextDes:"分公司"}</td>
                        <td>总单耗（tce/㎡）</td>
                        <td>水单耗（t/㎡）</td>
                        <td>电单耗(kW·h/㎡)</td>
                        <td>气单耗（m³/㎡）</td>
                        <td>热单耗（GJ/㎡）</td>
                        <td>煤单耗（t/㎡）</td>
                        <td>油单耗（L/㎡）</td>
                    </tr>
                    </thead>
                    <tbody id="fgsEnergyTbody">
                    <%--<tr class="">
                        <td>
                            <a href="javascript:;" class="need_a">集团</a>
                        </td>
                        <td class="need_title">800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td class="need_title">800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                    </tr>--%>

                    </tbody>
                </table>

                <div class="col-lg-12 no-padding mt20" style="border-bottom: 1px solid #d0d4d9;">
                    <div class="col-lg-6 no-padding analyBoxList" style="border-right: 1px solid #d0d4d9;">
                        <div id="piechart" style="width: 100%;height:268px;"></div>
                        <div class="piechartTit">
                            ${(company.nextDes ne null&&company.nextDes ne "")?company.nextDes:"分公司"}单耗占比分布图
                        </div>
                    </div>
                    <div class="col-lg-6 no-padding analyBoxList analyBoxline">
                        <div id="linechart" style="width: 100%;height:268px;"></div>

                        <div class="piechartTit">
                            ${(company.nextDes ne null&&company.nextDes ne "")?company.nextDes:"分公司"}单耗趋势对比图
                        </div>
                    </div>

                </div>
                <div class="col-lg-12 no-padding">
                    <div class="col-lg-6 no-padding analyBoxList" style="border-right: 1px solid #d0d4d9;">
                        <div id="barchart01" style="width: 100%;height:268px;"></div>
                        <div class="piechartTit">
                            ${(company.nextDes ne null&&company.nextDes ne "")?company.nextDes:"分公司"}单耗同比
                        </div>
                    </div>
                    <div class="col-lg-6 no-padding analyBoxList">
                        <div id="barchart02" style="width: 100%;height:268px;"></div>
                        <div class="piechartTit">
                            ${(company.nextDes ne null&&company.nextDes ne "")?company.nextDes:"分公司"}单耗排名
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

</div>
<!-- <div class="index_contentList">-->

<div class="col-lg-12 no-padding index_contentList">
    <div class="col-lg-12 mb14">
        <div class="index_contentBox clearfix">
            <div class="titbox clearfix no-padding no-margin">
                <div class="pull-left energyTit analy_tit_as"><i></i>能源流明细<small class="font-sm">Assessment indicators</small></div>
                <a class="pull-right exportlist mr15">导出列表</a>
            </div>
            <div class="AssessmentBox rconttable col-lg-12 no-padding">
                <table class="table table-striped table-bordered table-hover col-lg-12 no-padding">
                    <thead>
                    <tr class="first_tr">
                        <td>能源站</td>
                        <td>能源总量（万GJ）</td>
                        <td>水能总量（T）</td>
                        <td>电耗总量(Kw/h)</td>
                        <td>气能耗总量（M²）</td>
                        <td>热能耗总量（GJ）</td>
                        <td>煤能耗总量（GJ）</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="">
                        <td>
                            <a href="javascript:;" class="need_a">集团</a>
                        </td>
                        <td class="need_title">800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td class="need_title">800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                    </tr>
                    <tr class="bgc">
                        <td>
                            <a href="javascript:;" class="need_a">集团</a>
                        </td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="javascript:;" class="need_a">集团</a>
                        </td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                    </tr>
                    <tr class="bgc">
                        <td>
                            <a href="javascript:;" class="need_a">集团</a>
                        </td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="javascript:;" class="need_a">集团</a>
                        </td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                    </tr>
                    <tr class="bgc">
                        <td>
                            <a href="javascript:;" class="need_a">集团</a>
                        </td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                    </tr>
                    <tr>
                        <td>
                            <a href="javascript:;" class="need_a">集团</a>
                        </td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                        <td>800（同<span class="bluecolor">1.2↓</span>&nbsp;环&nbsp;<span class="redcolor">1.2↑</span>）</td>
                    </tr>

                    </tbody>
                </table>

                <div class="col-lg-12 no-padding mt20" style="border-bottom: 1px solid #d0d4d9;">
                    <div class="col-lg-6 no-padding analyBoxList" style="border-right: 1px solid #d0d4d9;">
                        <div id="piechart_as" style="width: 100%;height:268px;"></div>
                        <div class="piechartTit">
                            能源流能耗占比分布图
                        </div>
                    </div>
                    <div class="col-lg-6 no-padding analyBoxList analyBoxline">
                        <div id="linechart_as" style="width: 100%;height:268px;"></div>

                        <div class="piechartTit">
                            能源流能耗趋势对比图
                        </div>
                    </div>

                </div>
                <div class="col-lg-12 no-padding">
                    <div class="col-lg-6 no-padding analyBoxList" style="border-right: 1px solid #d0d4d9;">
                        <div id="barchart01_as" style="width: 100%;height:268px;"></div>
                        <div class="piechartTit">
                            能源流能耗同比
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>

</div>
<!-- <div class="index_contentList">-->
</div>

</div>

</body>
</html>