import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatastorageService {
  createGettingResponse:BehaviorSubject<String> = new BehaviorSubject <String>("");
  CreateDeliveryResponse:BehaviorSubject<String> = new BehaviorSubject <String>("");
  CreateCompanyResponse:BehaviorSubject<String> = new BehaviorSubject <String>("");

public setCreateGettingResponse (res:string):void{
  this.createGettingResponse.next(res);
};
public getCreateGettingResponse():BehaviorSubject<String>{
  return this.createGettingResponse;
};
public setCreateDeliveryResponse (res:string):void{
  this.CreateDeliveryResponse.next(res);
};
public getCreateDeliveryResponse():BehaviorSubject<String>{
  return this.CreateDeliveryResponse;
};
public setCreateCompanyResponse (res:string):void{
  this.CreateCompanyResponse.next(res);
};
public getCreateCompanyResponse():BehaviorSubject<String>{
  return this.CreateCompanyResponse;
};


constructor() { }
}
