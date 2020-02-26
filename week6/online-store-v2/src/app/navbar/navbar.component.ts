import { Component, OnInit } from '@angular/core';



import { CartService } from "../cart.service";

import { angularMath } from 'angular-ts-math';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private productsService: ProductsService,
  ) { }

  angularMath = angularMath;
  cartVisible = false;
  cartAnimate = false;
  cartAnimationTiming = 300;
  cart = this.cartService.cart;


  getProductInfo(id) {
    return this.productsService.getProductById(id);
  }

  shortenName(name: String, numberOfCharachters: number) {
    return name.substring(0, numberOfCharachters) + "...";
  }


  animate() {
    this.cartAnimate = true;

    setTimeout(() => {
      this.cartAnimate = false;
    }, this.cartAnimationTiming)

  }

  minus(item) {
    this.cartService.removeItem(item.id);
  }
  plus(item) {
    this.cartService.addItem(item.id);
  }

  cartToggle() {
    this.cartVisible = !this.cartVisible;
  }

  ngOnInit(): void {
  }

}
