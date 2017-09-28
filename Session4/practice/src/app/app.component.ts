import { Component } from '@angular/core';
import {GetNameService} from './get-name.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GetNameService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	name:string
	
	constructor (private getNameService:GetNameService){
		
	}
	ngOnInit(){
	this.name = this.getNameService.getName();
	}
	
}
