import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector : 'bug-sort',
	templateUrl : 'bugSort.component.html',
	styleUrls : ['bugSort.style.css']
})
export class BugSortComponent{

	sortBugBy : string = '';
	isDescending : boolean = false;

	@Output()
	onSortSelect : EventEmitter<any> = new EventEmitter();

	sortChange(){
		console.log('sortChange triggered');
		console.log(this.sortBugBy, this.isDescending);
		this.onSortSelect.emit({ by : this.sortBugBy, descending : this.isDescending});
	}
}