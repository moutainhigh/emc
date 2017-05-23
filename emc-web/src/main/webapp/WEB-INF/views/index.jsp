<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <title>华热能管系统</title>
    <meta name="description" content="">
    <meta name="keywords" content="">

    <!-- bootstrap & fontawesome -->
    <link rel="stylesheet" href="${web}/static/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="${web}/static/assets/css/font-awesome.css" />

    <!-- text fonts -->
    <link rel="stylesheet" href="${web}/static/assets/css/ace-fonts.css" />

    <!-- ace styles -->
    <link rel="stylesheet" href="${web}/static/assets/css/ace.css" class="ace-main-stylesheet" id="main-ace-style" />

    <!-- page specific plugin styles -->
    <link rel="stylesheet" href="${web}/static/css/huarestyle.css" />
    <link rel="stylesheet" href="${web}/static/css/homemian.css" />

    <!--[if lte IE 9]>
    <link rel="stylesheet" href="${web}/static/assets/css/ace-part2.css" class="ace-main-stylesheet" />
    <![endif]-->

    <!--[if lte IE 9]>
    <link rel="stylesheet" href="${web}/static/assets/css/ace-ie.css" />
    <![endif]-->

    <!-- ace settings handler -->
    <script src="${web}/static/assets/js/ace-extra.js"></script>

    <!-- HTML5shiv and Respond.js for IE8 to support HTML5 elements and media queries -->
    <!--[if lte IE 8]>
    <script src="${web}/static/assets/js/html5shiv.js"></script>
    <script src="${web}/static/assets/js/respond.js"></script>
    <![endif]-->
    <!--[if lt IE 9]>
    <script src="${web}/static/js/Bsie/selectivizr.js"></script>
    <![endif]-->

</head>
<body>
<div id="header">
    <!--顶部导航条-->
    <div id="navbar" class="navbar navbar-default">
        <script type="text/javascript">
            try{ace.settings.check('navbar' , 'fixed')}catch(e){}
        </script>
        <div class="navbar-container" id="navbar-container">
            <!--<button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
                <span class="sr-only">Toggle sidebar</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>-->
            <div class="navbar-header pull-left">
                <a href="index.html" class="navbar-brand">
                    <img src="img/logo.png" width="296" height="31" alt="华热能源管控" />
                </a>
            </div>
            <div class="navbar-buttons navbar-header pull-right" role="navigation">
                <ul class="nav ace-nav" id="ace-nav">
                    <li class="navlh">
                        <a href="index.html">
                            <div class="icon-hm"></div>
                            <p>首页</p>
                        </a>
                    </li>
                    <li class="navlh ">
                        <a href="energy_analysis.html">
                            <div class="icon-nh"></div>
                            <p>能耗分析</p>
                        </a>
                    </li>
                    <li class="navlh">
                        <a href="#">
                            <div class="icon-cb"></div>
                            <p>成本管控</p>
                        </a>
                    </li>
                    <li class="navlh">
                        <a href="#">
                            <div class="icon-tp"></div>
                            <p>碳排管理</p>
                        </a>
                    </li>
                    <li class="navlh">
                        <a href="alarm_mgr.html">
                            <div class="icon-bj"></div>
                            <p>报警管理</p>
                        </a>
                    </li>
                    <li class="navlh">
                        <a href="project_assess.html">
                            <div class="icon-pg"></div>
                            <p>项目后评估</p>
                        </a>
                    </li>
                    <li class="navlh">
                        <a href="#">
                            <div class="icon-aq"></div>
                            <p>安全与后台</p>
                        </a>
                    </li>

                    <li class="tijian bordertopnone">
                        <a href="#">
                            <img src="img/tijian.png" alt="" />
                        </a>
                    </li>

                    <li class="tianqi clearfix bordertopnone">
                        <div class="right-tianqi">
                            <span id="date_today" class="date_today"></span>
                            <iframe name="tianqiiframe" id="tianqiiframe" src="http://i.tianqi.com/index.php?c=code&id=99&color=%23a3abb8&icon=3&num=1" width="120" height="32" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
                        </div>

                    </li>
                    <li class="light-blue bordertopnone">
                        <a data-toggle="dropdown" href="#" class="dropdown-toggle">
                            <span class="navline-left"></span>
                            <img class="nav-user-photo" src="img/manager.png" alt="管理员" />
								<span class="user-info">管理员
								</span>
                            <i class="ace-icon fa fa-caret-down"></i>
                        </a>

                        <!--<ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                            <li>
                                <a href="#">
                                    <i class="ace-icon fa fa-cog"></i>
                                    Settings
                                </a>
                            </li>

                            <li>
                                <a href="profile.html">
                                    <i class="ace-icon fa fa-user"></i>
                                    Profile
                                </a>
                            </li>

                            <li class="divider"></li>

                            <li>
                                <a href="#">
                                    <i class="ace-icon fa fa-power-off"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>-->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="main-container">
