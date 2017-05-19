package com.huak.auth;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.huak.auth.dao.UserDao;
import com.huak.auth.model.User;
import com.huak.auth.model.vo.OrgEmpVo;
import com.huak.common.des.DESUtil;
import com.huak.common.page.Convert;
import com.huak.common.page.Page;
import com.huak.common.page.PageResult;

@Service
public class UserServiceImpl implements UserService {
	
	@Value("${user.initPassword}")
	private String userInitPassword;
	
	@Value("${huak.des.key}")
	private String desKey;

	@Resource
	private UserDao userDao;

	/**
	 * 分页查询用户信息
	 */
	@Override
	public PageResult<User> queryByPage(Map<String, String> paramsMap, Page page) {
		PageHelper.startPage(page.getPageNumber(), page.getPageSize());
		return Convert.convert(userDao.selectPageByMap(paramsMap));
	}

	/**
	 * 查询组织机构下的员工信息
	 */
	@Override
	public List<OrgEmpVo> queryOrgEmpByOrgId(String orgId) {
		return userDao.selectOrgEmpById(orgId);
	}

	/**
	 * 添加用户信息
	 */
	@Override
	public int addUser(User user) throws RuntimeException{
		int ret = 0;
		try {
			//密码加密
			String password = DESUtil.encrypt(user.getPassword(), desKey);
			user.setPassword(password);
			ret = userDao.insertUser(user);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		return ret;
	}

	/**
	 * 根据主键获取用户信息
	 */
	@Override
	public User getUser(String id) throws Exception{
		User user = null;
		try{
			user = userDao.selectUserById(id);
			//密码解密
			String password = DESUtil.decrypt(user.getPassword(), desKey);
			user.setPassword(password);
		}catch(Exception e){
			user = null;
			throw e;
		}
		return user;
	}

	/**
	 * 更新用户信息，编辑
	 */
	@Override
	public int editUser(User user) throws Exception{
		int ret = 0;
		try{
			String password = DESUtil.encrypt(user.getPassword(), desKey);
			user.setPassword(password);
			ret = userDao.updateUser(user);
		}catch(Exception e){
			ret = -1;
			throw e;
		}
		return ret;
	}

	/**
	 * 删除用户信息，可批量
	 */
	@Override
	public int removeUsers(String[] ids) throws Exception{
		int ret = 0;
		try{
			ret = userDao.deleteUsers(ids);
		}catch(Exception e){
			ret = -1;
			throw e;
		}
		return ret;
	}

	/**
	 * 重置用户密码
	 */
	@Override
	public String resetPwd(String[] ids) throws Exception {
		String initPwd = null;
		try{
			Map<String,Object> map = new HashMap<String,Object>();
			initPwd = DESUtil.encrypt(userInitPassword, desKey);
			map.put("initPwd", initPwd);
			map.put("ids", ids);
			int ret = userDao.updateUser2ResetPwd(map);
			if(ret != ids.length){
				initPwd = null;
			}else{
				initPwd = userInitPassword;
			}
		}catch(Exception e){
			throw e;
		}
		return initPwd;
	}

	/**
	 * 禁用/启用用户
	 */
	@Override
	public int editUseStatus(String status, String[] ids) throws Exception{
		int ret = 0;
		try{
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("status", status);
			map.put("ids", ids);
			ret = userDao.updateUser2Status(map);
			if(ret!=ids.length){
				ret = -1;
			}
		}catch(Exception e){
			ret = -1;
			throw e;
		}
		return ret;
	}

	/**
	 * 校验登录名称是否唯一
	 */
	@Override
	public Long checkLogin(String login) {
		return userDao.selectUserCountByLogin(login);
	}

	/**
	 * 导出符合条件的用户信息
	 */
	@Override
	public List<Map<String, Object>> exportUser(Map<String, String> paramsMap) {
		List<Map<String, Object>> userList = new ArrayList<Map<String,Object>>();
		try {
			userList = userDao.selectUser2Excel(paramsMap);
			if(userList!=null&&userList.size()>0){
				for(Map<String,Object> map : userList){
					if(null!=map.get("PASSWORD")){
						String password = map.get("PASSWORD").toString();
						//解密密码
						String pwd = DESUtil.decrypt(password, desKey);
						map.remove("PASSWORD");
						map.put("PASSWORD", pwd);
					}
				}
			}
		} catch (Exception e) {
			userList = null;
			e.printStackTrace();
		}
		return userList;
	}
}
