import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { CartPageComponent } from './Components/Pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './Components/Pages/checkout-page/checkout-page.component';
import { FoodDetailsComponent } from './Components/Pages/food-details/food-details.component';
import { HomeComponent } from './Components/Pages/home/home.component';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { PaymentComponent } from './Components/Pages/payment/payment.component';
import { RegisterPageComponent } from './Components/Pages/register-page/register-page.component';
import { TrackOrderComponent } from './Components/Pages/track-order/track-order.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent 
  
  },
  {
    path:"search/:searchTerm",
    component:HomeComponent
  },
  {
    path:"tag/:tag",
    component:HomeComponent
  },
  {
    path:"food/:id",
    component:FoodDetailsComponent,
  },
  {
    path:"cart-page",
    component:CartPageComponent,
  },
  {
    path:"login-page",
    component:LoginPageComponent
  },
  {
    path:"register-page",
    component:RegisterPageComponent
  },
  {
    path:"checkout-page",
    component:CheckoutPageComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"payment-page",
    component:PaymentComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"track/:orderId",
    component:TrackOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
