import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  uname;
  pword;
  // isLoading = false;
    private authStatusSub: Subscription;

    constructor(public authService: AuthService) {}

    ngOnInit() {
      this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
        authStatus => {
          // this.isLoading = false;
        }
      );
    }

    onLogin(form: NgForm) {
      if (form.invalid) {
        return;
      }
      // this.isLoading = true;
      this.authService.login(form.value.username, form.value.password);
    }


    ngOnDestroy() {
      this.authStatusSub.unsubscribe();
    }

}
