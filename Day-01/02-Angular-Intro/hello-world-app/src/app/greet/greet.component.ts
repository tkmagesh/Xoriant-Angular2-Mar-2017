import { Component } from '@angular/core';

@Component({
	selector : 'greet',
	template : `
		<label for="">Name :</label>
		<input type="text" [(ngModel)]="username" />
		<input type="button" value="Greet" (click)="onGreetClick()" />
		<h3>{{greetMessage}}</h3>
	`
})
export class GreetComponent{
	greetMessage : string = '';

	username : number = 0;
	
	onGreetClick(){
		console.log('greet button clicked');
		this.greetMessage = `Hello ${this.username}! Welcome to Angular2!!`;
		//this.username = '';
	}
}