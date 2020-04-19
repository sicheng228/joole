import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'joole';
  constructor(
    private authService: AuthService,
    // private errorService: ErrorService
  ) {}
  OnInit(){
        this.authService.autoAuthUser();
  }
}
