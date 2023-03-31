import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/DataTypes/Models/Order';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.css']
})
export class TrackOrderComponent {
  order!:Order
  constructor(activatedRoute: ActivatedRoute, orderService: OrderService,toastrService:ToastrService) {
    activatedRoute.params.subscribe((params) => {
      if (params.orderId) {
        orderService.trackOrder(params.orderId).subscribe({
          next:(order)=>{
            this.order = order
          },error:(err)=>{
            toastrService.error(err.error,"Error Occured")
          }
        })
      }
    })

    }
}
