import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { User } from '../models/User';

@Injectable()
export class UserService {

  users: User[];

    constructor() { 
            this.users = [
              {
                firstName: 'John',
                lastName: 'Doe',
                email:'jd@gmail.com',
                isActive: true,
                // balance: 100,
                registered: new Date('01/02/2018 08: 30: 00'),
                hide: true
            },
            {
              firstName: 'Kevin',
              lastName: 'Doe',
              email:'kev@gmail.com',
              isActive: false,
              // balance: 200,
              registered: new Date('03/11/2018 06: 20: 00'),
              hide: true
          },
          {
            firstName: 'Karen',
            lastName: 'Doe',
            email: 'karen@gmail.com',
            isActive: true,
            // balance: 50,
            registered: new Date('01/05/2018 10: 30: 00'),
            hide: true
          }
        ];
  }  //end of constructor



  //METHODS

getUsers(): Observable<User[]>{
  return of(this.users);  //returning an observable THAT WE CAN SUBSCRIBE TO
}

//USER MODEL
addUser(user: User){
  this.users.unshift(user);
}



}