<div class="clearfix row no-margin index_header">

    <!--面包屑导航-->
    <div class="bread-crumb pull-left">
        当前位置：<a href="javascript:;">[<var class="xmhpg"  style="color: #666;">首页 - 能源流概况</var>]</a>
    </div>

    <div class="mianTop pull-right">
        <div class="selectbg clearfix col-lg-12">

            <div class="select-box">
                <div class="clearfix h-selectbox">
                    <div class="x-selectfree fl">
                        <div class="x-sfbgbox">
                            <div class="x-sfleft1 x-sfw1">
                                <input type="text" value="集团总览" readonly="readonly">
                            </div>
                            <div class="x-sfright1"></div>
                        </div>
                        <div class="x-sfoption x-sfoption1">
                            <p value="1111">北京公司</p>
                            <p value="2222">上海公司</p>
                            <p value="3333">南京集团</p>
                        </div>
                        <input type="hidden" value="1111"/>
                    </div>
                </div>
            </div>
            <div class="select-box select-boxbtnAlarm clearfix">
                <a href="javascript:;" class="btnAlarm btnAlarm-on">集中供暖</a>
                <a href="javascript:;" class="btnAlarm ">区域供暖</a>
            </div>

            <div class="select-box select-boxbtnAlarm clearfix">
                <a href="javascript:;" class="btnAlarm ">本年度</a>
                <a href="javascript:;" class="btnAlarm btnAlarm-on">本采暖季</a>
                <a href="javascript:;" class="btnAlarm ">自定义</a>
            </div>
            <div class="select-box select-boxWdate">
                <input id="begin" class="Wdate time-input time-input-disable" disabled="disabled" value="2017-05-01" type="text" onFocus="var end=$dp.$('end');WdatePicker({onpicked:function(){end.focus();},readOnly:true,maxDate:'#F{$dp.$D(\'end\')}'})"/>
                <span>至</span>
                <input id="end" class="Wdate time-input time-input-disable" disabled="disabled" value="2017-05-08" type="text" onFocus="WdatePicker({readOnly:true,minDate:'#F{$dp.$D(\'begin\')}'})"/>
            </div>

        </div>
    </div>
