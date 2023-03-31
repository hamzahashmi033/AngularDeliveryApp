import { Component, ElementRef, Input, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/DataTypes/Models/Order';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
declare var paypal: any;
// upper line same as window.paypal
@Component({
  selector: 'app-paypal-buttons',
  templateUrl: './paypal-buttons.component.html',
  styleUrls: ['./paypal-buttons.component.css']
})
export class PaypalButtonsComponent implements OnInit {
  @Input()
  order!: Order
  @ViewChild("paypal")
  paypalElement!: ElementRef
  public payPalConfig!: IPayPalConfig;
  constructor(private orderService: OrderService, private cartService: CartService, private router: Router, private toastrService: ToastrService) { }
  ngOnInit(): void {
    if (this.order) {

      this.payPalConfig = {
        currency: 'USD',
        clientId: 'AT1k1byKzuSBLv19_rhhaWktjRjdefsSSfWepUl8WUJDgI1_7nRDAWkr_bIQwj7H65PgzcJ0PfyQzXZR',
        createOrderOnClient: (data) => <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
          {
            amount: {
            currency_code: 'USD',
          value: JSON.stringify(this.order.totalPrice),
          breakdown: {
            item_total: {
            currency_code: 'USD',
          value: JSON.stringify(this.order.totalPrice)
                }
              }
            },
            
          }
          ]
      },
          advanced: {
            commit: 'true'
      },
          style: {
            label: 'paypal',
          layout: 'horizontal'
      },
      onApprove: (data:any, actions:any) => {
            actions.order.get().then((details: any) => {
              const paymentId = details.id
              this.orderService.pay(paymentId).subscribe({
                next:(orderId)=>{
                  this.cartService.clearCart()
                  this.router.navigateByUrl('/track/' + orderId);
                  this.toastrService.success(
                    'Payment Saved Successfully',
                    'Success'
                  );
                },
                error:(err)=>{
                  this.toastrService.error(err.error,"Pamen Failed")
                }
              })
            })


          }, 
      onError: err => {
          this.toastrService.error(err.error,"Pamen Failed")
      },
     
    };
    }

  }
  
  
  
}
