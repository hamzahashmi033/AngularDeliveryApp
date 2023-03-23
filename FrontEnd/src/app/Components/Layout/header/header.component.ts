import { Component } from '@angular/core';
import { User } from 'src/app/DataTypes/Models/User';
import { CartService } from 'src/app/Services/cart.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity:number = 0
  user!:User
  constructor(cartService:CartService,private userService:UserService){
    cartService.getCartObservable().subscribe((cart)=>{
      this.cartQuantity = cart.totalCount
    })  
    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser
    })
  }
  logout(){
    this.userService.logout()
  }
}
