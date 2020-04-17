import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() { }
  show=true;
  ngOnInit(): void {
  }
  showprd(){
    this.show=true;
  }
  showprj(){
    this.show=false;
  }

}
