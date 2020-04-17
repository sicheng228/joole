import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/service/filter.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  initial;
  limits;
  productsFiltered;
  subscription: Subscription;
  productsToCompare;
  pictures=this.filterService.pictures;



  constructor( private filterService: FilterService) {
    this.subscription = this.filterService.getMessage().subscribe(list => {
           if (list) {
             this.limits=list;
             this.products=this.initial.filter(product=>{
               if(product.airflow>=this.limits[0][0]&&product.airflow<=this.limits[0][1]&&product.power_max>=this.limits[1][0]&&product.power_max<=this.limits[1][1]&&
               product.sound_at_max_speed>=this.limits[2][0]&&product.sound_at_max_speed<=this.limits[2][1]&&product.fan_sweep_diameter>=this.limits[3][0]&&product.fan_sweep_diameter<=this.limits[3][1]&&
               product.firm>=this.limits[4][0]&&product.firm<=this.limits[4][1]&&product.glob>=this.limits[5][0]&&product.glob<=this.limits[5][1]&&product.model_year>=this.limits[6][0]&&product.model_year<=this.limits[6][1]){
               return true;
             }else return false;});
           } else {
             this.limits = [];
           }
           console.log(list);
           console.log(this.products);
         });}

  ngOnInit(): void {
    this.initial=this.filterService.products;
    this.products=this.initial
    this.productsToCompare=[];
  }

  targetThisProduct(item){
    this.filterService.setTargetProduct(item);
  }

  handleCheckbox(event, item) {
    if (event.target.checked) {
      this.productsToCompare.push(item);
    } else {
      this.productsToCompare = this.productsToCompare.filter(
        p => p !== item
      );
    }
  }
  goToCompare(){
    this.filterService.setCompareProducts(this.productsToCompare);
  }
}