</div>
<div class="index_mainbody  ">
<div class="index_menubg">
    <img src="img/index/websitet_cs01.png" id="website" style="min-width: 1346px;max-width: 1920px;" width="100%" />
    <div class="index_menu clearfix" id="index_menu">

        <div class="index_menuBox index_menuBoxAll on pull-left" onclick="typefun(this,1)">
            <div class="index_menuBoxCon">
                <span>能源流</span><span class="tipsindex">999</span>
            </div>
            <ul class="index_menuBoxList clearfix">
                <li class="tabicon01">4000GJ</li>
                <li class="tabicon02">2000T</li>
                <li class="tabicon03">8000万元</li>
                <li class="tabicon04">20GJ/㎡</li>
                <li class="tabicon05">20GJ/㎡</li>
                <li class="tabicon06">8000万㎡</li>
            </ul>
        </div>

        <div class="index_menuBox index_menuBoxre  pull-left" onclick="typefun(this,2)">
            <div class="index_menuBoxCon">
                <span>供热源</span><span class="tipsindex">259</span>
            </div>
            <ul class="index_menuBoxList clearfix">
                <li class="tabicon01 tabicon01cb">400GJ</li>
                <li class="tabicon02">200T</li>
                <li class="tabicon03">800万元</li>
            </ul>
            <div class="tabicon10 tabicon10cb">200GJ</div>
        </div>

        <div class="index_menuBox index_menuBoxweb index_menuBoxre pull-left" onclick="typefun(this,3)">
            <div class="index_menuBoxCon">
                <span>管网</span><span class="tipsindex">169</span>
            </div>
            <ul class="index_menuBoxList clearfix">
                <li class="tabicon07">400km</li>
                <li class="tabicon09 tabicon09cb">200km</li>
                <li class="tabicon03">800万元</li>
            </ul>
            <div class="tabicon10">200GJ</div>
        </div>

        <div class="index_menuBox index_menuBoxsite index_menuBoxre pull-left" onclick="typefun(this,4)">
            <div class="index_menuBoxCon">
                <span>换热站</span><span class="tipsindex">1069</span>
            </div>
            <ul class="index_menuBoxList clearfix">
                <li class="tabicon01">400GJ</li>
                <li class="tabicon02 tabicon02cb">200T</li>
                <li class="tabicon03">800万元</li>
            </ul>
            <div class="tabicon10">200GJ</div>
        </div>

        <div class="index_menuBox index_menuBoxline index_menuBoxre pull-left" onclick="typefun(this,5)">
            <div class="index_menuBoxCon">
                <span>管线</span><span class="tipsindex">320</span>
            </div>
            <ul class="index_menuBoxList clearfix">
                <li class="tabicon07">400km</li>
                <li class="tabicon09">200km</li>
                <li class="tabicon03">800万元</li>
            </ul>
            <div class="tabicon10">200GJ</div>
        </div>

        <div class="index_menuBox index_menuBoxjum index_menuBoxre pull-left " onclick="typefun(this,6)">
            <div class="index_menuBoxCon">
                <span>民户</span><span class="tipsindex">30</span>
            </div>
            <ul class="index_menuBoxList clearfix">
                <li class="tabicon07">400GJ</li>
                <li class="tabicon08">67.9%</li>
                <li class="tabicon03">80万元</li>
            </ul>
        </div>
    </div>

</div>
<div class="index_content row no-margin">
<div class="col-lg-12 no-padding">
<div class="col-lg-4 mb14">
    <div class="index_contentBox">
        <div class="titbox clearfix no-padding no-margin">
            <div class="pull-left energyTit"><i></i>能耗明细<small class="font-sm">Energy Consumption</small></div>
        </div>
        <div class="energyBox">
            <div class="col-lg-12 no-padding">
                <div class="EnergyChartBg col-lg-8 no-padding">
                    <div class="EnergyChart" id="EnergyChart"></div>
                </div>
                <div class="col-lg-4 EnergyChartText no-padding-left">
                    <div class="EnergyChartTextnumb ">276.9</div> <!--EnergyChartTextnumb_cb-->
                    <div class="EnergyChartTextitem">能耗总量 (GJ)<br><span class="cb_color ">(1.6%↑)</span></div>  <!--zc_color-->
                    <div class="EnergyChartTextnumbolb ">+34.6</div> <!--EnergyChartTextnumbolb_cb-->
                    <div class="EnergyChartTextitem">偏差度(%)</div>
                </div>
            </div>
            <div class="col-lg-12 no-padding">
                <div class="energyBoxLegend_bg"></div>
                <div class="energyBoxLegend clearfix">
                    <!--<div class="energyBoxLegendBtnLeft pull-left"></div>-->
                    <ul class="energyBoxLegendList clearfix pull-left">
                        <li>
                            <div class="energyBoxLegendListIcon energyBoxLegendListIcon01 energyBoxLegendListIcon01_cb"></div>
                            <div class="energyBoxLegendListText energyBoxLegendListText_cb">260T</div>
                            <div class="energyBoxLegendListPara">(4.0%↓)</div>
                        </li>
                        <li>
                            <div class="energyBoxLegendListIcon energyBoxLegendListIcon02"></div>
                            <div class="energyBoxLegendListText">127Kw/h</div>
                            <div class="energyBoxLegendListPara">(2.6%↓)</div>
                        </li>
                        <li>
                            <div class="energyBoxLegendListIcon energyBoxLegendListIcon03"></div>
                            <div class="energyBoxLegendListText">209M3</div>
                            <div class="energyBoxLegendListPara">(0%→)</div>
                        </li>
                        <li>
                            <div class="energyBoxLegendListIcon energyBoxLegendListIcon04 energyBoxLegendListIcon04_cb"></div>
                            <div class="energyBoxLegendListText">196GJ</div>
                            <div class="energyBoxLegendListPara energyBoxLegendListPara_cb">(3.9%↑)</div>
                        </li>
                        <li>
                            <div class="energyBoxLegendListIcon energyBoxLegendListIcon05"></div>
                            <div class="energyBoxLegendListText">84T</div>
                            <div class="energyBoxLegendListPara">(2.7%↑)</div>
                        </li>
                    </ul>
                    <!--<div class="energyBoxLegendBtnRight energyBoxLegendBtnRight_on pull-left"></div>-->
                </div>
            </div>
        </div>
    </div>
