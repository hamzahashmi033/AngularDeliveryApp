import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/DataTypes/Models/Order';
import { CartService } from 'src/app/Services/cart.service';
import { OrderService } from 'src/app/Services/order.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  order: Order = new Order()
  checkoutFrom!: FormGroup;

  constructor(cartService: CartService, private formBuilder: FormBuilder, private userService: UserService, private toastrService: ToastrService,private orderService:OrderService,private router:Router) {
    const cart = cartService.getcart
    this.order.items = cart.items
    this.order.totalPrice = cart.totalPrice
    // this.order.id = this.userService.currentUser.id
   
  }
  ngOnInit(){
    let {name,address} = this.userService.currentUser
    this.checkoutFrom = this.formBuilder.group({
      name:[name,Validators.required],
      address:[address,Validators.required]
    })
  }
  get fc(){
    return this.checkoutFrom.controls
  }
  createOrder(){
    if(this.checkoutFrom.invalid){
      this.toastrService.warning('Please fill the inputs', 'Invalid Inputs');
      return;
    }
    if(!this.order.addressLatLng){
      this.toastrService.warning('Please select your location on the map', 'Location');
      return;
    }
    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;
    
    
    this.orderService.createOrder(this.order).subscribe({
      next:(result)=>{
        this.router.navigate(["/payment-page"]);
        console.log(result)
      },error:(errorResponse)=>{
        this.toastrService.error(errorResponse.error,"Cart")
      }
    })
  }

}
