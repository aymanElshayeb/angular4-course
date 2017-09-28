import { Injectable } from '@angular/core';

@Injectable()
export class GetNameService {

  constructor() { }
	 getName(){
		return 'Ayman El-Shayeb';
	}
}
