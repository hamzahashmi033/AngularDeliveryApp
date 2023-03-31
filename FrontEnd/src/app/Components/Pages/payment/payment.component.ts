import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/DataTypes/Models/Order';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  order:Order = new Order()
  constructor(private orderService:OrderService,private router:Router){
    orderService.getOrderForCurrentUser().subscribe({
      next:(result)=>{
        this.order = result
        console.log(this.order);
        
      },error:(errorResponse)=>{
        console.log(errorResponse.error);
        
      }
    })
  }



}
