import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateDeliveryComponent } from './component/create-delivery/create-delivery.component';
import { CreateGittingComponent } from './component/create-gitting/create-gitting.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDeliveryComponent,
    CreateGittingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
