import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/service/filter.service'

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  toSearch;
  username=this.filterService.username;
  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
  }
  goToProductsPage(){
    if(this.toSearch=="HVAC Fans"){
      this.filterService.getProducts();
      this.filterService.getProjects();
      this.filterService.getProjectProduct();
    }else{
      alert("Not Exist!")
    }
  }

}
