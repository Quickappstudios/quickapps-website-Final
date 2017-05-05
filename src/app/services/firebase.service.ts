import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  //Firebase List Observable
  listings: FirebaseListObservable<any[]>;
  tips:FirebaseListObservable<any[]>;
  business:FirebaseListObservable<any[]>;
  contact:FirebaseListObservable<any[]>;
  
  //Online List Observable
  online:FirebaseListObservable<any[]>;


  // branded List Observable
  branded:FirebaseListObservable<any[]>;
  


//to access our firebase storage on abouts page
  abouts:FirebaseObjectObservable<any>;
  listing: FirebaseObjectObservable<any>;
  
  //About
  about:FirebaseListObservable<any[]>;

  //mobile
   mobile:FirebaseListObservable<any[]>;
  
  //Folder Path
  
  folder: any;
 
 
///create  listingimages path folder
 constructor(private af: AngularFire) {
    this.folder = 'listingimages';
  }







/*************************************************************************************************************************** 
About CRUD NODE Firebase
==========================================================================================================================*/
  //has to return a list
  getAbout(){

this.about = this.af.database.list('/about') as FirebaseListObservable<Listing[]>
    return this.about;
}


//get id of about node
  // getAboutDetails(id){
  //   this.listing = this.af.database.object('/about/'+id) as FirebaseObjectObservable<Listing>
  //   return this.listing;
  // }

  ///add our listings node using POST

  addAbout(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();

    //create a loop and get image element id
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      
      //store our folder andselected path
      let path = `/${this.folder}/${selectedFile.name}`;
      //store to our set path
      let iRef = storageRef.child(path);
      //make a snapshot of selected file
      iRef.put(selectedFile).then((snapshot) => {
        //list out the image name
        listing.image = selectedFile.name;
        //list out the image path
        listing.path = path;

        //Push to the about node in our database
        return this.about.push(listing);
      });
    }
  }



/*************************************************************************************************************************** 
Tips CRUD NODE Firebase Function
==========================================================================================================================*/
  //has to return a list
  getTips(){

this.tips = this.af.database.list('/tips') as FirebaseListObservable<Listing[]>
    return this.tips;
}


// //get id of about node
//   getAboutDetails(id){
//     this.listing = this.af.database.object('/about/'+id) as FirebaseObjectObservable<Listing>
//     return this.listing;
//   }

  ///add our listings node using POST

  addTips(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();

    //create a loop and get image element id
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      
      //store our folder andselected path
      let path = `/${this.folder}/${selectedFile.name}`;
      //store to our set path
      let iRef = storageRef.child(path);
      //make a snapshot of selected file
      iRef.put(selectedFile).then((snapshot) => {
        //list out the image name
        listing.image = selectedFile.name;
        //list out the image path
        listing.path = path;

        //Push to the about node in our database
        return this.tips.push(listing);
      });
    }
  }





/*************************************************************************************************************************** 
BusinessCRUD NODE Firebase Function
==========================================================================================================================*/
  //has to return a list
  getBusiness(){

this.tips = this.af.database.list('/business') as FirebaseListObservable<Listing[]>
    return this.tips;
}


// //get id of about node
//   getAboutDetails(id){
//     this.listing = this.af.database.object('/about/'+id) as FirebaseObjectObservable<Listing>
//     return this.listing;
//   }

  ///add our listings node using POST

  addBusiness(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();

    //create a loop and get image element id
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      
      //store our folder andselected path
      let path = `/${this.folder}/${selectedFile.name}`;
      //store to our set path
      let iRef = storageRef.child(path);
      //make a snapshot of selected file
      iRef.put(selectedFile).then((snapshot) => {
        //list out the image name
        listing.image = selectedFile.name;
        //list out the image path
        listing.path = path;

        //Push to the about node in our database
        return this.business.push(listing);
      });
    }
  }






/*************************************************************************************************************************** 
BusinessCRUD NODE Firebase Function
==========================================================================================================================*/
  //has to return a list
  getContacts(){

this.contact = this.af.database.list('/contacts') as FirebaseListObservable<Contacts[]>
return this.contact;

interface Contacts{
  $key?:string;
  name?:string;
  email?:string;
  message?:string;
  
}


}


