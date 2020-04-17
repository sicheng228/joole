import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })

export class FilterService {
  constructor(){}
  products=
  [{"manufacturer":"wwwwwww","model":"P-awdbk124697","series":"world","use_type":"apple","application":"banae",
  mounting_location:"roof",accessories:"wih light",model_year:2019,airflow:6000.0,power_min:2.2,power_max:19.5,
  operating_voltage_min:94.0,operating_voltage_max:190.0,fan_speed_min:31.0,fan_speed_max:190.0,number_of_fan_speed:8.0,
  sound_at_max_speed:25.0,fan_sweep_diameter:59.0,height_min:12.3,height_max:99.0,weight:9.0,firm:4,glob:1293},
  {manufacturer:"cafhwerh",model:"P-vadf",series:"world",use_type:"apple",application:"banae",
  mounting_location:"roof",accessories:"wih light",model_year:2006,airflow:5687.0,power_min:2.2,power_max:19.5,
  operating_voltage_min:94.0,operating_voltage_max:190.0,fan_speed_min:31.0,fan_speed_max:190.0,number_of_fan_speed:8.0,
  sound_at_max_speed:25.0,fan_sweep_diameter:59.0,height_min:12.3,height_max:99.0,weight:9.0,firm:4,glob:1293},
  {manufacturer:"asdfas",model:"P-sfdg",series:"world",use_type:"apple",application:"banae",
  mounting_location:"roof",accessories:"wih light",model_year:2019,airflow:4000.0,power_min:2.2,power_max:19.5,
  operating_voltage_min:94.0,operating_voltage_max:190.0,fan_speed_min:31.0,fan_speed_max:190.0,number_of_fan_speed:8.0,
  sound_at_max_speed:25.0,fan_sweep_diameter:59.0,height_min:12.3,height_max:99.0,weight:9.0,firm:4,glob:1293},
  {manufacturer:"sdfgasg",model:"P-jdty",series:"world",use_type:"apple",application:"banae",
  mounting_location:"roof",accessories:"wih light",model_year:2019,airflow:4099.0,power_min:2.2,power_max:19.5,
  operating_voltage_min:94.0,operating_voltage_max:190.0,fan_speed_min:31.0,fan_speed_max:190.0,number_of_fan_speed:8.0,
  sound_at_max_speed:25.0,fan_sweep_diameter:59.0,height_min:12.3,height_max:99.0,weight:9.0,firm:4,glob:1293},
  {manufacturer:"wwvvggwwwww",model:"P-asgr",series:"world",use_type:"apple",application:"banae",
  mounting_location:"roof",accessories:"wih light",model_year:2019,airflow:6000.0,power_min:2.2,power_max:19.5,
  operating_voltage_min:94.0,operating_voltage_max:190.0,fan_speed_min:31.0,fan_speed_max:200.0,number_of_fan_speed:8.0,
  sound_at_max_speed:25.0,fan_sweep_diameter:59.0,height_min:12.3,height_max:99.0,weight:9.0,firm:4,glob:1293},
  {manufacturer:"dsfas",model:"P-34svg",series:"world",use_type:"apple",application:"banae",
  mounting_location:"roof",accessories:"wih light",model_year:2019,airflow:6000.0,power_min:2.2,power_max:19.5,
  operating_voltage_min:94.0,operating_voltage_max:190.0,fan_speed_min:31.0,fan_speed_max:190.0,number_of_fan_speed:8.0,
  sound_at_max_speed:25.0,fan_sweep_diameter:59.0,height_min:12.3,height_max:99.0,weight:9.0,firm:4,glob:1293},
  {manufacturer:"freqgr",model:"P-hl87",series:"world",use_type:"apple",application:"banae",
  mounting_location:"roof",accessories:"wih light",model_year:2019,airflow:6000.0,power_min:2.2,power_max:19.5,
  operating_voltage_min:94.0,operating_voltage_max:190.0,fan_speed_min:31.0,fan_speed_max:190.0,number_of_fan_speed:8.0,
  sound_at_max_speed:25.0,fan_sweep_diameter:59.0,height_min:12.3,height_max:99.0,weight:9.0,firm:4,glob:1293}]

  targetProduct;
  compareProducts;

  setTargetProduct(item){
    this.targetProduct=item;
  }
  setCompareProducts(items){
    this.compareProducts=items;
  }
}
