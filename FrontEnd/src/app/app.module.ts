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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './Components/Layout/input-container/input-container.component';
import { InputValidationContainerComponent } from './Components/Layout/input-validation-container/input-validation-container.component';
import { TextInputContainerComponent } from './Components/Layout/text-input-container/text-input-container.component';
import { RegisterPageComponent } from './Components/Pages/register-page/register-page.component';
import { LoaderComponent } from './Components/Layout/loader/loader.component';
import { LoadingInterceptor } from './loading.interceptor';
import { OrderItemListComponent } from './Components/Layout/order-item-list/order-item-list.component';
import { CheckoutPageComponent } from './Components/Pages/checkout-page/checkout-page.component';
import { MapComponent } from './Components/Layout/map/map.component';
import { AuthInterceptor } from './auth.interceptor';
import { PaymentComponent } from './Components/Pages/payment/payment.component';
import { PaypalButtonsComponent } from './Components/Layout/paypal-buttons/paypal-buttons.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { TrackOrderComponent } from './Components/Pages/track-order/track-order.component';
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
    TextInputContainerComponent,
    RegisterPageComponent,
    LoaderComponent,
    OrderItemListComponent,
    CheckoutPageComponent,
    MapComponent,
    PaymentComponent,
    PaypalButtonsComponent,
    TrackOrderComponent
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
    }),
    NgxPayPalModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
