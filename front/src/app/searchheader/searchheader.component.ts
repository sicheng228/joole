import { Component, OnInit } from '@angular/core';
import { AuthService} from "../service/auth.service";
import { FilterService} from "../service/filter.service"

@Component({
  selector: 'app-searchheader',
  templateUrl: './searchheader.component.html',
  styleUrls: ['./searchheader.component.css']
})
export class SearchheaderComponent implements OnInit {
  username=this.filterService.username;;

  constructor(private authService:AuthService,private filterService:FilterService) { }

  ngOnInit(): void {
  }
  logOut(){
    this.authService.logout();
  }

}
