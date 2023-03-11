import { Injectable } from '@angular/core';
import { sampleFood } from 'src/data';
import { Food } from '../DataTypes/Models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllFood():Food[]{
    return sampleFood
  }
}
