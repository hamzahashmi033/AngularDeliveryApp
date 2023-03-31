import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Order } from '../DataTypes/Models/Order';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  createOrder(order:Order){
    return this.http.post<Order>("http://localhost:5000/api/v1/createorder",order)
  }
}
