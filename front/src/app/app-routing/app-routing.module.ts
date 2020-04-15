import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeSearchComponent} from '../home-search/home-search.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent} from '../signup/signup.component';
import { ProductsPageComponent} from '../products-page/products-page.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'homesearch', component: HomeSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path:'productsPage', component: ProductsPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
