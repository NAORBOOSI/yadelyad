import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateDeliveryComponent } from './component/create-delivery/create-delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDeliveryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
