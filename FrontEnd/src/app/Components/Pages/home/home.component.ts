import { Component } from '@angular/core';
import { Food } from 'src/app/DataTypes/Models/Food';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods:Food[] = []
  constructor(private foodService:FoodService){
    this.foods = foodService.getAllFood()
  }
}
