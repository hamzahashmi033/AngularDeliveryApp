import { Component } from '@angular/core';
import { Tag } from 'src/app/DataTypes/Models/Tag';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags:Tag[] = []
  constructor(private FoodService:FoodService){
    FoodService.getAllTags().subscribe((result)=>{
       this.tags= result 
    })
  }
}
