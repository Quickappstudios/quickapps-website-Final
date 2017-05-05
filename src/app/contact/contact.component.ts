import { Component, OnInit } from '@angular/core';

//Router and Params
import {Router} from '@angular/router';

///Firebase Service
import {FirebaseService} from '../services/firebase.service';

//FirebaseList Observable
import { FirebaseListObservable } from 'angularfire2';

import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any;

   name:any;
  email:any;
  message:any;

  constructor(public firebaseservice:FirebaseService,private router:Router,public flashMessage:FlashMessagesService) { }

  ngOnInit() {



//read the contacts database

this.firebaseservice.getContacts().subscribe(contact =>{

console.log(contact);

this.contact = contact;


});

  }

//save data to database


///our binding of fields function
  onContactSubmit(){
   //contacts model
    let contacts= {
      name: this.name,
      email: this.email,
      message:this.message
      
    }

     //AddTips Function we get from our service
   //going to our addlisting service and adding to our listings node with our contacts model
    this.firebaseservice.addContacts(contacts);
    
    // console.log(listing);
    //show alert on success
    this.flashMessage.show('Thank you for your email we will be with you shortly', {cssClass: 'alert-success',timeout:3000});
    this.router.navigate(['/']);
  }


}

