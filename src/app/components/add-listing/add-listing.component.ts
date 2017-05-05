import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router} from '@angular/router';

//FlashMessages
import {FlashMessagesService} from 'angular2-flash-messages';



@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
   
  title:any;
  description:any;
  image:any;

isDropZoneOver:boolean = false;
  isEnabledUpload: boolean = true;
 

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private flashMessage:FlashMessagesService,
   
  ) { }

  ngOnInit() {
  }





///our binding of fields function
  onAddSubmit(){
    let listing = {
      title: this.title,
      description: this.description,
      
    }
   //going to our addlisting service and adding to our listings node
    this.firebaseService.addListing(listing);
this.flashMessage.show('Successfully Posted to Home Page', {cssClass: 'alert-success',timeout:3000});
    //go to the listings page
    console.log(listing);
    this.router.navigate(['listings']);
  }

}
