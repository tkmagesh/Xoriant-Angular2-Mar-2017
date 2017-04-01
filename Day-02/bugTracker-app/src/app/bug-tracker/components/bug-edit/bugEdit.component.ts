import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'bug-edit',
	templateUrl: 'bugEdit.component.html',
	styleUrls : ['bugEdit.style.css']
})
export class BugEditComponent implements OnInit {

	@Output()
	public onNewBug : EventEmitter<string> = new EventEmitter();

	constructor() {}

	ngOnInit() {
		
	}

	onAddNewClick(bugname : string){
		this.onNewBug.emit(bugname);
	}
}