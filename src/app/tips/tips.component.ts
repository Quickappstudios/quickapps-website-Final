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
  selector: 'app-tips',
  // directives:[ng2Parallax],
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css'],
 
  
})
export class TipsComponent implements OnInit {

  imageUrl:any;
   tips: any;

  constructor(private firebaseservice:FirebaseService) { }

  ngOnInit() {

this.tips = [];

this.firebaseservice.getTips().subscribe((data:any) => {

data.forEach(tips =>{
  
  //push to our array
   this.tips.push(tips);
//console our tips array
   console.log(tips);


//Firebase Storage Function//

// get the reference
let storageRef = firebase.storage().ref();
//store the path
let spaceRef = storageRef.child(tips.path);

//Images logged
console.log('images:', tips.path);

//download the url
storageRef.child(tips.path).getDownloadURL().then((url) => {

//save array into the path
  tips.imageUrl = url;

//url is our firebase path which we store as a var imageUrl
console.log(url);
console.log("this was a success");

});
    })
  }
)

  }

}







