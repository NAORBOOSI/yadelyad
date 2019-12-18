import { NgModule } from '@angular/core';
import { Routes, RouterModule, ROUTES } from '@angular/router';
import { ListDeliveryComponent } from '../component/list-delivery/list-delivery.component';
import { ListGettingComponent } from '../component/list-getting/list-getting.component';
import { ListCompanyComponent } from '../component/list-company/list-company.component';
import { DeliveryComponent } from '../component/delivery/delivery.component';
import { GettingComponent } from '../component/getting/getting.component';
import { CompanyComponent } from '../component/company/company.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { CreateDeliveryComponent } from '../component/create-delivery/create-delivery.component';
import { HomepageComponent } from '../component/homepage/homepage.component';
import { CreateGittingComponent } from '../component/create-gitting/create-gitting.component';
import { SearchComponent } from '../component/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'list-delivery', component: ListDeliveryComponent },
  { path: 'list-getting', component: ListGettingComponent },
  { path: 'list-company', component: ListCompanyComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'getting', component: GettingComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'home-page', component: HomepageComponent },
  { path: 'profile', component: ProfileComponent },


  {path:'company', component:CompanyComponent},
  { path: 'addGetting', component: CreateGittingComponent },
  { path: 'addDelivery', component: CreateDeliveryComponent },
  { path: 'findByFirstName', component: SearchComponent },
  { path: 'addCompany', component: CreateGittingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
