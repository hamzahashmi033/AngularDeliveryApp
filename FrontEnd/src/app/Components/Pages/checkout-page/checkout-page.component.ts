import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/DataTypes/Models/Order';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  order: Order = new Order()
  checkoutFrom!: FormGroup;

  constructor(cartService: CartService, private formBuilder: FormBuilder, private userService: UserService, private toastrService: ToastrService) {
    const cart = cartService.getcart
    this.order.items = cart.items
    this.order.totalPrice = cart.totalPrice
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

    this.order.name = this.fc.name.value;
    this.order.address = this.fc.address.value;

    console.log(this.order);
  }

}
