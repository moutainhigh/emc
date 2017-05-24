package com.huak.org;

import com.alibaba.fastjson.JSONObject;
import com.huak.common.Constants;
import com.huak.common.UUIDGenerator;
import com.huak.common.page.Page;
import com.huak.org.model.Oncenet;
import com.huak.org.model.vo.Secondnet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

/**
 * Copyright (C), 2009-2012, 北京华热科技发展有限公司.<BR>
 * ProjectName:emc<BR>
 * File name:  com.huak.org<BR>
 * Author:  Administrator  <BR>
 * Project:emc    <BR>
 * Version: v 1.0      <BR>
 * Date: 2017/5/17<BR>
 * Description:     <BR>
 * Function List:  <BR>
 */

@Controller
@RequestMapping("/secondnet")
public class SecondnetController {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    @Resource
    private SecondnetService  secondnetService;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public String listPage() {
        logger.info("转至系统管网列表页");
        return "/org/second/list";
    }
    @RequestMapping(value = "/listpage", method = RequestMethod.PATCH)
    @ResponseBody
    public String list(@RequestParam Map<String, Object> paramsMap, Page page) {
        logger.info("二次管网列表页分页查询");

        JSONObject jo = new JSONObject();
        try {
            jo.put(Constants.LIST, secondnetService.queryByPage(paramsMap, page));
        } catch (Exception e) {
            logger.error("二次管网列表页分页查询异常" + e.getMessage());
        }
        return jo.toJSONString();
    }
    @RequestMapping(value = "/add", method = RequestMethod.GET)
    public String addPage() {
        return "/org/second/add";
    }

    @RequestMapping(value = "/addvalue", method = RequestMethod.POST)
    @ResponseBody
    public String add(Secondnet secondnet, HttpServletRequest request) {
        logger.info("添加管管线");

        JSONObject jo = new JSONObject();
        jo.put(Constants.FLAG, false);
        try {
            // TODO 添加session，创建者
            HttpSession session = request.getSession();

            secondnet.setId(UUIDGenerator.getUUID());
            secondnetService.insertSelective(secondnet);
            jo.put(Constants.FLAG, true);
            jo.put(Constants.MSG, "添加管线成功");
        } catch (Exception e) {
            logger.error("添加管线异常" + e.getMessage());
            jo.put(Constants.MSG, "添加管网失败");
        }
        return jo.toJSONString();
    }
    @RequestMapping(value = "/edit/{id}", method = RequestMethod.GET)
    public String edit(Model model, @PathVariable("id") String id) {
        logger.info("跳转修改热源页");
        try {
            Secondnet secondnet = secondnetService.selectByPrimaryKey(id);
            model.addAttribute("oncenet", secondnet);
        } catch (Exception e) {
            logger.error("跳转修改管线页异常" + e.getMessage());
        }
        return "/org/second/edit";
    }

    @RequestMapping(value = "/editvalue", method = RequestMethod.POST)
    @ResponseBody
    public String editValue(Secondnet secondnet) {
        logger.info("修改管线");

        JSONObject jo = new JSONObject();
        jo.put(Constants.FLAG, false);
        try {
            int i = secondnetService.updateByPrimaryKeySelective(secondnet);
            jo.put(Constants.FLAG, true);
            jo.put(Constants.MSG, "修改管线成功");
        } catch (Exception e) {
            logger.error("修改管线异常" + e.getMessage());
            jo.put(Constants.MSG, "修改管线失败");
        }
        return jo.toJSONString();
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public String deleteSecondnet(@PathVariable("id") String id) {
        logger.info("删除管线");

        JSONObject jo = new JSONObject();
        jo.put(Constants.FLAG, false);
        try {
            secondnetService.deleteByPrimaryKey(id);
            jo.put(Constants.FLAG, true);
            jo.put(Constants.MSG, "删除管线成功");
        } catch (Exception e) {
            logger.error("删除管线异常" + e.getMessage());
            jo.put(Constants.MSG, "删除管线失败");
        }
        return jo.toJSONString();
    }
}