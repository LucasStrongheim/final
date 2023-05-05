import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caloric-intake',
  templateUrl: './caloric-intake.component.html',
  styleUrls: ['./caloric-intake.component.css']
})
export class CaloricIntakeComponent implements OnInit {
  // Define variables to hold user input
  age: number = 0;
  height: number = 0;
  weight: number = 0;
  // Define variables to hold calculated values
  bmi: number = 0;
  caloricIntake: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // Calculate BMR based on user input
  calculateBMI(gender: string, age: number, height: number, weight: number, activityLevel: number) {
    // Calculate BMR based on gender, age, height, and weight
    let bmi: number;
    if (gender === 'male') {
      bmi = 88.4 + (13.4 * weight) + (4.8 * height) - (5.68 * age);
    } else {
      bmi = 447.6 + (9.25 * weight) + (3.10 * height) - (4.33 * age);
    }

//caloric intake is based off age
  calculateCaloricIntake(age, height, weight, activityLevel); {
    if (age < 20){
      this.caloricIntake = "1,800 - 2,400 calories";
        }else if(this.age <40){
      this.caloricIntake = "1,800 - 2,200 calories";
        }else if(this.age <50){
      this.caloricIntake = "1,600 - 2,200 calories";
        }else{
      this.caloricIntake = "1,600 - 2,000 calories";
    }
    ;
  }

 

}}
function calculateCaloricIntake(age: number, height: number, weight: number, activityLevel: number) {
  throw new Error('Function not implemented.');
}

