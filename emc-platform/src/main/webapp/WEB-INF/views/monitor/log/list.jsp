<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>日志列表</title>
    <link rel="shortcut icon" href="../favicon.ico">
    <!---->
    <link href="../css/plugins/chosen/chosen.css" rel="stylesheet">
    <link href="../css/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="../css/plugins/bootstrap-table/bootstrap-table.min.css" rel="stylesheet">
    <link href="../css/font-awesome.css?v=4.4.0" rel="stylesheet">

    <link href="../css/animate.css" rel="stylesheet">
    <link href="../css/style.css?v=4.1.0" rel="stylesheet">

    <link href="../css/mystyle.css" rel="stylesheet">

    <!-- 全局js -->
    <script src="../js/jquery.min.js?v=2.1.4"></script>
    <script src="../js/bootstrap.min.js?v=3.3.6"></script>
    <!--自定义-->
    <script src="../js/content.js?v=1.0.0"></script>

    <!--下拉框chosen-->
    <script src="../js/plugins/chosen/chosen.jquery.js"></script>
    <!-- layerDate plugin javascript -->
    <script src="../js/plugins/layer/laydate/laydate.js"></script>

    <!-- Bootstrap table -->
    <script src="../js/plugins/bootstrap-table/bootstrap-table.min.js"></script>
    <script src="../js/plugins/bootstrap-table/bootstrap-table-mobile.min.js"></script>
    <script src="../js/plugins/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>

    <script type="application/javascript">

            $(function() {
                //页面说明
                console.info("页面说明：\n1.对系统操作的记录；\n" +
                        "功能：\n" +
                        "【检索】【重置】【导出EXCEL】\n" +
                        "字段：\n日志主键、事件、事件主键、操作类型\n" +
                        "创建人、创建人组织、创建时间" );

                //日期范围限制
                var start = {
                    elem: '#start',
                    format: 'YYYY/MM/DD hh:mm:ss',
                    //min: laydate.now(), //设定最小日期为当前日期
                    max: '2099-06-16 23:59:59', //最大日期
                    istime: true,
                    istoday: false,
                    choose: function (datas) {
                        end.min = datas; //开始日选好后，重置结束日的最小日期
                        end.start = datas //将结束日的初始值设定为开始日
                    }
                };
                var end = {
                    elem: '#end',
                    format: 'YYYY/MM/DD hh:mm:ss',
                    max: '2099-06-16 23:59:59',
                    istime: true,
                    istoday: false,
                    choose: function (datas) {
                        start.max = datas; //结束日选好后，重置开始日的最大日期
                    }
                };
                laydate(start);
                laydate(end);

                //下拉框js
                $(".chosen-select").chosen();

                //bootstrapTable
                var bt_data = [{
                    "Tid": "1",
                    "sjmc": "菜单管理",
                    "sjbz": "",
                    "sjzj": "qweureosfdsewewrwr123123124fdsfds",
                    "czlx": "添加",
                    "cjjg": "华热科技",
                    "cjz": "超级管理员",
                    "cjsj": "2017-01-01 15:23:23"
                }, {
                    "Tid": "2",
                    "sjmc": "菜单管理",
                    "sjbz": "",
                    "sjzj": "qweureosfdsewewrwr123123124fdsfds",
                    "czlx": "修改",
                    "cjjg": "华热科技",
                    "cjz": "超级管理员",
                    "cjsj": "2017-01-01 15:23:23"
                }, {
                    "Tid": "1",
                    "sjmc": "菜单管理",
                    "sjbz": "",
                    "sjzj": "qweureosfdsewewrwr123123124fdsfds",
                    "czlx": "添加",
                    "cjjg": "华热科技",
                    "cjz": "超级管理员",
                    "cjsj": "2017-01-01 15:23:23"
                }, {
                    "Tid": "1",
                    "sjmc": "菜单管理",
                    "sjbz": "",
                    "sjzj": "qweureosfdsewewrwr123123124fdsfds",
                    "czlx": "添加",
                    "cjjg": "华热科技",
                    "cjz": "超级管理员",
                    "cjsj": "2017-01-01 15:23:23"
                }];


                $('#exampleTableFromData').bootstrapTable({
                    data: bt_data,
                    pagination:true,
                    striped:true,
                    pageSize:2,
                    pageList:[2,10,30],
                    height:480
                    // mobileResponsive: true,
                });
            });
    </script>
