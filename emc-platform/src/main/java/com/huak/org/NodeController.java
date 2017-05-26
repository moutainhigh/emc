package com.huak.org;

import com.alibaba.fastjson.JSONObject;
import com.huak.auth.model.User;
import com.huak.common.CommonExcelExport;
import com.huak.common.Constants;
import com.huak.common.UUIDGenerator;
import com.huak.common.page.Page;
import com.huak.org.model.Node;
import com.huak.org.model.Org;
import com.huak.org.model.vo.NodeVo;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by MR-BIN on 2017/5/16.
 */
@Controller
@RequestMapping("/station")
public class NodeController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Resource
    private NodeService nodeService;

    @Resource
    private OrgService orgService;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String listPage() {
        logger.info("转至系统热力站列表页");
        return "/org/node/list";
    }

    @RequestMapping(value = "/list", method = RequestMethod.POST)
    @ResponseBody
    public String list(@RequestParam Map<String, Object> paramsMap, Page page) {
        logger.info("热力站列表页分页查询");

        JSONObject jo = new JSONObject();
        try {
            jo.put(Constants.LIST, nodeService.queryByPage(paramsMap, page));
        } catch (Exception e) {
            logger.error("热力站列表页分页查询异常" + e.getMessage());
        }
        return jo.toJSONString();
    }

    @RequestMapping(value = "/add/{pOrgId}/{comId}", method = RequestMethod.GET)
    public String addPage(@PathVariable("pOrgId") String pOrgId,@PathVariable("comId") String comId,ModelMap modelMap) {
        try {
            NodeVo obj = new NodeVo();
            obj.setpOrgId(pOrgId);
            obj.setComId(comId);
            obj.setStatus((byte)0);
            modelMap.put(Constants.OBJECT,obj);
        } catch (Exception e) {
            logger.error("跳转到热力站编辑页出错！");
            e.printStackTrace();
        }
        return "/org/node/add";
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    @ResponseBody
    public String add(NodeVo node, HttpServletRequest request) {
        logger.info("添加热力站");

        JSONObject jo = new JSONObject();
        jo.put(Constants.FLAG, false);
        try {
            // TODO 添加session，创建者
            HttpSession session = request.getSession();
            User user = (User) session.getAttribute(Constants.SESSION_KEY);
            String id =UUIDGenerator.getUUID();
            node.setId(id);
            node.setCreator(user.getId());
           boolean flag = nodeService.insertSelective(node)>0;
            if(flag){
                jo.put(Constants.FLAG, true);
                jo.put(Constants.MSG, "添加热力站成功");
            }else{
                jo.put(Constants.FLAG, false);
                jo.put(Constants.MSG, "添加热力站失败");
            }

        } catch (Exception e) {
            logger.error("添加热力站异常" + e.getMessage());
            jo.put(Constants.MSG, "添加热力站失败");
            jo.put("station",null);
        }
        return jo.toJSONString();
    }

    @RequestMapping(value = "/edit/{id}", method = RequestMethod.GET)
    public String editPage(Model model, @PathVariable("id") String id) {
        logger.info("跳转修改热力站页");
        try {
            model.addAttribute("node", nodeService.selectVoById(id));
        } catch (Exception e) {
            logger.error("跳转修改热力站页异常" + e.getMessage());
        }
        return "/org/node/edit";
    }

    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    @ResponseBody
    public String edit(NodeVo node) {
        logger.info("修改热力站");

        JSONObject jo = new JSONObject();
        jo.put(Constants.FLAG, false);
        try {
            nodeService.update(node);
            jo.put(Constants.FLAG, true);
            jo.put(Constants.MSG, "修改热力站成功");
        } catch (Exception e) {
            logger.error("修改热力站异常" + e.getMessage());
            jo.put(Constants.MSG, "修改热力站失败");
        }
        return jo.toJSONString();
    }

    /**
     * @param id
     * @return
     */
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteRole(@PathVariable("id") String id) {
        logger.info("删除热力站");

        JSONObject jo = new JSONObject();
        jo.put(Constants.FLAG, false);
        try {
            nodeService.deleteByPrimaryKey(id);
            jo.put(Constants.FLAG, true);
            jo.put(Constants.MSG, "删除热力站成功");
        } catch (Exception e) {
            logger.error("删除热力站异常" + e.getMessage());
            jo.put(Constants.MSG, "删除热力站失败");
        }
        return jo.toJSONString();
    }


    @RequestMapping(value = "/export", method = RequestMethod.GET)
    public void export(@RequestParam Map<String, Object> paramsMap, HttpServletResponse response) {
        logger.info("导出热力站列表EXCEL");
        String workBookName = "热力站列表";//文件名
        Map<String, String> cellName = new LinkedHashMap<>();//列标题(有序)

        cellName.put("ORG_NAME", "热力站名称");
        cellName.put("P_ORG_ID", "上级单位");
        cellName.put("ADDR", "地址");
        cellName.put("LNG", "经度");
        cellName.put("LAT", "纬度");
        cellName.put("PUBLIC_AREA", "公建面积");
        cellName.put("DWELL_AREA", "居民面积");
        List<Map<String, Object>> cellValues = null;//列值
        OutputStream out = null;
        try {
            cellValues = nodeService.exportExcel(paramsMap);
            HSSFWorkbook wb = CommonExcelExport.excelExport(cellName, cellValues);
            //response输出流导出excel
            String mimetype = "application/vnd.ms-excel";
            response.setContentType(mimetype);
            response.setCharacterEncoding("UTF-8");
            String fileName = workBookName + ".xls";
            response.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode(fileName, "UTF-8"));
            out = response.getOutputStream();
            wb.write(out);
            out.flush();
            out.close();
        } catch (Exception e) {
            logger.error("导出热力站列表EXCEL异常" + e.getMessage());
        }
    }


}
