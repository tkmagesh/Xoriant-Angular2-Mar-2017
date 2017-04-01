import { Component, OnInit } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugStorage } from '../services/bugStorage.service';

@Component({
	moduleId: module.id,
	selector: 'bug-tracker',
	templateUrl: 'bug-tracker.component.html',
	styleUrls : ['bug-tracker.style.css']
})
export class BugTrackerComponent implements OnInit {
	list : Array<IBug> = [];

	
	constructor(private _bugStorage : BugStorage) {}

	ngOnInit() {
		this.list = this._bugStorage.getAll();
	}

	onAddNewClick(bugName : string){
		var newBug = this._bugStorage.addNew(bugName);
		this.list = this.list.concat([newBug]);
	}

	onBugClick (bugToToggle : IBug) : void{ 
		this.list = this.list.map(bugInlist => {
			if (bugInlist === bugToToggle){
				return this._bugStorage.toggle(bugToToggle);
			} else {
				return bugInlist
			}
		});
	}

	onRemoveClosedClick() : void{
		this._bugStorage.removeClosed();
		this.list = this.list.filter(bug => !bug.isClosed);
	}

	
}