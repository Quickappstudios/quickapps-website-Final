import { Component, OnInit } from '@angular/core';

import {FirebaseService} from '..//services/firebase.service';
//Flash Messages
import {FlashMessagesService} from 'angular2-flash-messages';

//routes to naviagte to page
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-tips',
  templateUrl: './add-tips.component.html',
  styleUrls: ['./add-tips.component.css']
})
export class AddTipsComponent implements OnInit {
//model
  about:any;
   title:any;
  description:any;
  tips:any;

  constructor(private firebaseService:FirebaseService,private flashMessage:FlashMessagesService,public router:Router) { }

  ngOnInit() {

///Get Our Tips Data
    this.firebaseService.getTips().subscribe(tips =>{
console.log(tips);
this.about = tips;


});


}



///our binding of fields function
  onTipsSubmit(){
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


