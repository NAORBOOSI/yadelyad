import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateDeliveryComponent } from './component/create-delivery/create-delivery.component';
import { CreateGittingComponent } from './component/create-gitting/create-gitting.component';
import { CreateCompanyComponent } from './component/create-company/create-company.component';
import { ListGettingComponent } from './component/list-getting/list-getting.component';
import { ListDeliveryComponent } from './component/list-delivery/list-delivery.component';
import { ListCompanyComponent } from './component/list-company/list-company.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateDeliveryComponent,
    CreateGittingComponent,
    CreateCompanyComponent,
    ListGettingComponent,
    ListDeliveryComponent,
    ListCompanyComponent,
    HttpClient
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
