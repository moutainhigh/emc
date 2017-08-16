package com.huak.home.dao.thiredpage;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

/**
 * Created by MR-BIN on 2017/8/2.
 */
@Repository
public interface ThiredpageEnergyDao {
    /**
     *三级页面-集团的各个能源类型的能耗趋势图
     * sunbinbin
     * @return map
     */
    List<Map<String,Object>> getDatasAll(Map<String, Object> params);

    /**
     *三级页面-源、网、站、线、户的各个能源类型的能耗趋势图
     * sunbinbin
     * @return map
     */
    List<Map<String,Object>> getDatas(Map<String, Object> params);

    /**
     *三级页面-换热站排名趋势图
     * sunbinbin
     * @return string
     */
    List<Map<String,Object>> selectassessment(Map<String, Object> paramsMap);

    /**
     *三级页面-表单数据
     * sunbinbin
     * @return string
     */
    List<Map<String,Object>> getTables(Map<String, Object> params);
    /**
     *三级页面-表单数据-用能单位7天的总量
     * sunbinbin
     * @return string
     */
    List<Map<String,Object>> getTotal(Map<String, Object> params);
}
