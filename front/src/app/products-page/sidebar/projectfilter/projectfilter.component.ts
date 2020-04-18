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

  constructor(private filterService:FilterService) { }

  ngOnInit(): void {
  }

}
