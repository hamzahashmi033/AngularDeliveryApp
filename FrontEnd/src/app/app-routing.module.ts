import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './Components/Pages/cart-page/cart-page.component';
import { FoodDetailsComponent } from './Components/Pages/food-details/food-details.component';
import { HomeComponent } from './Components/Pages/home/home.component';

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
    component:FoodDetailsComponent
  },
  {
    path:"cart-page",
    component:CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
