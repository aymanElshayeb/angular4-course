import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Store';
  logo = 'favicon.ico';
  logo1 ='';
  message = '';
  books =['Book1', 'Book2', 'Book3'] ;
  booksColor = ['red', 'Pink', 'Green'] ;
  selectedBook = 'Book3';
 
  showTitle(onKeyPressEvent){
  	this.message =(<HTMLInputElement>onKeyPressEvent.target).value;
  }
  
  getInlineStyle(bookName:string){
  	let indx = bookName.substring(bookName.length-1);
  	let indexNumber = parseInt(indx)-1;
  	console.debug(this.booksColor[indexNumber]);
  	let styles ={
  	'color' :this.booksColor[indexNumber]
  	}
  	return styles;
  }
}
