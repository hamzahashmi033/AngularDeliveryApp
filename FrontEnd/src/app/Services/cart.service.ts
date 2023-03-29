import { Injectable } from '@angular/core';
import { Cart } from '../DataTypes/Models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../DataTypes/Models/Food';
import { CartItems } from '../DataTypes/Models/CartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage()
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor() { }

  addToCart(food:Food):void{
    let cartItems = this.cart.items.find((item)=>item.food.id === food.id)
    if(cartItems){
      return
    }else{
      this.cart.items.push(new CartItems(food))
      this.setCartToLocalStorage()
    }
  }
  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items
      .filter(item => item.food.id != foodId);
      this.setCartToLocalStorage()
  }
  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items
      .find(item => item.food.id === foodId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage()
  }
  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage()
  }
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable()
  }
  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }
  public get getcart(){
    return this.cartSubject.value
   }
  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
