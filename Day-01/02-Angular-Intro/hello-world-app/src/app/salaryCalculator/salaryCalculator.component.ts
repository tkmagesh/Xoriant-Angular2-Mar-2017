import { Component } from '@angular/core';
import { SalaryCalculator } from '../models/SalaryCalculator';

@Component({
	selector: 'salary-calculator',
	templateUrl: 'salaryCalculator.component.html',
	styleUrls : ['salaryCalculator.style.css']
})
export class SalaryCalculatorComponent {

	calculator : SalaryCalculator = new SalaryCalculator();
	
}