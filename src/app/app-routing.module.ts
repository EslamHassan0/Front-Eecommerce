import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Pages/product/product.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegesterComponent } from './Pages/regester/regester.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [

  { path: '', redirectTo: '/Login', pathMatch: 'full' },

  { path: "Product", component: ProductComponent },
  { path: "Regester", component: RegesterComponent },
  { path: "Home", component: HomeComponent },
  { path: "Login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
