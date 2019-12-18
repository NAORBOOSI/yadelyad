import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { UserServiceService } from 'src/app/user-service.service';
import { DatastorageService } from 'src/app/datastorage.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  Company : Company =new Company();
  submitted= false;
   user: User=new User();

  CompanyResponse : String="welcome";
  constructor(private userService :UserServiceService, private dataStorage: DatastorageService) { }

  ngOnInit() {
    this.dataStorage.getCreateCompanyResponse().subscribe(
      t =>{
        this.CompanyResponse= t;
    
  }
    )
}
createCompany(){
  this.userService.createCompany(this.Company)
}

newUser(): void{
  this.submitted = false;
  this.user=new User;
}

save(){
  this.userService.createCompany3(this.user)
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
