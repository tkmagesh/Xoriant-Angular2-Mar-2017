import { Component, OnInit } from '@angular/core';
import { IBug } from '../models/IBug';
import { Http } from '@angular/http';
import { BugStorage } from '../services/bugStorage.service';
import { Observable } from 'rxJs/Observable';
import 'rxJs/Rx';
import { BugOperations } from '../services/bugOperations.service';


@Component({
	moduleId: module.id,
	selector: 'bug-tracker',
	templateUrl: 'bug-tracker.component.html',
	styleUrls : ['bug-tracker.style.css']
})
export class BugTrackerComponent implements OnInit {
	list : Array<IBug> = [];

	bugSortObj : any = {};
	
	constructor(private _bugStorage : BugStorage, private _http : Http, private _bugOperations : BugOperations) {}

	ngOnInit() {
		//this.list = this._bugStorage.getAll();
		this
			._http
			.get('http://localhost:3000/bugs')
			.subscribe(response => this.list = response.json());
	}

	sortHandler(data){
		this.bugSortObj = data;
	}

	newBugHandler(bugName : string){
		var newBug = this._bugOperations.createNew(0, bugName);
		this._http
			.post('http://localhost:3000/bugs', newBug )
			.subscribe(response => this.list = this.list.concat([response.json()]));
		//this.list = this.list.concat([newBug]);
	}

	handleToggle (bugToToggle : IBug) : void{ 
		this.list = this.list.map(bugInlist => {
			if (bugInlist === bugToToggle){
				return this._bugStorage.toggle(bugToToggle);
			} else {
				return bugInlist
			}
		});
	}

	handleRemoveClosed() : void{
		this._bugStorage.removeClosed();
		this.list = this.list.filter(bug => !bug.isClosed);
	}

	
}