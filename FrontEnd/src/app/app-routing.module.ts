import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
