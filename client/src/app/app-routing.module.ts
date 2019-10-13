import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductAgComponent } from './pages/product-ag/product-ag.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helpers/auth.guard';


const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  }, 
  {
    path: "weather",
    component: WeatherComponent
  }, 
  {
    path: "product",
    component: ProductComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "product-ag",
    component: ProductAgComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
