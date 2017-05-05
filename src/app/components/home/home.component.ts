import { Component, OnInit } from '@angular/core';
import{AngularFire} from 'angularfire2';
import {FirebaseService} from '../../services/firebase.service';
import { FirebaseListObservable } from 'angularfire2';
import {Router} from '@angular/router';
import * as firebase from 'firebase';

//FlashMessages
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  id:any;

  //create array of listings
  listings: any [];
  listingss:any[];
  
  
  listing:any;
  imageUrl:any;





  constructor(public af:AngularFire,
  private firebaseService: FirebaseService,
    private router:Router,
    
    private flashMessage:FlashMessagesService
  
  ) { }
  


//Lifecycle

  ngOnInit() {

  //we create this to read the property push
 this.listings= [];
this.listingss = [];

    this.firebaseService.getListings().subscribe((data:any) =>{

data.forEach(listings => {
//push array of listing when loop through instead of this.listing=listings
 this.listings.push(listings);
 
 //listings logged
console.log(listings);


// get the reference
let storageRef = firebase.storage().ref();
//store the path
let spaceRef = storageRef.child(listings.path);
//Images logged
// console.log('images:', listings.path);

//download the url
storageRef.child(listings.path).getDownloadURL().then((url) => {

  //url is our firebase path which we store as a var imageUrl
  

  //save array into the path
  listings.imageUrl = url;




//push out the listings array of data//
// this.listingss.push(listings);


  console.log(url);
console.log("this was a success");

// //if our loop is less than 10 images
// for(var i = 0; i < 10; ++i) {
//  //check if i = 5 images we show a random image   
// if (i == 5) {
//   this.listings.push({
//  url: 'https://unsplash.it/50/50/?random=' + i


//   });  

// }

// }



    });
    })
  }
)

  }






}


  







// let storageRef = firebase.storage().ref();
//       let spaceRef = storageRef.child(listings.path);
//       storageRef.child(listings.path).getDownloadURL().then((url) => {
// // // Set image url

//         this.imageUrl = url;
//         //print our our url
//         console.log(url);

// });
// })

// // });

// }

// )


// }

// }


 






//Get Listing Collection
// this.firebaseService.getListings().subscribe(listings =>{

// console.log(listings)
// this.listings = listings

// });


//Get Listings Node from database
// this.firebaseService.getListings().subscribe((res:any) => {
  //loop through the about node
  // res.forEach(listings => {
  // this.listings = listings;
//console our about object out
  // console.log(listings);
  
 //Firebase Storage// 
// let storageRef = firebase.storage().ref();
//       let spaceRef = storageRef.child(listings.path);
//       storageRef.child(listings.path).getDownloadURL().then((url) => {
// Set image url
        // this.imageUrl = url;
        // console.log(url);

///error

// }).catch((error) => {
//         console.log(error);
//       });
//     });

//   }

// )

  







///Get Image Static for front end

//get static image from firebase storage from our Listings collection
// let storageref = firebase.storage().ref().child("/listingimages/bg6.jpg");
//  storageref.getDownloadURL().then(url => this.imageUrl = url);
// }
// }



