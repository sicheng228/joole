import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  uname;
  pword1;
  pword2;

  constructor() { }

  ngOnInit(): void {
  }
  // ngOnInit() {
  //     this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
  //       authStatus => {
  //         this.isLoading = false;
  //       }
  //     );
  //   }

    onSignup(form: NgForm) {
      if (form.valid&&this.pword1==this.pword2) {
        console.log("yes");
      }else{console.log("no")}
      // this.isLoading = true;
      // this.authService.createUser(form.value.email, form.value.password);
    }
    //
    // ngOnDestroy() {
    //   this.authStatusSub.unsubscribe();
    // }

}
