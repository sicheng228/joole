package com.itlize.joole.Pojo;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;

@Entity
@Table
public class Product {

    @Id
    @GeneratedValue
    private Integer pid;
    private String manufacturer;
    private String model;
    private String series;
    private String use_type;
    private String application;
    private String mounting_location;
    private String accessories;
    private Integer model_year;
    private Double airflow;
    private Double power_min;
    private Double power_max;
    private Double operating_voltage_min;
    private Double operating_voltage_max;
    private Double fan_speed_min;
    private Double fan_speed_max;
    private Double number_of_fan_speed;
    private Double sound_at_max_speed;
    private Double fan_sweep_diameter;
    private Double height_min;
    private Double height_max;
    private Double weight;
    private Integer firm;
    private Integer glob;
    private String detail;
    private String sale_name;
    private String sale_phone;
    private String sale_email;
    private String sale_web;
    private String manu_department;
    private String manu_phone;
    private String manu_email;
    private String manu_web;

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
    }

    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    public String getSale_name() {
        return sale_name;
    }

    public void setSale_name(String sale_name) {
        this.sale_name = sale_name;
    }

    public String getSale_phone() {
        return sale_phone;
    }

    public void setSale_phone(String sale_phone) {
        this.sale_phone = sale_phone;
    }

    public String getSale_email() {
        return sale_email;
    }

    public void setSale_email(String sale_email) {
        this.sale_email = sale_email;
    }

    public String getSale_web() {
        return sale_web;
    }

    public void setSale_web(String sale_web) {
        this.sale_web = sale_web;
    }

    public String getManu_department() {
        return manu_department;
    }

    public void setManu_department(String manu_department) {
        this.manu_department = manu_department;
    }

    public String getManu_phone() {
        return manu_phone;
    }

    public void setManu_phone(String manu_phone) {
        this.manu_phone = manu_phone;
    }

    public String getManu_email() {
        return manu_email;
    }

    public void setManu_email(String manu_email) {
        this.manu_email = manu_email;
    }

    public String getManu_web() {
        return manu_web;
    }

    public void setManu_web(String manu_web) {
        this.manu_web = manu_web;
    }

    // must have getter and setter then use json mapper
    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getSeries() {
        return series;
    }

    public void setSeries(String series) {
        this.series = series;
    }

    public String getUse_type() {
        return use_type;
    }

    public void setUse_type(String use_type) {
        this.use_type = use_type;
    }

    public String getApplication() {
        return application;
    }

    public void setApplication(String application) {
        this.application = application;
    }

    public String getMounting_location() {
        return mounting_location;
    }

    public void setMounting_location(String mounting_location) {
        this.mounting_location = mounting_location;
    }

    public String getAccessories() {
        return accessories;
    }

    public void setAccessories(String accessories) {
        this.accessories = accessories;
    }

    public Integer getModel_year() {
        return model_year;
    }

    public void setModel_year(Integer model_year) {
        this.model_year = model_year;
    }

    public Double getAirflow() {
        return airflow;
    }

    public void setAirflow(Double airflow) {
        this.airflow = airflow;
    }

    public Double getPower_min() {
        return power_min;
    }

    public void setPower_min(Double power_min) {
        this.power_min = power_min;
    }

    public Double getPower_max() {
        return power_max;
    }

    public void setPower_max(Double power_max) {
        this.power_max = power_max;
    }

    public Double getOperating_voltage_min() {
        return operating_voltage_min;
    }

    public void setOperating_voltage_min(Double operating_voltage_min) {
        this.operating_voltage_min = operating_voltage_min;
    }

    public Double getOperating_voltage_max() {
        return operating_voltage_max;
    }

    public void setOperating_voltage_max(Double operating_voltage_max) {
        this.operating_voltage_max = operating_voltage_max;
    }

    public Double getFan_speed_min() {
        return fan_speed_min;
    }

    public void setFan_speed_min(Double fan_speed_min) {
        this.fan_speed_min = fan_speed_min;
    }

    public Double getFan_speed_max() {
        return fan_speed_max;
    }

    public void setFan_speed_max(Double fan_speed_max) {
        this.fan_speed_max = fan_speed_max;
    }

    public Double getNumber_of_fan_speed() {
        return number_of_fan_speed;
    }

    public void setNumber_of_fan_speed(Double number_of_fan_speed) {
        this.number_of_fan_speed = number_of_fan_speed;
    }

    public Double getSound_at_max_speed() {
        return sound_at_max_speed;
    }

    public void setSound_at_max_speed(Double sound_at_max_speed) {
        this.sound_at_max_speed = sound_at_max_speed;
    }

    public Double getFan_sweep_diameter() {
        return fan_sweep_diameter;
    }

    public void setFan_sweep_diameter(Double fan_sweep_diameter) {
        this.fan_sweep_diameter = fan_sweep_diameter;
    }

    public Double getHeight_min() {
        return height_min;
    }

    public void setHeight_min(Double height_min) {
        this.height_min = height_min;
    }

    public Double getHeight_max() {
        return height_max;
    }

    public void setHeight_max(Double height_max) {
        this.height_max = height_max;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Integer getFirm() {
        return firm;
    }

    public void setFirm(Integer firm) {
        this.firm = firm;
    }

    public Integer getGlob() {
        return glob;
    }

    public void setGlob(Integer glob) {
        this.glob = glob;
    }

}
