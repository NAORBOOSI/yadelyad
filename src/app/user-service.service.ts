import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from './model/delivery';
import { Getting } from './model/getting';
import { HttpClient } from '@angular/common/http';
import { Company } from './model/company';
import { DataStorageService } from './data-storage.service';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient,private dataStorage:DataStorageService) { }
 
  getAllDelivery(): Observable<Delivery[]>{
    return this.http.get<Delivery[]>(this.baseUrl +'/listDelivery');
  }
getAllGetting(): Observable<Getting[]>{
    return this.http.get<Getting[]>(this.baseUrl+'/listAllGetting');
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
    this.http.post(this.baseUrl+'/getting',getting).subscribe(
      data=>{
        console.log(data);
        
        this.dataStorage.setCreateGettingResponse(JSON.stringify(data));
      },
      error=>console.log(error));
    
  }
 

  createDelivery(delivery : Delivery): void{
    this.http.post(this.baseUrl+'/Delivery',delivery).subscribe(
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
  this.http.post(this.baseUrl+'/appendCompany',company).subscribe(
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
  
  createCustomer(customer : any): Observable<any>{
    return this.http.post('${this.baseUrl}/getting',customer);
  }
  createCustomer2(customer : any): Observable<any>{
    return this.http.post('${this.baseUrl}/${Delivery}',customer);
  }
  createCustomer3(customer : any): Observable<any>{
    return this.http.post('${this.baseUrl}/${Company}',customer);
  }
  updateCustomer(parentId :string , value: any):Observable<any>{
    return this.http.put('${this.baseUrl}/${id}' , value);
  }
  delete(parentId : string) : Observable<any>{
     return this.http.delete('${this.baseUrl}/${id}');
   }
  
  getParentsList(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  getChildrenList(): Observable<any>{
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



