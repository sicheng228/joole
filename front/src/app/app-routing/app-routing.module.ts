import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSearchComponent} from '../home-search/home-search.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent} from '../signup/signup.component';
import { ProductsPageComponent} from '../products-page/products-page.component';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ProductCompareComponent} from '../product-compare/product-compare.component';
import { TestComponent } from "../test/test.component"
import { AuthGuard} from "src/app/auth/auth.guard"

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'homesearch', component: HomeSearchComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path:'productsPage', component: ProductsPageComponent, canActivate: [AuthGuard]},
  { path:'productsInfo', component: ProductInfoComponent,canActivate: [AuthGuard]},
  { path:'productsCompare', component: ProductCompareComponent,canActivate: [AuthGuard]},
  { path:'test',component:TestComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
