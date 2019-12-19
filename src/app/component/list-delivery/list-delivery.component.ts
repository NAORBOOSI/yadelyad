import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/model/delivery';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { UserServiceService } from 'src/app/user-service.service';
import{ DataSource } from '@angular/cdk/collections'

@Component({
  selector: 'app-list-delivery',
  templateUrl: './list-delivery.component.html',
  styleUrls: ['./list-delivery.component.css']
})
export class ListDeliveryComponent implements OnInit {

  dataSource = new userDataSource(this.userService);
  displayedColumns: string[] = ['position', 'name', 'lastName', 'Id','phoneNumber','emailAddress','actions'];
  // @ViewChild (MatSort) sort : MatSort;
  

  delivery:Delivery =new Delivery();

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
    this.userService.deleteAllDelivery()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
    this.user = this.userService.getDeliveryList();
  }

}
export class userDataSource extends DataSource<any>{
 
constructor(private userService: UserServiceService){
  super();
}
connect():Observable<Delivery[]>{
  return this.userService.getAllDelivery();
}
disconnect(){

}
}