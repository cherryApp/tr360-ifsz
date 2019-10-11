import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductAgComponent } from './pages/product-ag/product-ag.component';


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
    component: ProductComponent
  },
  {
    path: "product-ag",
    component: ProductAgComponent
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
