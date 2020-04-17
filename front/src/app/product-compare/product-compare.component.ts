import { Component, OnInit } from '@angular/core';
import { FilterService } from "src/app/service/filter.service";

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.css']
})
export class ProductCompareComponent implements OnInit {
  productsToCompare;
  pictures=this.filterService.pictures;

  DESCRIPTION = ["manufacturer",'series',"model"]
  TYPE=["use_type", "application", "mounting_location", "accessories", "model_year"]
  TS=["airflow","number_of_fan_speed","sound_at_max_speed","fan_sweep_diameter","weight"]
  TS_plus=["power","operating_voltage","fan_speed","height"]
  unit=[" (CFM)",""," (dBA)"," (in)"," (lbs)"," (W)"," (VAC)"," (RPM)"," (in)"]
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
    this.productsToCompare=this.filterService.compareProducts;
  }



}
