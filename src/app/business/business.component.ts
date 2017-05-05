import { Component, OnInit } from '@angular/core';

//import parrallax
import { ng2Parallax  } from '../../../node_modules/ang2-parallax/ng2parallax';

//Firebase Service
import {FirebaseService} from '../services/firebase.service';

//FirebaseList Observable
import { FirebaseListObservable } from 'angularfire2';

//Firebase Sdk for storage
import * as firebase from 'firebase';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
   imageUrl:any;
   business: any;

  constructor(private firebaseservice:FirebaseService) { }

 

  ngOnInit() {

this.business = [];

this.firebaseservice.getBusiness().subscribe((data:any) => {

data.forEach(business =>{
  
  //push to our array
   this.business.push(business);
//console our tips array
   console.log(business);


//Firebase Storage Function//

// get the reference
let storageRef = firebase.storage().ref();
//store the path
let spaceRef = storageRef.child(business.path);

//Images logged
console.log('images:', business.path);

//download the url
storageRef.child(business.path).getDownloadURL().then((url) => {

//save array into the path
  business.imageUrl = url;

//url is our firebase path which we store as a var imageUrl
console.log(url);
console.log("this was a success");

});
    })
  }
)

  }

}

