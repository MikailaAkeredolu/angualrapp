import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  //Properties
  user: User = {
    firstName:'',
    lastName:'',
    email: ''
  }; 
  users: User[];  //array of users

  showExtended: boolean = true;
  loaded: boolean = false;    //if fetching data from outside u can have a loaded option
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  //Constructor based DI
  constructor(private userService: UserService) { } 

  ngOnInit() {
    //SUBSCRIBE TO OBSERVABLE
   this.userService.getUsers().subscribe( users => {
     this.users = users;  //SET TO USER COING FROM SERVICE
     this.loaded = true;  //users are now loaded
   });  
 
}  
//end of onInit

//METHODS ALL GO BELOW HERE
  onSubmit({value, valid}: {value: User, valid: boolean}){    //user form to add users
    if(!valid){
      console.log('form is NOT valid');
    }else{
      value.isActive = true;  //default set form properties
      value.registered = new Date();  //default set form properties
      value.hide = true;  //default set form properties
      this.userService.addUser(value);  //  value is a valid user object coming from the form
      this.form.reset();  //clear the form
    }
  }



}
