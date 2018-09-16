import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    //Properties
    user: User;

    //methods
    constructor(){
        
    }

    ngOnInit(){
        this.user = {
            firstName: 'american',
            lastName: 'passport',
            email:'approved@gmail.com'
            // age: 30,
            // address: {
            //     street: '50 main street',
            //     city: 'Brooklyn',
            //     state: 'NY'
            // }
        }
    }
}



