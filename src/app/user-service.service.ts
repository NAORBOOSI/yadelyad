import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from './model/delivery';
import { Getting } from './model/getting';
import { HttpClient } from '@angular/common/http';
import { Company } from './model/company';
import { DatastorageService } from './datastorage.service';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient,private dataStorage:DatastorageService) { }
 
  getAllDelivery(): Observable<Delivery[]>{
    return this.http.get<Delivery[]>(this.baseUrl +'/listDelivery');
  }
  getAllGetting(): Observable<Getting[]>{
    return this.http.get<Getting[]>(this.baseUrl+'/listGetting');
  }
 getAllCompany(): Observable<Company[]>{
    return this.http.get<Company[]>(this.baseUrl+'/listAllCompany');
  }
  getDeliveryByFirstName(delivery : any): Observable<any>{
    return this.http.get(this.baseUrl+'/Delivery/${firstName}');
  }
  getGettingByFirstName(getting : any): Observable<any>{
    return this.http.get(this.baseUrl+'/Getting/${firstName}');
  }
  getCompanyByFirstName(company : any): Observable<any>{
    return this.http.get(this.baseUrl+'/Company/${firstName}');
  }
  
  createGetting(getting : Getting): void{
    this.http.post(this.baseUrl+'/Getting',getting).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateGettingResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
 

  createDelivery(delivery : Delivery): void{
    this.http.post(this.baseUrl+'/addDelivery',delivery).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateDeliveryResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
  searchDelivery(delivery : any){
    return this.http.get(this.baseUrl,delivery);
  }
createCompany(company: Company):void{
  this.http.post(this.baseUrl+'/addCompany',company).subscribe(
    data=>{
      console.log(data);
      this.dataStorage.setCreateCompanyResponse(JSON.stringify(data));
    },
    error=>console.log(error));
  
}



  deletedelivery(deliveryId : string){
    this.http.post(this.baseUrl,parent).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateDeliveryResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
  
  createGetting1(getting : any): Observable<any>{
    return this.http.post('${this.baseUrl}/getting',getting);
  }
  createDelivery2(delivery : any): Observable<any>{
    return this.http.post('${this.baseUrl}/${Delivery}',delivery);
  }
  createCompany3(company : any): Observable<any>{
    return this.http.post('${this.baseUrl}/${Company}',company);
  }
  
  delete(parentId : string) : Observable<any>{
     return this.http.delete('${this.baseUrl}/${id}');
   }
  
   getDeliveryList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  getGettingList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  getCompanyList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
 
  deleteAllParent() : Observable<any>{
    return this.http.delete(this.baseUrl+'/parents/delete');
  }
  deleteAllKinder() : Observable<any>{
    return this.http.delete(this.baseUrl+'/Kinder/delete');
  }
 
  deleteAllCildren() : Observable<any>{
    return this.http.delete(this.baseUrl+'/delete');
  }

}



