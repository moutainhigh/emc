<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<jsp:include page="../../include.jsp"></jsp:include>
<!DOCTYPE html>
<html>

<head>
    <jsp:include page="../../head.jsp"></jsp:include>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <title>H+ 后台主题UI框架 - 个人资料</title>
    <meta name="keywords" content="H+后台主题,后台bootstrap框架,会员中心主题,后台HTML,响应式后台">
    <meta name="description" content="H+是一个完全响应式，基于Bootstrap3最新版本开发的扁平化主题，她采用了主流的左右两栏式布局，使用了Html5+CSS3等现代技术">
    <SCRIPT type="text/javascript">
        <!--
        $(function(){
            var setting = {
                async: {
                    enable: true,
                    type: "post",
                    url: "${platform}/menu/list",
                    autoParam: ["id", "name"]
                },
                view: {
                    addHoverDom: addHoverDom,
                    removeHoverDom: removeHoverDom,
                    selectedMulti: false,
                    fontCss:{color:"blue"}
                },

                check: {
                    enable: true
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                edit: {
                    enable: true
                },
                callback:{
                    beforeEditName:beforeEdt
                }
            };

            var zNodes =[
                { id:1, pId:null, name:"前台菜单", open:true},
                { id:2, pId:null, name:"后台菜单"},
                { id:12, pId:2, name:"组织机构管理"},
                { id:121, pId:2, name:"权限管理"},
                { id:122, pId:2, name:"用户管理"},
                { id:123, pId:2, name:"角色管理"},
                { id:124, pId:1, name:"统计分析"},
                { id:123, pId:1, name:"热力站统计"},
                { id:124, pId:1, name:"热力站填报"},
                { id:125, pId:1, name:"热源填报"},
                { id:126, pId:1, name:"热源能耗统计"},
                { id:127, pId:1, name:"对标管理"},
                { id:128, pId:1, name:"专家管理"}
            ];


            //页面说明
            console.info("页面说明：\n左侧菜单树:是系统菜单的树形结构。\n" +
                    "右侧：菜单的详细信息。\n" +
                    "功能：\n" +
                    "【添加】【删除】【修改】【检索】\n" +
                    "字段：\n菜单名称、菜单上级\n" +
                    "创建人、创建人组织、创建时间、修改人、修改人组织、修改时间、是否删除" );
            $.fn.zTree.init($("#treeDemo"), setting);
        })

        var newCount = 1;
        function addHoverDom(treeId, treeNode) {
            var sObj = $("#" + treeNode.tId + "_span");
            if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
            var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
                    + "' title='add node' onfocus='this.blur();'></span>";
            sObj.after(addStr);
            var btn = $("#addBtn_"+treeNode.tId);
            if (btn) btn.bind("click", function(){
                var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
                return false;
            });
        };
        function removeHoverDom(treeId, treeNode) {
            $("#addBtn_"+treeNode.tId).unbind().remove();
        };
        function beforeEdt(treeId,treeNode){
            alert("添加菜单！");
        }

        //-->
    </SCRIPT>
</head>

<body class="gray-bg">
<div class="wrapper wrapper-content">
    <div class="row animated fadeInRight">
        <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>菜单管理</h5>
                </div>
                <div  class="ibox-content">
                    <ul id="treeDemo" class="ztree"></ul>
                </div>
            </div>
        </div>
        <div class="col-sm-8 col-xs-8 col-md-8 col-lg-8">
            <div class="ibox float-e-margins">
                <div class="ibox-title">
                    <h5>菜单详情</h5>
                </div>
                <div class="ibox-content" style="height: 100%">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12">
                            <form class="form-horizontal" id="addForm" role="form">
                                <input name="dicId" value="${object.dicId}" type="hidden"/>
                                <div class="form-group">
                                    <div class="td">
                                        <label class="col-sm-3 col-xs-3 col-md-3 col-lg-3  control-label">菜单名称：</label>

                                        <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                                            <input class="form-control" readonly value="组织机构管理" type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="td">
                                        <label class="col-sm-3 col-xs-3 col-md-3 col-lg-3  control-label">菜单链接：</label>
                                        <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                                            <input name="dicCode" class="form-control" readonly value="/eccp/eccp-platform/org/list" type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="td">
                                        <label class="col-sm-3 col-xs-3 col-md-3 col-lg-3  control-label">唯一编码：</label>
                                        <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                                            <input name="dicDes" value="org" readonly class="form-control" type="text">
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="td">
                                        <label class="col-sm-3 col-xs-3 col-md-3 col-lg-3  control-label">前后台：</label>
                                        <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6">
                                            <input name="dicName" readonly value="后台" class="form-control" type="text">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
