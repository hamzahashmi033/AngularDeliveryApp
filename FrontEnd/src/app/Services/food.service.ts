import { Injectable } from '@angular/core';
import { sampleFood, sampleTags } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { Food } from '../DataTypes/Models/Food';
import { Tag } from '../DataTypes/Models/Tag';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAllFood():Observable<Food[]> {
    return this.http.get<Food[]>("http://localhost:5000/api/foods")
  }
  getFoodBySearchTerm(searchTerm:string){
    // return this.getAllFood().filter((food)=>food.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return this.http.get<Food[]>(`http://localhost:5000/api/foods/search/${searchTerm}`)
  }
  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>("http://localhost:5000/api/foods/tags")
  }
  getTagsByTagName(tag:string): Observable<Food[]>{
    return tag === "All" ? this.getAllFood() : this.http.get<Food[]>( "http://localhost:5000/api/foods/tag/"+ tag)
  }
  getFoodById(id:string):Observable<Food>{
    // let newFood = this.getAllFood().find((food)=> food.id == id) 
    return this.http.get<Food>("http://localhost:5000/api/foods/"+ id);  
  }
}
