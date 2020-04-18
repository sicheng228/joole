import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  projects=[{pid:1,pname:"bla"},{pid:2,pname:"2gue"},{pid:3,pname:"3ggg"}];
  products=[{pdid:4},{pdid:5},{pdid:6},{pdid:7}];
  selected;
  newPP={"product":{pdid:888},"project":{pid:999,pname:"999"}};
  constructor() { }

  ngOnInit(): void {
  }

  getProduct(product,id){
    this.newPP.product=product;
    this.newPP.project=this.projects[id];
    console.log(product);
    console.log(this.projects[id]);
  }
}
