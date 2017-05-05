import { Component, OnInit } from '@angular/core';

import {FirebaseService} from '../../services/firebase.service';
//Flash Messages
import {FlashMessagesService} from 'angular2-flash-messages';

//Router
import {Router} from '@angular/router';

@Component({
  selector: 'app-about-listing',
  templateUrl: './about-listing.component.html',
  styleUrls: ['./about-listing.component.css']
})
export class AboutListingComponent implements OnInit {
about:any;
   title:any;
  description:any;
  image:any;

  constructor(  private firebaseService:FirebaseService,private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {


//Get About Node from database
this.firebaseService.getAbout().subscribe(about =>{
console.log(about);
this.about = about;


});

}


  
///our binding of fields function
  onAboutSubmit(){
    let listing = {
      title: this.title,
      description: this.description,
      
    }
   //going to our addlisting service and adding to our listings node with our listing model
    this.firebaseService.addAbout(listing);
    
    // console.log(listing);
    //show alert on success
    this.flashMessage.show('Successfully Posted to About Page', {cssClass: 'alert-success',timeout:3000});
    this.router.navigate(['listings']);
  }

}







