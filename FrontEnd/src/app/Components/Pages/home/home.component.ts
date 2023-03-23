import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/DataTypes/Models/Food';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[] = []
  constructor(private foodService:FoodService,activatedRoutes:ActivatedRoute){
    activatedRoutes.params.subscribe((params)=>{
      if(params.searchTerm){
        this.foodService.getFoodBySearchTerm(params.searchTerm).subscribe((result)=>{
          this.foods=result 
        })
      }else if(params.tag){
         this.foodService.getTagsByTagName(params.tag).subscribe((result)=>{
          this.foods= result 
        })
      }else{
       foodService.getAllFood().subscribe((result)=>{
         this.foods=result 
        })
      }
    })
  }
}
