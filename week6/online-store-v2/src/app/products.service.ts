import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CATEGORIES, PRODUCTS_ALL } from './database';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  categories = CATEGORIES;
  products = PRODUCTS_ALL;

  getAllCategories(): Observable<any> {
    return of(this.categories);
  }

  getCategoryByRouteName(routeName): Observable<any> {

    let thisCategory = this.categories.find(category => category.routeName === routeName);

    for(let i = 0; i < thisCategory.products.length; i++) {
      thisCategory.products[i] = {...thisCategory.products[i], ...{
        currentImageNumber: 0,
        imagesCounterAnimate: false,
      }};
    };
    return of(thisCategory);
  }

  getProductsByCategoryRouteName(routeName): Observable<any> {
    for(let i = 0; i < this.products.length; i++) {
      this.products[i] = {...this.products[i], ...{
        currentImageNumber: 0,
        imagesCounterAnimate: false,
      }};
    };
    return of(this.categories.find(category => category.routeName === routeName).products);
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }



}