</div>
<div class=" col-lg-4 mb14">
    <div class="index_contentBox">
        <div class="titbox clearfix no-padding no-margin">
            <div class="pull-left totalTit energyTit"><i></i>成本明细<small class="font-sm">Total cost</small></div>
        </div>
        <div class="col-lg-12 no-padding energyBox TotalBox clearfix">
            <div class="cost-chart">
                <div id="chart05" style="width: 100%;height:310px;"></div>
            </div>
            <div class="cost-list">
                <div class="cost-list-box cost-list-nyf">
                    <span class="cost-list-name">能源费</span>
                    <div class="">
                        <span class="cost-list-num cost-list-remind">206.4</span>
                        <span class="cost-list-proportion cost-list-remind">(4.0%↑)</span>
                    </div>
                </div>
                <div class="cost-list-box cost-list-sbf">
                    <span class="cost-list-name">设备费</span>
                    <div class="">
                        <span class="cost-list-num cost-list-remind">192.5</span>
                        <span class="cost-list-proportion">(2.6%↓)</span>
                    </div>
                </div>
                <div class="cost-list-box cost-list-rgf">
                    <span class="cost-list-name">人工费</span>
                    <div class="">
                        <span class="cost-list-num ">258.7</span>
                        <span class="cost-list-proportion cost-list-remind">(2.7%↑)</span>
                    </div>
                </div>
                <div class="cost-list-box cost-list-glf">
                    <span class="cost-list-name">管理费</span>
                    <div class="">
                        <span class="cost-list-num">207.2</span>
                        <span class="cost-list-proportion">(0%→)</span>
                    </div>
                </div>
                <div class="cost-list-box cost-list-qtf">
                    <span class="cost-list-name">其他费</span>
                    <div class="">
                        <span class="cost-list-num">106.2</span>
                        <span class="cost-list-proportion">(0%→)</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
