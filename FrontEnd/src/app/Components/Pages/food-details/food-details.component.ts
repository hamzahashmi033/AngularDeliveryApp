import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  message:string | undefined
  constructor(private activatedRoutes:ActivatedRoute,private FoodService:FoodService,private cartService:CartService,private Router:Router,private toastrService:ToastrService){
      this.singleFood()
  }
  singleFood(){
    this.activatedRoutes.params.subscribe((params)=>{
      if(params.id){
        this.FoodService.getFoodById(params.id).subscribe((result)=>{
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
  addedTofavorites(id:string){
    this.FoodService.addFoodToFavorites(id).subscribe((result)=>{
      if(result){
        this.toastrService.success(result.message)
        this.singleFood()
      }
      
    })
  }
}
