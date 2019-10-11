import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NavComponent } from './common/nav/nav.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductAgComponent } from './pages/product-ag/product-ag.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    WeatherComponent,
    ProductComponent,
    ProductAgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
