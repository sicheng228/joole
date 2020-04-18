import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../service/auth.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  uname;
  pword1;
  pword2;
  private authStatusSub: Subscription;
  // isLoading = false;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
      }
    );
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
  onSignup(form: NgForm) {
    if (form.valid&&this.pword1==this.pword2) {
      this.authService.createUser(form.value.username, form.value.password1);
    }else return;
  }
}
