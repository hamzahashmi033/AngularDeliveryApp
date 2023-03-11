import { Injectable } from '@angular/core';
import { sampleFood, sampleTags } from 'src/data';
import { Food } from '../DataTypes/Models/Food';
import { Tag } from '../DataTypes/Models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFood():Food[]{
    return sampleFood
  }
  getFoodBySearchTerm(searchTerm:string){
    return this.getAllFood().filter((food)=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  getAllTags():Tag[]{
    return sampleTags
  }
  getTagsByTagName(tag:string):Food[]{
    return tag === "All" ? this.getAllFood() : this.getAllFood().filter((food)=>food.tags?.includes(tag))
  }
  getFoodById(id:string){
    let newFood = this.getAllFood().find((food)=> food.id == id) 
    return newFood    
  }
}
