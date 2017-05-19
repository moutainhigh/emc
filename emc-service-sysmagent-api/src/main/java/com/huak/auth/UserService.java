package com.huak.auth;

import java.util.List;
import java.util.Map;

import com.huak.auth.model.User;
import com.huak.auth.model.vo.OrgEmpVo;
import com.huak.common.page.Page;
import com.huak.common.page.PageResult;

public interface UserService {

	/**
	 * 分页查询用户信息
	 * @param paramsMap 查询条件
	 * @param page 分页信息
	 * @return
	 */
	PageResult<User> queryByPage(Map<String, String> paramsMap, Page page);

	/**
	 * 查询org下的员工
	 * @param orgId
	 * @return
	 */
	List<OrgEmpVo> queryOrgEmpByOrgId(String orgId);

	/**
	 * 添加用户信息
	 * @param user
	 * @return
	 * @throws RuntimeException
	 */
	int addUser(User user) throws RuntimeException;

	/**
	 * 获取用户信息，根据主键
	 * @param id
	 * @return
	 */
	User getUser(String id) throws Exception;

	/**
	 * 编辑用户信息 
	 * @param user
	 * @return
	 * @throws Exception
	 */
	int editUser(User user) throws Exception;

	/**
	 * 删除用户信息
	 * @param ids
	 * @return
	 * @throws Exception
	 */
	int removeUsers(String[] ids) throws Exception;

	/**
	 * 重置用户密码
	 * @param ids
	 * @return
	 * @throws Exception
	 */
	String resetPwd(String[] ids) throws Exception;

	/**
	 * 禁用/启用用户
	 * @param status
	 * @param ids
	 * @return
	 * @throws Exception
	 */
	int editUseStatus(String status, String[] ids) throws Exception;

	/**
	 * 根据登录名称校验登录名称是否唯一
	 * @param login
	 * @return
	 */
	Long checkLogin(String login);

	/**
	 * 导出符合条件的用户信息
	 * @param paramsMap
	 * @return
	 */
	List<Map<String, Object>> exportUser(Map<String, String> paramsMap);

}
