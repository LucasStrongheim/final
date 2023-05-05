import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaloricIntakeComponent } from './caloric-intake/caloric-intake.component';

@NgModule({
  declarations: [
    AppComponent,
    CaloricIntakeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
