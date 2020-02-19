import { Component, OnInit } from '@angular/core';

import { database } from "../database";

import { CartService } from "../cart.service";

import { angularMath } from 'angular-ts-math';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  angularMath = angularMath;
  database = database;
  cart = database.cart;
  cartVisible = false;


  constructor(
    private cartService: CartService,
  ) { }

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
