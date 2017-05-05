import { Component, OnInit } from '@angular/core';
//add Firebase as a Service
import {FirebaseService} from '../services/firebase.service';

//FirebaseList Observable
import { FirebaseListObservable } from 'angularfire2';

//Router
import {Router}  from '@angular/router';

//Flash Messages
import {FlashMessagesService} from 'angular2-flash-messages';
//Firebase Sdk
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-online',
  templateUrl: './add-online.component.html',
  styleUrls: ['./add-online.component.css']
})
export class AddOnlineComponent implements OnInit {

//model data to bind to
  online:any;
  title:any;
  description:any;
  image:any;


///constructor//
  constructor(private firebaseservice:FirebaseService,
  private router:Router,private flashMessage:FlashMessagesService) { 


  }

//Lifecycle
  ngOnInit() {

//get Online Node

this.firebaseservice.getOnline().subscribe(online=>{
console.log(online);
this.online = online


});

  }


//Add Data To Online
///our binding of fields function called onlineSubmit
  onlineSubmit(){
    
    let online = {
      title: this.title,
      description: this.description,
      
    }


   //going to our addlisting service and adding to our listings node with our listing model from our addOnline function created in service
    this.firebaseservice.addOnline(online);
    
    // console.log(listing);
    //show alert on success
    this.flashMessage.show('Successfully Posted to About Page', {cssClass: 'alert-success',timeout:3000});
    this.router.navigate(['listings']);
  }

}

