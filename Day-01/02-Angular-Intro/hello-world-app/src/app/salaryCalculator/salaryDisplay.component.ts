import { Component, OnInit, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'salary-display',	
	template: `<div class="field">
		<div id="divResult">{{data}}</div>
	</div>`		
})
export class SalaryDisplayComponent implements OnInit {

	@Input()
	data : number = 0;
	
	constructor() {}

	ngOnInit() {
		
	}
}