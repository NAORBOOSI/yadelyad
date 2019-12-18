import { Component, OnInit } from '@angular/core';
import { Getting } from 'src/app/model/getting';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';
import{ DataSource } from '@angular/cdk/collections'

@Component({
  selector: 'app-list-getting',
  templateUrl: './list-getting.component.html',
  styleUrls: ['./list-getting.component.css']
})
export class ListGettingComponent implements OnInit {

  dataSource = new userDataSource(this.userService);
  displayedColumns: string[] = ['position', 'name', 'lastName', 'Id','phoneNumber','emailAdrress','actions'];
  // @ViewChild (MatSort) sort : MatSort;
  

  getting:Getting =new Getting();

  user: Observable<User[]>;
  constructor(private userService:UserServiceService) { }
 
  ngOnInit() {
    this.reloadData();
    // this.reloadData.sort=this.sort;
  }

  details(){
    return this.userService.getByFirstName;
  }
  deleteCustomers() {
    this.userService.deleteAllGetting()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.user = this.userService.getGettingList();
  }

}
export class userDataSource extends DataSource<any>{
 
constructor(private userService: UserServiceService){
  super();
}
connect():Observable<Getting[]>{
  return this.userService.getAllGetting();
}
disconnect(){

}
}