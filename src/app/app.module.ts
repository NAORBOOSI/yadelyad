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
import { DeliveryComponent } from './component/delivery/delivery.component';
import { GettingComponent } from './component/getting/getting.component';
import { CompanyComponent } from './component/company/company.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SearchComponent } from './component/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule,
         MatToolbarModule,
         MatListModule
                    
} from '@angular/material';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDeliveryComponent,
    CreateGittingComponent,
    CreateCompanyComponent,
    ListGettingComponent,
    ListDeliveryComponent,
    ListCompanyComponent,
  
    DeliveryComponent,
    GettingComponent,
    CompanyComponent,
    HomepageComponent,
    ProfileComponent,
    SearchComponent,
    HeaderComponent,
    SidenavListComponent,
    

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
     MatCheckboxModule,
     MatIconModule,
    AppRoutingModule,
     FormsModule,
    HttpClientModule,
     MatButtonModule,
     MatInputModule,
     MatTableModule,
     MatSortModule,
     MatPaginatorModule,
    MatMenuModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatCardModule,
     MatSidenavModule,
     MatToolbarModule,
     MatListModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
