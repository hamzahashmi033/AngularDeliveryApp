import { Component } from '@angular/core';
import { Cart } from 'src/app/DataTypes/Models/Cart';
import { CartItems } from 'src/app/DataTypes/Models/CartItems';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart = cart
    })
  }
  removeFromCart(cartItems:CartItems){
    this.cartService.removeFromCart(cartItems.food.id)
  }
  changeQuantity(cartItem:CartItems,quantityInString:string){
    let quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id,quantity)
  }

}
