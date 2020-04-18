import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

import { environment } from "../../environments/environment";
import { User } from "src/app/auth/User.model";
import { FilterService } from '../service/filter.service';

const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, private filterService:FilterService) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(username: string, password: string) {
    const user: User = { username : username, password: password };
    console.log(user);

    this.http.post(BACKEND_URL + "/users/signup",  user).subscribe(
      rep => {
        this.router.navigate(["/login"]);
        alert("Successfully signed up! Please Log in!")
      },
      error => {
        this.authStatusListener.next(false);
      }
    );
  }

  login(username: string, password: string) {
    const headers= new HttpHeaders({Authorization:"Basic "+btoa(username +':'+password)})
    this.http.get<{ token: string}>(
        BACKEND_URL + "/users/login",
        {headers}
      )
      .subscribe(
        response => {
          const token = response.token;
          this.token = token;
          if (token) {
            // console.log("yeah in!")
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.saveUser(token);
            this.filterService.setUsername(username);
            this.router.navigate(["/homesearch"]);
          }
        },
        error => {
          this.authStatusListener.next(false);
          alert("Please signup or check Username and Password")
        }
      );
  }
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.clearUser();
    this.router.navigate(["/login"]);
  }


  private saveUser(token: string) {
    localStorage.setItem("token", token);
  }

  private clearUser() {
    localStorage.removeItem("token");
  }

  private getUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    return {
      token: token
    };
  }
}
