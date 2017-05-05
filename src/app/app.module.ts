import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import {AngularFireModule,AuthProviders,AuthMethods} from 'angularfire2';

//import parrallax
import { ng2Parallax  } from '../../node_modules/ang2-parallax/ng2parallax';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';

//Front End Pages
import { AboutComponent } from './components/about/about.component';
import { TipsComponent } from './tips/tips.component';
import { BusinessComponent } from './business/business.component';
import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { QuickwebComponent } from './quickweb/quickweb.component';
import { QuickgraphicsComponent } from './quickgraphics/quickgraphics.component';
import { QuickshopComponent } from './quickshop/quickshop.component';
import { CmsComponent } from './cms/cms.component';
import { FaqComponent } from './faq/faq.component';




//Admin Pages


import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { ListingsComponent } from './components/listings/listings.component';
import { AboutListingComponent } from './components/about-listing/about-listing.component';
import { AddTipsComponent } from './add-tips/add-tips.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { AddOnlineComponent } from './add-online/add-online.component';
import { AddSmartmarketingComponent } from './add-smartmarketing/add-smartmarketing.component';

//Import FirebaseService Service

import {FirebaseService} from './services/firebase.service';


//Import Flash Messages
import {FlashMessagesModule} from 'angular2-flash-messages';
import { OnlineComponent } from './online/online.component';
import { AddBrandedAppComponent } from './add-branded-app/add-branded-app.component';
import { BrandedAppComponent } from './branded-app/branded-app.component';
import { AddSmallbusinessComponent } from './add-smallbusiness/add-smallbusiness.component';
import { SmallbusinessComponent } from './smallbusiness/smallbusiness.component';
import { MobileMarketingComponent } from './mobile-marketing/mobile-marketing.component';
import { AddMobileMarketingComponent } from './add-mobile-marketing/add-mobile-marketing.component';








//Firebase AuthMethods

const firebaseAuthConfig = {

provider:AuthProviders.Google,
method:AuthMethods.Popup
};






//Firebase cred

export const firebaseConfig = {

apiKey: "AIzaSyBK_Miv6vU314VQz0qmL3ODpM06RA-1O4w",
    authDomain: "quickappswebsite.firebaseapp.com",
    databaseURL: "https://quickappswebsite.firebaseio.com",
    storageBucket: "quickappswebsite.appspot.com",
    messagingSenderId: "913207912032"

}


//Create app Routes


const appRoutes:Routes=[

{path:'', component:HomeComponent},
{path:'listings', component:ListingsComponent},
{path:'listing/:id',component:ListingComponent},
{path:'app-about',component:AboutComponent},
{path:'app-about-listing',component:AboutListingComponent},
{path:'app-add-tips',component:AddTipsComponent },
{path:'app-add-business',component:AddBusinessComponent },
{path:'add-branded-app',component:AddBrandedAppComponent },
{path:'app-add-online',component:AddOnlineComponent },
{path:'app-add-smallbusiness',component: AddSmallbusinessComponent},
{path:'app-add-mobile-marketing',component:AddMobileMarketingComponent },



//pages
{path:'app-tips',component:TipsComponent},
{path:'app-business',component:BusinessComponent},
{path:'app-quickweb',component:QuickwebComponent},
{path:'app-quickgraphics',component:QuickgraphicsComponent},
{path:'app-quickshop',component:QuickshopComponent},
{path:'app-cms',component:CmsComponent},
{path:'app-videos',component:VideosComponent},
{path:'add-listing',component:AddListingComponent},
{path:'app-faq',component:FaqComponent},
{path:'app-contact',component:ContactComponent},
{path:'app-branded-app',component:BrandedAppComponent},
{path:'app-online',component:OnlineComponent},
{path:'app-smallbusiness',component:SmallbusinessComponent },
{path:'app-mobile-marketing',component:MobileMarketingComponent },








]



@NgModule({
  declarations: [
    AppComponent,
   HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    AddListingComponent,
    AboutComponent,
    AboutListingComponent,
    TipsComponent,
    BusinessComponent,
    VideosComponent,
    BusinessComponent,
    BusinessComponent,
    AddTipsComponent,
    ng2Parallax,
    AddBusinessComponent,
    ContactComponent,
    QuickwebComponent,
    QuickgraphicsComponent,
    QuickshopComponent,
    CmsComponent,
    FaqComponent,
    AddOnlineComponent,
    AddSmartmarketingComponent,
    OnlineComponent,
    AddBrandedAppComponent,
    BrandedAppComponent,
    AddSmallbusinessComponent,
    SmallbusinessComponent,
    MobileMarketingComponent,
    AddMobileMarketingComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]

})
export class AppModule { }