<div class=" col-lg-4 mb14">
    <div class="index_contentBox otherTabdiv">
        <div class="titbox clearfix no-padding no-margin">
            <div class="pull-left CarbonTit energyTit"><i></i>碳排放总量<small class="font-sm">Carbon emissions</small></div>
        </div>
        <div class="col-lg-12 no-padding energyBox CarbonBox clearfix">
            <div class="emission-chart ">
                <div id="chart06" class="wave">
                    <div class="wave-main wave-hot">
                        <b class="" id="level_num">290.2</b>
                        <p class="wave-name">碳排放总量（万T）</p>
                        <p class="wave-proportion">(1.6%↑)</p>
                    </div>
                </div>
            </div>
            <div class="emission-list">
                <div class="emission-list-box emission-list-hot">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">朝一</span>
                    <span class="emission-list-num">208.4</span>
                    <span class="emission-list-proportion">(1.6%↑)</span>
                </div>
                <div class="emission-list-box">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">朝二</span>
                    <span class="emission-list-num">192.8</span>
                    <span class="emission-list-proportion">(2.6%↓)</span>
                </div>
                <div class="emission-list-box">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">东城</span>
                    <span class="emission-list-num">187.2</span>
                    <span class="emission-list-proportion">(2.6%↓)</span>
                </div>
                <div class="emission-list-box emission-list-hot">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">西城</span>
                    <span class="emission-list-num">245.9</span>
                    <span class="emission-list-proportion">(1.6%↑)</span>
                </div>
                <div class="emission-list-box">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">海淀</span>
                    <span class="emission-list-num">312.0</span>
                    <span class="emission-list-proportion">(2.6%↓)</span>
                </div>
                <div class="emission-list-box">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">丰台</span>
                    <span class="emission-list-num">254.6</span>
                    <span class="emission-list-proportion">(1.6%↑)</span>
                </div>
            </div>
        </div>

    </div>

    <div class="index_contentBox PeopleTabdiv">
        <div class="titbox clearfix no-padding no-margin">
            <div class="pull-left CarbonTit energyTit temperatureTit"><i></i>室温合格率<small class="font-sm">temperature qualified rate</small></div>
        </div>
        <div class="col-lg-12 no-padding energyBox CarbonBox">
            <div class="emission-chart ">
                <div id="chartCarbon" style="width: 100%;height:310px;"></div>
            </div>
            <div class="emission-list">
                <div class="emission-list-box emission-list-hot">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">朝一</span>
                    <span class="emission-list-num">208.4</span>
                    <span class="emission-list-proportion">(1.6%↑)</span>
                </div>
                <div class="emission-list-box">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">朝二</span>
                    <span class="emission-list-num">192.8</span>
                    <span class="emission-list-proportion">(2.6%↓)</span>
                </div>
                <div class="emission-list-box">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">东城</span>
                    <span class="emission-list-num">187.2</span>
                    <span class="emission-list-proportion">(2.6%↓)</span>
                </div>
                <div class="emission-list-box emission-list-hot">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">西城</span>
                    <span class="emission-list-num">245.9</span>
                    <span class="emission-list-proportion">(1.6%↑)</span>
                </div>
                <div class="emission-list-box">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">海淀</span>
                    <span class="emission-list-num">312.0</span>
                    <span class="emission-list-proportion">(2.6%↓)</span>
                </div>
                <div class="emission-list-box">
                    <span class="emission-list-rect"></span>
                    <span class="emission-list-num">丰台</span>
                    <span class="emission-list-num">254.6</span>
                    <span class="emission-list-proportion">(1.6%↑)</span>
                </div>
            </div>
        </div>
    </div>

</div>
<div class=" col-lg-4">
    <div class="index_contentBox">
        <div class="titbox clearfix no-padding no-margin">
            <div class="pull-left carbonTit energyTit"><i></i>单耗趋势<small class="font-sm">Comparison of Energy</small></div>
        </div>
        <div class="energyBox ComparisonBox">
            <div class="chart-box">
                <div class="cb-header">
                    <span class="cb-title">单耗 (单位: GJ/㎡)</span>
                    <div class="cb-title-right">
                        <label>
                            <span class="cb-legend-blue"></span>
                            今年
                        </label>
                        <label>
                            <span class="cb-legend-gray"></span>
                            去年
                        </label>
                    </div>
                </div>
                <div id="chart01" class="chart"></div>
            </div>
        </div>

    </div>
</div>
<div class=" col-lg-4">
    <div class="index_contentBox">
        <div class="titbox clearfix no-padding no-margin">
            <div class="pull-left carbonTit energyTit"><i></i>成本对比<small class="font-sm">Cost comparison</small></div>
        </div>
        <div class="energyBox comparisonBox">
            <div class="chart-box">
                <div class="cb-header">
                    <span class="cb-title" id="nh-title" >分公司成本 (单位: 万元)</span>
                    <span class="cb-title" id="qs-title" style="display: none;">成本 (单位: 万元)</span>
                    <div class="cb-title-right clearfix">
											<span class="cb-cut-date">
												<a href="javascript:selectYear(-1);"><img src="img/icons/icon001.png" /></a>
												<label id="branchcost-year">2016年</label> 
												<a href="javascript:selectYear(1);"><img src="img/icons/icon002.png" /></a>
											</span>
											
											<span class="button-group">
												<a href="javascript:cutNh();" id="bg-left" class="bg-left button-group-act">能耗</a><a href="javascript:cutQs();" id="bg-right" class="bg-right">趋势</a>
											</span>
                    </div>
                </div>
                <div id="chart02" class="chart"></div>
                <div id="chart04" class="chart" style="display: none;"></div>
            </div>
        </div>

    </div>
