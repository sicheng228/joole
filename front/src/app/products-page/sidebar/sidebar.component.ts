import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  show=false;
  ngOnInit(): void {
  }
  showprd(){
    this.show=false;
  }
  showprj(){
    this.show=true;
  }

}
