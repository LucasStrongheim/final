import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caloric-intake',
  templateUrl: './caloric-intake.component.html',
  styleUrls: ['./caloric-intake.component.css']
})

export class CaloricIntakeComponent implements OnInit {
 
  age: number = 0;
  height: number = 0;
  weight: number = 0;
  bmi: number = 0;
  caloricIntake: string = '';

  ngOnInit(): void {
  }

  // Calculate BMR based on user input
  calculateBMI(weight: number, height: number) {
      this.bmi = (Math.round((weight / (height*height))*10))/10;
  }
  
  calculateCaloricIntake(age: number) {
    this.caloricIntake = "Your daily calorie intake should be around "
    if (age < 20){
      this.caloricIntake += "1,800 - 2,400 calories";
        }else if(age < 40){
      this.caloricIntake += "1,800 - 2,200 calories";
        }else if(this.age < 50){
      this.caloricIntake += "1,600 - 2,200 calories";
        }else{
      this.caloricIntake += "1,600 - 2,000 calories";
    }
  }
}
