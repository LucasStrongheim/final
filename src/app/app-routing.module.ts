import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './video/video.component';
import { AppComponent } from './app.component';
import { CaloricIntakeComponent } from './caloric-intake/caloric-intake.component';
import { WaterConsumptionComponent } from './water-consumption/water-consumption.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'video', component: VideoComponent },
  { path: 'home', component: AppComponent},
  { path: 'caloric-intake', component: CaloricIntakeComponent},
  { path: 'water-consumption', component: WaterConsumptionComponent},
  { path: 'homepage', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
