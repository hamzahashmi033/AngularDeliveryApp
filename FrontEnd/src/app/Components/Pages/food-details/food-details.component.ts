import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/DataTypes/Models/Food';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {
  food:Food | undefined
  constructor(activatedRoutes:ActivatedRoute,FoodService:FoodService){
    activatedRoutes.params.subscribe((params)=>{
      if(params.id){
        this.food = FoodService.getFoodById(params.id)
      }
    })
  }
}