///add our listings node using POST

  addContacts(contacts){
    // Create root ref
    let storageRef = firebase.storage().ref();
  //Push to the contact node in our database
        return this.contact.push(contacts);

//Model Class Of Contacts


      
  }




/*************************************************************************************************************************** 
Online CRUD NODE Firebase Function
==========================================================================================================================*/
  //has to return a list
  getOnline(){
//we get our list node and add our model object
this.online = this.af.database.list('/online') as FirebaseListObservable<Online[]>
    return this.online;

///Model Object Class for Online <Online[]>
  interface Online{
  $key?:string;
  name?:string;
  title?:string;
  description:string;
  image:string;
  
}

}





/***************************************************************************************************************************/
  ///add our listings node using POST
/****************************************************************************************************************************/
  
  //create function addOnline pass in our online firebaseListObservable
  addOnline(online){
    // Create root ref
    let storageRef = firebase.storage().ref();

    //create a loop and get image element id
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      
      //store our folder and selected path
      let path = `/${this.folder}/${selectedFile.name}`;
      //store to our set path
      let iRef = storageRef.child(path);
      //make a snapshot of selected file
      iRef.put(selectedFile).then((snapshot) => {
        //list out the image name
        online.image = selectedFile.name;
        //list out the image path
        online.path = path;

        //Push to the online node in our database listing
        return this.online.push(online);
      });
    }
  }





/*************************************************************************************************************************** 
Branded CRUD NODE Firebase Function
==========================================================================================================================*/
  //has to return a list
  getBranded(){
//we get our list node and add our model object from branded firebase list observable
this.branded = this.af.database.list('/branded') as FirebaseListObservable<Branded[]>
    return this.branded;

///Model Object Class for Online <Branded[]>
  interface Branded{
  $key?:string;
  name?:string;
  title?:string;
  description:string;
  image:string;
  
}

}





/***************************************************************************************************************************/
  ///add our Branded node using POST
/****************************************************************************************************************************/
  
  //create function branded pass in our online firebaseListObservable
  addBranded(branded){
    // Create root ref
    let storageRef = firebase.storage().ref();

    //create a loop and get image element id
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      
      //store our folder and selected path
      let path = `/${this.folder}/${selectedFile.name}`;
      //store to our set path
      let iRef = storageRef.child(path);
      //make a snapshot of selected file
      iRef.put(selectedFile).then((snapshot) => {
        //list out the image name
        branded.image = selectedFile.name;
        //list out the image path
        branded.path = path;

        //Push to the online node in our database listing
        return this.branded.push(branded);
      });
    }
  }







/*************************************************************************************************************************** 
Mobile Marketing CRUD NODE Firebase Function
==========================================================================================================================*/
  //has to return a list
  getMobile(){
//we get our list node and add our model object from branded firebase list observable
this.mobile = this.af.database.list('/mobilemarketing') as FirebaseListObservable<Mobile[]>
    return this.mobile;

///Model Object Class for Online <Branded[]>
  interface Mobile{
  $key?:string;
  name?:string;
  title?:string;
  description:string;
  image:string;
  
}

}





/***************************************************************************************************************************/
  ///add our Branded node using POST
/****************************************************************************************************************************/
  
  //create function branded pass in our online firebaseListObservable
  addmobile(mobile){
    // Create root ref
    let storageRef = firebase.storage().ref();

    //create a loop and get image element id
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      
      //store our folder and selected path
      let path = `/${this.folder}/${selectedFile.name}`;
      //store to our set path
      let iRef = storageRef.child(path);
      //make a snapshot of selected file
      iRef.put(selectedFile).then((snapshot) => {
        //list out the image name
        mobile.image = selectedFile.name;
        //list out the image path
        mobile.path = path;

        //Push to the online node in our database listing
        return this.mobile.push(mobile);
      });
    }
  }

  












/*************************************************************************************************************************** 
 Home CRUD NODE Firebase which goes to our Listings Node is Our Home
==========================================================================================================================*/



//get Listings Node by GET
  getListings(){
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
    return this.listings;
  }


//get id of listings node
  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }

  ///add our listings node using POST

  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }

}

//Delete Listings//


//Model Class Of Listings

interface Listing{
  $key?:string;
  title?:string;
  description?:string;
  image?:string;
  
}







