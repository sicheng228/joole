import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeSearchComponent} from './home-search/home-search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { SearchheaderComponent } from './searchheader/searchheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductfilterComponent } from "./sidebar/producfilter/productfilter.component";
// import { ProjectfilterComponent } from "./sidebar/projectfilter/projectfilter.component";
import { SidebarheaderComponent } from "./sidebar/sidebarheader/sidebarheader.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeSearchComponent,
    LoginComponent,
    SignupComponent,
    SearchheaderComponent,
    SidebarComponent,
    ProductfilterComponent,
    // ProjectfilterComponent,
    SidebarheaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule
    // AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
