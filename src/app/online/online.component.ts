import { Component, OnInit } from '@angular/core';

import{AngularFire} from 'angularfire2';
import {FirebaseService} from '../services/firebase.service';
import { FirebaseListObservable } from 'angularfire2';
import {Router} from '@angular/router';
//to access Firebase images
import * as firebase from 'firebase';

//FlashMessages
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  id:any;

  //create array of listings
  onlines: any [];
  onliness:any[];

    online:any;
  imageUrl:any;

  constructor(public af:AngularFire,
  private firebaseService: FirebaseService,
    private router:Router,
    
    private flashMessage:FlashMessagesService) { }

 
 //Lifecycle

  ngOnInit() {

  //we create this to read the property push
 this.onlines= [];
this.onliness = [];

    this.firebaseService.getOnline().subscribe((data:any) =>{

data.forEach(onlines => {
//push array of listing when loop through instead of this.listing=listings
 this.onlines.push(onlines);
 
 //listings logged
console.log(onlines);


// get the reference
let storageRef = firebase.storage().ref();
//store the path
let spaceRef = storageRef.child(onlines.path);
//Images logged
// console.log('images:', listings.path);

//download the url
storageRef.child(onlines.path).getDownloadURL().then((url) => {

  //url is our firebase path which we store as a var imageUrl
  

  //save array into the path
  onlines.imageUrl = url;


console.log(url);
console.log("this was a success");





    });
    })
  }
)

  }






}

