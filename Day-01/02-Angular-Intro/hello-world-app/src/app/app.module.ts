import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { SalaryCalculatorComponent} from './salaryCalculator/salaryCalculator.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    SalaryCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
