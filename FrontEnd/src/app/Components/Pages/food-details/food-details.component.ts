import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/DataTypes/Models/Food';
import { CartService } from 'src/app/Services/cart.service';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {
  food!:Food 
  constructor(activatedRoutes:ActivatedRoute,FoodService:FoodService,private cartService:CartService,private Router:Router){
    activatedRoutes.params.subscribe((params)=>{
      if(params.id){
        FoodService.getFoodById(params.id).subscribe((result)=>{
          if(result){
           this.food = result
          }
        })
      }
    })
  }
  addToCart(){
    if(this.food){
      this.cartService.addToCart(this.food)
      this.Router.navigate(["cart-page"])
      
    }
  }
}
