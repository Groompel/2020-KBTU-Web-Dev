import { Injectable } from '@angular/core';

import { PRODUCTS_ALL } from "src/app/database";
import { ProductsService } from './products.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private productsService: ProductsService,
  ) { }

  cart = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  };

  getCart() {
    return this.cart;
  }

  addItem(newItemId) {
    let exists = false;

    this.cart.items.forEach(item => {
      if(item.id === newItemId) {
        item.quantity++;
        exists = true;
      }
    });

    if(!exists) {
      this.cart.items.push({
        id: newItemId,
        quantity: 1,
      });
    }
    this.cart.totalPrice +=  this.productsService.getProductById(newItemId).price;
    this.cart.totalQuantity++;
  }

  removeItem(itemId) {

    let i = 0;

    this.cart.items.forEach(item => {
      if(item.id === itemId) {
        if(item.quantity > 1){
          item.quantity--;
        }
        else {
          this.cart.items.splice(i, 1);
        }
      }
      i++;
    });

    this.cart.totalPrice -= this.productsService.getProductById(itemId).price;
    this.cart.totalQuantity--;

  }



}
