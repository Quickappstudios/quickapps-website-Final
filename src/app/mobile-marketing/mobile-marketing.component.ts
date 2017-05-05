import { Component, OnInit } from '@angular/core';

//FirebaseService

import {FirebaseService} from '../services/firebase.service';

//FirebaseList Observable
import { FirebaseListObservable } from 'angularfire2';

//Router and Params
import {Router, ActivatedRoute, Params} from '@angular/router';


//Firebase Sdk for Firebase Storage
import * as firebase from 'firebase';

@Component({
  selector: 'app-mobile-marketing',
  templateUrl: './mobile-marketing.component.html',
  styleUrls: ['./mobile-marketing.component.css']
})
export class MobileMarketingComponent implements OnInit {

  mobile:any;
  imageUrl:any;
  mobiles: any [];

  constructor(private firebaseservice:FirebaseService,
  private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

 //we create this to read the property push
 this.mobile= [];

this.firebaseservice.getMobile().subscribe((data:any) =>{

data.forEach(mobile => {

//push array of listing when loop through instead of this.listing=listings
 this.mobile.push(mobile);
 
 //listings logged
console.log(mobile);

// get the reference
let storageRef = firebase.storage().ref();
//store the path
let spaceRef = storageRef.child(mobile.path);

//Images logged
console.log('images:', mobile.path);

//download the url
storageRef.child(mobile.path).getDownloadURL().then((url) => {

//save array into the path
  mobile.imageUrl = url;

//url is our firebase path which we store as a var imageUrl
console.log(url);
console.log("this was a success");

 });
    })
  }
)

  }







  }


