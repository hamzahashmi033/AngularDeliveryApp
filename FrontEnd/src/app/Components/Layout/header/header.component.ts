import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity:number = 0
  constructor(cartService:CartService){
    cartService.getCartObservable().subscribe((cart)=>{
      this.cartQuantity = cart.totalCount
    })
  }
}
