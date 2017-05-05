import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '..//services/firebase.service';
//Flash Messages
import {FlashMessagesService} from 'angular2-flash-messages';

//routes to naviagte to page
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.css']
})
export class AddBusinessComponent implements OnInit {

  constructor(private firebaseService:FirebaseService,private flashMessage:FlashMessagesService,private router:Router) { }
//model
  business:any;
   title:any;
   description:any;
  
  

  ngOnInit() {

///Get Our Tips Data
    this.firebaseService.getBusiness().subscribe(business =>{
console.log(business);
this.business = business;


});


}



///our binding of fields function
  onBusinessSubmit(){
   //listings model
    let listing = {
      title: this.title,
      description: this.description,
      
    }

     //AddTips Function we get from our service
   //going to our addlisting service and adding to our listings node with our listing model
    this.firebaseService.addTips(listing);
    
    // console.log(listing);
    //show alert on success
    this.flashMessage.show('Successfully Posted to Tips Page', {cssClass: 'alert-success',timeout:3000});
    this.router.navigate(['listings']);
  }

}
