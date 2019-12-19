import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/model/delivery';
import { UserServiceService } from 'src/app/user-service.service';
import { DatastorageService } from 'src/app/datastorage.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class CreateDeliveryComponent implements OnInit {
  user: User=new User();

  submitted= false;
  delivery: Delivery = new Delivery();
  deliveryResponse:String="welcome"
  
    constructor(private userService : UserServiceService,private dataStorage:DatastorageService ) { }
  
    ngOnInit() {
  this.dataStorage.getCreateDeliveryResponse().subscribe(
    t =>{
      this.deliveryResponse = t;
    }
  )
    }
  
  
    createDelivery(): void{
      this.userService.createDelivery(this.delivery)
  
    }
    newUser(): void{
      this.submitted = false;
      this.user=new User;
    }
  
    save(){
      this.userService.createDelivery2(this.user)
      .subscribe(
        data=>{
          console.log(data);
          this.submitted = true;
        },
        error=>console.log(error));
      this.user=new User;
        
      
    }
  onSubmit(){
    this.save();
  }
  }
  