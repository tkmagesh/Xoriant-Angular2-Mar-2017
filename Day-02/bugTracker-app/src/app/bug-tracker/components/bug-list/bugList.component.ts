import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector : 'bug-list',
	templateUrl : 'bugList.component.html',
	styleUrls : ['bugList.style.css']
})
export class BugListComponent{
	@Input()
	list = [];

	@Input()
	sortOrder = {};

	@Output()
	onToggle : EventEmitter<Object> = new EventEmitter<Object>();

	@Output()
	removeClosed : EventEmitter<any> = new EventEmitter<any>();
	onBugClick(bug){
		this.onToggle.emit(bug);
	}

	onRemoveClosedClick(){
		this.removeClosed.emit();
	}
}