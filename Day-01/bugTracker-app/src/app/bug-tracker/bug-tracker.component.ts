import { Component, OnInit } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	moduleId: module.id,
	selector: 'bug-tracker',
	templateUrl: 'bug-tracker.component.html',
	styleUrls : ['bug-tracker.style.css']
})
export class BugTrackerComponent implements OnInit {
	list : Array<IBug> = [];

	
	constructor() {}

	ngOnInit() {
		
	}

	onAddNewClick(bugName : string){
		var newBug = {
			name : bugName,
			isClosed : false,
			createdAt : new Date()
		};
		this.list.push(newBug);
	}

	onBugClick(bug : IBug){
		bug.isClosed = !bug.isClosed;
	}
}