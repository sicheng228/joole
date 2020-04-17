import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  product;
  page;

  DESCRIPTION = ["manufacturer",'series',"model"]
  TYPE=["use_type", "application", "mounting_location", "accessories", "model_year"]
  TS=["airflow","number_of_fan_speed","sound_at_max_speed","fan_sweep_diameter","weight"]
  TS_plus=["power","operating_voltage","fan_speed","height"]
  unit=[" (CFM)",""," (dBA)"," (in)"," (lbs)"," (W)"," (VAC)"," (RPM)"," (in)"]
  //airflow:5687.0,power_min:2.2,power_max:19.5,
  // operating_voltage_min:94.0,operating_voltage_max:190.0,fan_speed_min:31.0,fan_speed_max:190.0,number_of_fan_speed:8.0,
  // sound_at_max_speed:25.0,fan_sweep_diameter:59.0,height_min:12.3,height_max:99.0,weight:9.0,firm:4,glob:1293},
  constructor(private filterService : FilterService) { }

  ngOnInit(): void {
    this.product=this.filterService.targetProduct;
  }

  mouseEnter(page){
    this.page=page;
  }
}