</head>
<body class="gray-bg">
<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <form id="roles-form" role="form" class="form-horizontal m-t">
                        <input type="hidden" name="_method" value="PATCH">
                        <input type="hidden" id="pageNo" name="pageNo" value="1">

                        <div class="row">
                            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                <div class="form-group">
                                    <label class="control-label col-sm-4 col-xs-4 col-md-4 col-lg-4">创建机构</label>
                                    <div class="col-sm-8 col-xs-8 col-md-8 col-lg-8">
                                        <input type="text" class="form-control" name="roleName" placeholder="请输入创建机构">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                <div class="form-group">
                                    <label class="control-label col-sm-4 col-xs-4 col-md-4 col-lg-4">创建者</label>
                                    <div class="col-sm-8 col-xs-8 col-md-8 col-lg-8">
                                        <input type="text" class="form-control" name="roleName" placeholder="请输入创建者">
                                    </div>
                                </div>
                            </div>

                            <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label class="control-label col-sm-4 col-xs-4 col-md-4 col-lg-4">操作类型</label>
                                    <div class="input-group col-sm-6 col-xs-6 col-md-6 col-lg-6">
                                        <select name="useStatus" class="chosen-select form-control">
                                            <option value="">全部</option>
                                            <option value="0">添加</option>
                                            <option value="1">修改</option>
                                            <option value="2">删除</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
                                <div class="form-group">
                                    <label class="control-label col-sm-4 col-xs-4 col-md-4 col-lg-4">事件名称</label>
                                    <div class="col-sm-8 col-xs-8 col-md-8 col-lg-8">
                                        <input type="text" class="form-control" name="roleName" placeholder="请输入事件名称">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                                <div class="form-group">
                                    <label class="control-label col-sm-2 col-xs-2 col-md-2 col-lg-2">创建时间</label>
                                    <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                        <input id="start" class="laydate-icon form-control layer-date" placeholder="请输入开始时间">
                                    </div>
                                    <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                        <input id="end" class="laydate-icon form-control layer-date" placeholder="请输入结束时间">
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div class="row">
                            <div class="col-sm-8 col-xs-8 col-md-8 col-lg-8  btn-group">
                            </div>
                            <div class="btn-tools col-sm-4 col-xs-4 col-md-4 col-lg-4">

                                <button type="button" class="btn btn-sm btn-primary" onclick="getRoleList()"> 搜索
                                </button>
                                <button type="reset" class="btn btn-sm btn-success"> 重置</button>
                                <button type="button" class="btn btn-sm btn-primary" onclick="getRoleList()"> 导出Excel
                                </button>

                            </div>
                        </div>
                    </form>
                    <div class="example">
                    <table id="exampleTableFromData" data-mobile-responsive="true">
                        <thead>
                        <tr>
                            <th data-field="Tid">ID</th>
                            <th data-field="sjmc">事件名称</th>
                            <th data-field="sjbz">事件备注</th>
                            <th data-field="sjzj">事件主键</th>
                            <th data-field="czlx">操作类型</th>
                            <th data-field="cjjg">创建机构</th>
                            <th data-field="cjz">创建者</th>
                            <th data-field="cjsj">创建时间</th>
                        </tr>
                        </thead>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!--<div id="layer-div" style="display: none"></div>

<%--jtemplement 模板--%>
<textarea id="tpl-list" style="display: none">
    {#foreach $T.data as item}
    <tr>
        <td>
            <input type="checkbox" class="i-checks" value="{$T.item.role_id}" name="input[]">
        </td>
        <td>{$T.item.role_name}</td>
        <td>{$T.item.role_des}</td>
        <td title="{$T.item.memo}">{formatText($T.item.memo,10)}</td>
        <td>
            <a class="btn btn-white btn-xs btn-bitbucket" title="查看">
                <i class="fa fa-file-text-o"></i>
            </a>
                <a class="btn btn-danger btn-xs btn-bitbucket" title="删除" onclick="deleteRole('{$T.item.role_id}')">
                    <i class="fa fa-trash-o"></i>
                </a>
        </td>
    </tr>
    {#/for}
</textarea>-->
</body>
</html>