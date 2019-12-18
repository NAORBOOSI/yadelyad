import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { Company } from 'src/app/model/company';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {

  dataSource = new userDataSource(this.userService);
  displayedColumns: string[] = ['position', 'name', 'address', 'phoneNumber','email'];
  // @ViewChild (MatSort) sort : MatSort;
  
company : Company = new Company();

  listCompany: Observable<Company[]>;
//  parents : Observable<Parents[]>;
  constructor(private userService: UserServiceService) { }
 
  ngOnInit() {
    this.reloadData();
    // this.reloadData.sort=this.sort;
  }

  
  deleteCustomers() {
    this.userService.deleteAllCompany()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.listCompany = this.userService.getAllCompany();
  }

}
export class userDataSource extends DataSource<any>{
 
constructor(private userService: UserServiceService){
  super();
}
connect():Observable<Company[]>{
  return this.userService.getAllCompany();
}
disconnect(){

}
}