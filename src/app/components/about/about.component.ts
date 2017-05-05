import { Component, OnInit } from '@angular/core';
//FirebaseService

import {FirebaseService} from '../../services/firebase.service';

//FirebaseList Observable
import { FirebaseListObservable } from 'angularfire2';

//Router and Params
import {Router, ActivatedRoute, Params} from '@angular/router';


//Firebase Sdk
import * as firebase from 'firebase';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
 
})
export class AboutComponent implements OnInit {

 
about:any;
id:any;
imageUrl:any;
listing: any [];


  constructor(private firebaseservice:FirebaseService,
  private router:Router,private route:ActivatedRoute) {
}
      
  
ngOnInit() {

  //we create this to read the property push
 this.about= [];

this.firebaseservice.getAbout().subscribe((data:any) =>{

data.forEach(about => {

//push array of listing when loop through instead of this.listing=listings
 this.about.push(about);
 
 //listings logged
console.log(about);

// get the reference
let storageRef = firebase.storage().ref();
//store the path
let spaceRef = storageRef.child(about.path);

//Images logged
console.log('images:', about.path);

//download the url
storageRef.child(about.path).getDownloadURL().then((url) => {

//save array into the path
  about.imageUrl = url;

//url is our firebase path which we store as a var imageUrl
console.log(url);
console.log("this was a success");

 });
    })
  }
)

  }






}






//Loop through our array of listings and show our listings.path
//  this.firebaseservice.getListings().subscribe(listings=> listings.forEach(

//   listings => 
  


  















 









