import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/service/filter.service';


@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent implements OnInit {
  ts=[{filterName:'Air flow (CFM)',filterRange:[2000,10000],max:10000,min:2000},
      {filterName:'Max power (W)',filterRange:[9.84,96.52],max:96.52,min:9.84},
      {filterName:'Sound at max speed (dBA)',filterRange:[20,80],max:80,min:20},
      {filterName:'Fan sweep diameter (in)',filterRange:[18,96],max:96,min:18}];

  ps=[{filterName:'Firm',filterRange:[0,15],max:15,min:0},
      {filterName:'Global',filterRange:[0,1500],max:1500,min:0}];
  year1;
  year2;

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }
  limits(){
    var list = new Array();
    this.ts.forEach(element => {
      list.push(element.filterRange)
    });
    this.ps.forEach(element => {
      list.push(element.filterRange)
    });
    this.filterService.sendLimits(list);
  }
  clear(){
    var list = new Array();
    this.ts.forEach(element => {
      list.push([element.min,element.max])
    });
    this.ps.forEach(element => {
      list.push([element.min,element.max])
    });
    this.filterService.sendLimits(list);
    console.log(list);
  }

}
