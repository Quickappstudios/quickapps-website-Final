import { Component, OnInit } from '@angular/core';
import{AngularFire} from 'angularfire2';
import {FirebaseService} from '../services/firebase.service';
import { FirebaseListObservable } from 'angularfire2';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

//FlashMessages
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-branded-app',
  templateUrl: './branded-app.component.html',
  styleUrls: ['./branded-app.component.css']
})
export class BrandedAppComponent implements OnInit {

  //create array properties
  brands: any [];
  brandsss:any[];
  
  
  brand:any;
  imageUrl:any;

  constructor(public af:AngularFire,
  private firebaseService: FirebaseService,
    private router:Router,
    
    private flashMessage:FlashMessagesService) { }

  ngOnInit() {


//we create this to read the property push
 this.brands= [];
this.brandsss = [];

    this.firebaseService.getBranded().subscribe((data:any) =>{

data.forEach(brands => {
//push array of listing when loop through instead of this.listing=listings
 this.brands.push(brands);
 
 //listings logged
console.log(brands);


// get the reference
let storageRef = firebase.storage().ref();
//store the path
let spaceRef = storageRef.child(brands.path);
//Images logged
// console.log('images:', listings.path);

//download the url
storageRef.child(brands.path).getDownloadURL().then((url) => {

  //url is our firebase path which we store as a var imageUrl
  

  //save array into the path
  brands.imageUrl = url;




//push out the listings array of data//
// this.listingss.push(listings);


  console.log(url);
console.log("this was a success");





    });
    })
  }
)





  }

}
