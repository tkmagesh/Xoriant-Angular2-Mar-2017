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
		this.list = this.list.concat([newBug]);
	}

	onBugClick (bugToToggle : IBug) : void{ 
		this.list = this.list.map(bugInlist => {
			if (bugInlist === bugToToggle){
				return {
					name : bugToToggle.name,
					isClosed : !bugToToggle.isClosed,
					createdAt : bugToToggle.createdAt
				}
			} else {
				return bugInlist
			}
		});
	}

	onRemoveClosedClick() : void{
		this.list = this.list.filter(bug => !bug.isClosed);
	}

	
}