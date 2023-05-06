import { Component } from '@angular/core';

@Component({
  selector: 'app-water-consumption',
  templateUrl: './water-consumption.component.html',
  styleUrls: ['./water-consumption.component.css']
})
export class WaterConsumptionComponent {
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
