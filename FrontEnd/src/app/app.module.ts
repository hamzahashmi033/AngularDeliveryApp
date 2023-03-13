import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { SearchComponent } from './Components/Layout/search/search.component';
import { TagsComponent } from './Components/Layout/tags/tags.component';
import { FoodDetailsComponent } from './Components/Pages/food-details/food-details.component';
import { CartPageComponent } from './Components/Pages/cart-page/cart-page.component';
import { TitleComponent } from './Components/Layout/title/title.component';
import { NotfoundcomponentComponent } from './Components/Layout/notfoundcomponent/notfoundcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodDetailsComponent,
    CartPageComponent,
    TitleComponent,
    NotfoundcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StarRatingComponent,
    RatingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
