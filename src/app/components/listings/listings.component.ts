import { Component, OnInit } from '@angular/core';

//FirebaseService

import {FirebaseService} from '../../services/firebase.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  listings:any;
  imageUrl:any;
  constructor(private firebaseservice:FirebaseService) { }

  ngOnInit() {


//Get Listings Node from database
this.firebaseservice.getListings().subscribe(listings =>{
console.log(listings);
this.listings = listings;


});


  }

}
// //  //Get Image from firebase Storage from id

// let storageRef = firebase.storage().ref();
//       let spaceRef = storageRef.child(this.listings.path);
//       storageRef.child(this.listings.path).getDownloadURL().then((url) => {
        
//         // Set image url
//         this.imageUrl = url;

//         //catch the error
//       }).catch((error) => {
//         console.log(error);
//       });
    


 


