import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'final';
  count = 0;
  cCount = 0;
  waterCounter(type:String){
    type==='add'? this.count++:this.count--
  }
  calorieCounter(type:String){
    this.cCount +=100;
  }
}
