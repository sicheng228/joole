import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';


import { AppComponent } from './app.component';
import { HomeSearchComponent} from './home-search/home-search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent} from './signup/signup.component';
import { SearchheaderComponent } from './searchheader/searchheader.component';
//productPage
import { ProductsPageComponent } from './products-page/products-page.component';
import { SidebarComponent } from './products-page/sidebar/sidebar.component';
import { ProductfilterComponent } from "./products-page/sidebar/productfilter/productfilter.component";
import { ProjectfilterComponent } from "./products-page/sidebar/projectfilter/projectfilter.component";
import { SidebarheaderComponent } from "./products-page/sidebar/sidebarheader/sidebarheader.component";
import { ProductListComponent } from './products-page/product-list/product-list.component';
//productInfo
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductCompareComponent } from './product-compare/product-compare.component';

//Service
import { FilterService } from './service/filter.service';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeSearchComponent,
    LoginComponent,
    SignupComponent,
    SearchheaderComponent,
    SidebarComponent,
    ProductfilterComponent,
    ProjectfilterComponent,
    SidebarheaderComponent,
    ProductListComponent,
    ProductInfoComponent,
    ProductsPageComponent,
    ProductCompareComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
