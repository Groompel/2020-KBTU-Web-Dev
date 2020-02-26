import { Component, OnInit } from '@angular/core';
import { log } from 'util';

import { PRODUCTS } from "../products";
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  cartItems = this.cartService.cartItems;
  products = PRODUCTS;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get("categoryId"));

    });

  }

  addItem(product) {
    this.cartService.addItem(product);
  }

}
