import { Injectable } from '@angular/core';

import { IBug } from '../models/IBug';
import { BugOperations } from './bugOperations.service';

@Injectable()
export class BugStorage{
	storage : Storage = window.localStorage;
	currentBugId : number = 0;

	constructor(private _bugOperations : BugOperations){

	}
	getAll(): Array<IBug>{
		var result : Array<IBug> = [];
		for(let index:number = 0; index < this.storage.length; index++){
			let data = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(data);
			this.currentBugId = this.currentBugId > bug.id ? bug.id : this.currentBugId;
			result.push(bug);
		}
		return result;
	}
	private save(bug){
		this.storage.setItem(bug.id.toString(), JSON.stringify(bug));
	}
	addNew(bugName : string) : IBug {
		var newBug = this._bugOperations.createNew(++this.currentBugId, bugName);
		this.save(newBug);
		return newBug;
	}
	toggle(bug : IBug) : IBug{
		var toggledBug = this._bugOperations.toggle(bug);
		this.save(toggledBug);
		return toggledBug;
	}
	removeClosed(){
		for(let index:number = this.storage.length-1; index >= 0; index--){
			let data = this.storage.getItem(this.storage.key(index));
			let bug = JSON.parse(data);
			if (bug.isClosed)
				this.storage.removeItem(bug.id.toString());
		}
	}
}