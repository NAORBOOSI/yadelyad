import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'yadelyadApp';
  selectedDate: any;

  onSelect(event){
    console.log(event);
    this.selectedDate= event;
  }
}
