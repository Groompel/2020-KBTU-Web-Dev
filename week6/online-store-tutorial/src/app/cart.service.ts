import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = [];

  addItem(item) {
    this.cartItems.push(item);
  }


  constructor() { }
}
