import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/service/filter.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  productsToCompare;

  constructor( private filterService: FilterService) { }

  ngOnInit(): void {
    this.products=this.filterService.products;
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
    console.log(this.productsToCompare);
  }
  goToCompare(){
    this.filterService.setCompareProducts(this.productsToCompare);
  }
}
