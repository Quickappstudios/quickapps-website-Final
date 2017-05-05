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
  selector: 'app-add-branded-app',
  templateUrl: './add-branded-app.component.html',
  styleUrls: ['./add-branded-app.component.css']
})
export class AddBrandedAppComponent implements OnInit {

  //model data to bind to
  brand:any;
  title:any;
  description:any;
  image:any;


  constructor(private firebaseservice:FirebaseService,
  private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {



//get Online Node

this.firebaseservice.getBranded().subscribe(brand=>{
console.log(brand);
this.brand = brand


});

  }


//Add Data To Online
///our binding of fields function called onlineSubmit we pass this object to our firebase service
  brandSubmit(){
    
    let branded = {
      title: this.title,
      description: this.description,
      
    }


   //going to our addlisting service and adding to our listings node with our branding model from our addBrand function created in service
    this.firebaseservice.addBranded(branded);
    
    // console.log(listing);
    //show alert on success
    this.flashMessage.show('Successfully Posted to Brand Page', {cssClass: 'alert-success',timeout:3000});
    this.router.navigate(['listings']);


}

}
