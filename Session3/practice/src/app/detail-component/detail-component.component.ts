import { Component,Input, Output, EventEmitter , OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {
	@Input() messageFromParent:string;
	@Output() messageToParent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  
   sendGreetingToParent() {
    this.messageToParent.emit('Good Morning Parent');
  }
  

}
