import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarheader',
  templateUrl: './sidebarheader.component.html',
  styleUrls: ['./sidebarheader.component.css']
})
export class SidebarheaderComponent implements OnInit {
  show=true;
  constructor() { }

  ngOnInit(): void {
  }
  showprd(){
    this.show=true;
  }
  showprj(){
    this.show=false;
  }

}
