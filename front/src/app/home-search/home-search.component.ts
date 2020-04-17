import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {
  toSearch;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }
  goToProductsPage(){
    if(this.toSearch=="HVAC Fans"){
      this.router.navigate([`/productsPage`]);
    }else{
      alert("Not Exist!")
    }
  }

}
