import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/service/filter.service'

@Component({
  selector: 'app-projectfilter',
  templateUrl: './projectfilter.component.html',
  styleUrls: ['./projectfilter.component.css']
})
export class ProjectfilterComponent implements OnInit {

  projects=this.filterService.projects;
  pp=this.filterService.pp;

  constructor(private filterService:FilterService) {
    }

  ngOnInit(): void {
    // console.log(this.pp);
    // console.log(this.filterService.projects);
  }
  deleteThisPP(item,i){
    this.filterService.pp.splice(i,1);
    this.filterService.deletePP(item);
  }

}
