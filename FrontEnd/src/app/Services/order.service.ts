import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Order } from '../DataTypes/Models/Order';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  createOrder(order:Order){
    return this.http.post<Order>("http://localhost:5000/api/v1/createorder",order)
  
  }
  getOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>("http://localhost:5000/api/v1/getsingleorder")
  }
  pay(order:Order):Observable<string>{
    return this.http.post<string>("http://localhost:5000/api/v1/pay",order)
  }
  trackOrder(orderId:any):Observable<Order>{
    return this.http.get<Order>(`http://localhost:5000/api/v1/track/${orderId}`)
  }
}
