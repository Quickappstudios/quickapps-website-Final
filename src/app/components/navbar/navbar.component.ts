import { Component, OnInit } from '@angular/core';

import {AngularFire} from 'angularfire2';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public af:AngularFire,public flashMessage:FlashMessagesService,private router:Router) { }

  ngOnInit() {

}




//Login with Google
login(){

this.af.auth.login();
this.router.navigate(['listings']);
this.flashMessage.show('Successfully Logged in', {cssClass: 'alert-success',timeout:3000});
console.log('successfully logged in');

}

//Logout with Google

logout(){

  this.af.auth.logout();
  this.router.navigate(['/']);
this.flashMessage.show('Success You have Logged out', {cssClass: 'alert-success',timeout:3000});
  
}



}

