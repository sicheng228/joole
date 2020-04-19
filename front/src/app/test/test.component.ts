import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  modalData1=[["Use Type","Commercial", "Industrial", "Residential"],["Application","Indoor","Outdoor"],["Mounting Location","Roof","wall","FreeStanding"],["Accessories","With light","Without light"]];
  modalData2=[["Airflow (CFM)"],["Max power (W)"],"Sound at max speed (dBA)","Fan sweep diameter (in)","Height (in)"]

  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
