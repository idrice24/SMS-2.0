import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const users = [
      { id: 11, fName: 'Ghis', lName: 'Dr Nice', email: 'Ghis@yahoo.com', password: 'password1', isAdmin: true },
      { id: 12, fName: 'Bombasto', lName: 'Dr Nice', email: 'Bombasto@yahoo.com', password: 'password1', isAdmin: false },
      { id: 13, fName: 'Zoe', lName: 'Dr Nice', email: 'Zoe@yahoo.com', password: 'password1', isAdmin: false },

    ];

    return { users };
	}
}