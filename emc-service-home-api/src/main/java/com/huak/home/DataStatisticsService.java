package com.huak.home;

import com.huak.data.vo.LookupTableTime;
import com.huak.data.vo.Weather;

import java.util.List;
import java.util.Map;

/**
 * Copyright (C), 2009-2012, 北京华热科技发展有限公司.<BR>
 * ProjectName:emc<BR>
 * File name:  com.huak.home<BR>
 * Author:  liuhe  <BR>
 * Project:emc    <BR>
 * Version: v 1.0      <BR>
 * Date: 2017/11/21<BR>
 * Description:     <BR>
 * Function List:  <BR>
 */
public interface DataStatisticsService {

    LookupTableTime getLookupTableTime(Map<String,Object> params);

    List<Weather> getWeatherByDate(Map<String,Object> params);
}