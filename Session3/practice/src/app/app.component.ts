import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	messageFromChild:string;
	messageToChild:string;
	setMessageFromChild(message:string){
		this.messageFromChild=message;
	}
	sendGreetToChild(){
	this.messageToChild='Good Morning Child';
	}
}
