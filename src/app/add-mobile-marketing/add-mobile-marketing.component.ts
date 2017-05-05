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
  selector: 'app-add-mobile-marketing',
  templateUrl: './add-mobile-marketing.component.html',
  styleUrls: ['./add-mobile-marketing.component.css']
})
export class AddMobileMarketingComponent implements OnInit {

  //model data to bind to
  mobile:any;
  title:any;
  description:any;
  image:any;

  constructor(private firebaseservice:FirebaseService,
  private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {

//Read database

this.firebaseservice.getMobile().subscribe(mobile=>{
console.log(mobile);
});

  }
//add function


///our binding of fields function called onlineSubmit we pass this object to our firebase service
  mobileSubmit(){
     

let mobile = {
      title: this.title,
      description: this.description, 
  
      
    }


   //going to our addlisting service and adding to our listings node with our branding model from our addBrand function created in service
    this.firebaseservice.addmobile(mobile);
    
    // console.log(listing);
    //show alert on success
    this.flashMessage.show('Successfully Posted to Mobile Marketing Page', {cssClass: 'alert-success',timeout:3000});
    this.router.navigate(['listings']);


  }

}
