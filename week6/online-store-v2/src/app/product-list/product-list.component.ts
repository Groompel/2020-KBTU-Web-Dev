import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { database } from "../database"
import { CartService } from "../cart.service";
import { log } from 'util';
declare  var jQuery:  any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  categories = database.categories;
  category;
  categoriesVisible = true;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) { }

  categoriesToggle() {
    this.categoriesVisible = !this.categoriesVisible;
  }

  addItem(product) {
    this.cartService.addItem(product.id);
  }

  ngOnInit(): void {
  
    this.route.paramMap.subscribe(params => {
      
      this.category = params.get("category");
      if(this.category === "all-products") {
        this.category = database.categories[0];
        this.products = database.products;
        return;
      }
      let found = false;
      database.categories.forEach(cat => {
        if(this.category === cat.routeName) {
          this.category = cat;
          found = true;
        }
      });
      if(found) {
        this.category.products.forEach(product => {
          this.products.push(database.products[product]);
        });
      }
      else {
        console.log("Category not found!");
      }
    });
  }
  
  

}
