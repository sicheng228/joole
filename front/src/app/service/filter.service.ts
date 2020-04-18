import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from "../../environments/environment";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";


const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })

export class FilterService {
  private subject = new Subject<any>();
  targetProduct;
  compareProducts;
  products;
  projects;
  pp;
  username;
  projectsName;
  constructor(private http: HttpClient,private router: Router){}

  pictures={"Series1-1-1":"https://images-na.ssl-images-amazon.com/images/I/51LY5Nw-ZnL._AC_SL1000_.jpg",
  "Series2-2-2":"https://images-na.ssl-images-amazon.com/images/I/710BH9NjquL._AC_SL1500_.jpg",
  "Series3-3-3":"https://images-na.ssl-images-amazon.com/images/I/61hJW0qoshL._AC_SL1500_.jpg",
  "Series404-4":"https://images-na.ssl-images-amazon.com/images/I/81FBhfSN43L._AC_SL1500_.jpg",
  "Series5-5-5-5-5-":"https://images-na.ssl-images-amazon.com/images/I/51PruL-bL0L._AC_SL1000_.jpg"};
  setTargetProduct(item){
    this.targetProduct=item;
  }
  setCompareProducts(items){
    this.compareProducts=items;
  }
  sendLimits(list){
    this.subject.next(list);
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  getProducts(){
    this.http.get<any>(BACKEND_URL + `/products/fans`).subscribe(rep=>{
      this.products=rep;
      console.log(this.products);
      this.router.navigate(["/productsPage"]);
    });
  }
  setUsername(un){
    this.username=un;
  }
  getProjectProduct(){
    this.http.get<any>(BACKEND_URL + `/pp/getAll`).subscribe(rep=>{
      let mySet = new Set();
      this.pp=rep;
    });
  }
  getProjects(){
    this.http.get<any>(BACKEND_URL + `/projects/getProjects`).subscribe(rep=>{
      let mySet = new Set();
      this.projects=rep;})
    }
    updatePP(newPP){
      this.pp.push(newPP);
      this.http.post(BACKEND_URL + "/pp/update", this.pp).subscribe(
        rep => {
          this.router.navigate(["/login"]);
          alert("Added successfully!")
        });

    }

  }
