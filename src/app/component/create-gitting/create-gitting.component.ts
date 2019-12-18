import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Getting } from 'src/app/model/getting';
import { UserServiceService } from 'src/app/user-service.service';
import { DatastorageService } from 'src/app/datastorage.service';

@Component({
  selector: 'app-create-gitting',
  templateUrl: './create-gitting.component.html',
  styleUrls: ['./create-gitting.component.css']
})
export class CreateGittingComponent implements OnInit {
  user: User=new User();

  submitted= false;
  getting: Getting = new Getting();
  gettingResponse:String="welcome"
  
    constructor(private userService : UserServiceService,private dataStorage:DatastorageService ) { }
  
    ngOnInit() {
  this.dataStorage.getCreateGettingResponse().subscribe(
    t =>{
      this.gettingResponse = t;
    }
  )
    }
  
  
    createGetting(): void{
      this.userService.createGetting(this.getting)
  
    }
    newUser(): void{
      this.submitted = false;
      this.user=new User;
    }
  
    save(){
      this.userService.createGetting1(this.user)
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
  