</div>
<div class=" col-lg-4">
    <div class="index_contentBox otherTabdiv">
        <div class="titbox clearfix no-padding no-margin">
            <div class="pull-left carbonTit energyTit"><i></i>碳排放趋势<small class="font-sm">Comparison of carbon</small></div>
        </div>
        <div class="energyBox carbonBox">
            <div class="chart-box">
                <div class="cb-header">
                    <span class="cb-title">碳排放(单位: m³)</span>
                    <div class="cb-title-right">
                        <label>
                            <span class="cb-legend-blue"></span>
                            今年
                        </label>
                        <label>
                            <span class="cb-legend-gray"></span>
                            去年
                        </label>
                    </div>
                </div>
                <div id="chart03" class="chart"></div>
            </div>
        </div>
    </div>

    <div class="index_contentBox PeopleTabdiv">
        <div class="titbox clearfix no-padding no-margin">
            <div class="pull-left carbonTit energyTit"><i></i>合格率趋势<small class="font-sm">Qualified rate trend</small></div>
        </div>
        <div class="energyBox carbonBox">
            <div class="chart-box">
                <div class="cb-header">
                    <span class="cb-title">室温 (单位: ℃)</span>
                    <div class="cb-title-right">
                        <label>
                            <span class="cb-legend-blue QualifiedLend"></span>
                            民户室温
                        </label>

                    </div>
                </div>
                <div id="QualifiedChart" class="chart"></div>
            </div>
        </div>

    </div>

</div>
</div> <!-- <div class="index_contentList">-->
</div>

</div>
</div>

<div id="footer"><!--footerload加载--></div>

<script src="js/jquery/jquery.min.js"></script>
<script src="js/echarts/echarts3/echarts.min.js"></script>
<script src="js/echarts/echarts3/dist/ecStat.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="js/My97DatePicker/WdatePicker.js"></script>

<script src="js/public.js"></script>

<script src="js/index.js"></script>

<script src="js/navscript.js"></script>
<script>
    startTime("#date_today");
</script>

<!-- inline scripts related to this page -->
<script>
    $(function(){

        //$("#header").load("header.html",function(){});
        $("#footer").load("footer.html",function(){});

        $(".select-boxbtnAlarm .btnAlarm").click(function(){
            $(this).addClass("btnAlarm-on").siblings().removeClass("btnAlarm-on");

            var thisText = $(this).text();
            if (thisText == "自定义" ) {
                $(".select-boxWdate input").attr("disabled",false).removeClass("time-input-disable");
            }else{
                $(".select-boxWdate input").attr("disabled",true).addClass("time-input-disable");
            }
        });

    });

    /*website*/
    var websiteheight;
    websiteheight = $("#website").height() - 12;
    $(".index_menuBox").height(websiteheight);

    window.onresize = function(){
        chart01.resize();
        chart02.resize();
        chart03.resize();
        chart04.resize();
        myChartEnergy.resize();
        chart05.resize();
        myChartQualified.resize();
        myChartCarbon.resize();

        websiteheight = $("#website").height() - 12;
        $(".index_menuBox").height(websiteheight);
    };

    function typefun(these,code){
        $(these).addClass("on").siblings().removeClass("on");
        $("#website").attr("src","img/index/websitet_cs0"+code+".png");

        if(code == 6){
            $(".PeopleTabdiv").show();
            $(".otherTabdiv").hide();
            myChartQualified.resize();
            myChartCarbon.resize();
        }else{
            $(".PeopleTabdiv").hide();
            $(".otherTabdiv").show();
        }
    };
</script>
</body>
</html>