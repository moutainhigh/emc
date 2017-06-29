package com.huak.sys.model;

import java.io.Serializable;

public class EnergyProject implements Serializable {
    /**
     *主键
     * @preserve 声明此方法不被JOC混淆
     */
    private String id;

    /**
     *组织机构主键
     * @preserve 声明此方法不被JOC混淆
     */
    private String orgId;

    /**
     *采暖季主键
     * @preserve 声明此方法不被JOC混淆
     */
    private String seasonId;

    /**
     *计划能耗
     * @preserve 声明此方法不被JOC混淆
     */
    private Double num;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getOrgId() {
        return orgId;
    }

    public void setOrgId(String orgId) {
        this.orgId = orgId == null ? null : orgId.trim();
    }

    public String getSeasonId() {
        return seasonId;
    }

    public void setSeasonId(String seasonId) {
        this.seasonId = seasonId == null ? null : seasonId.trim();
    }

    public Double getNum() {
        return num;
    }

    public void setNum(Double num) {
        this.num = num;
    }
}