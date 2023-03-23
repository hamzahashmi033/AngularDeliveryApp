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
import {HttpClientModule} from '@angular/common/http';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './Components/Layout/input-container/input-container.component';
import { InputValidationContainerComponent } from './Components/Layout/input-validation-container/input-validation-container.component';
import { TextInputContainerComponent } from './Components/Layout/text-input-container/text-input-container.component';
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
    NotfoundcomponentComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationContainerComponent,
    TextInputContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // StarRatingComponent,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-center',
      newestOnTop:false
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
