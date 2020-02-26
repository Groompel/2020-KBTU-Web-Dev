import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { PRODUCTS_ALL } from '../database';
import { log } from 'util';
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-product-info-getter',
  templateUrl: './product-info-getter.component.html',
  styleUrls: ['./product-info-getter.component.scss']
})
export class ProductInfoGetterComponent implements OnInit {
  products = PRODUCTS_ALL;
  productInfos = [];
  currentProduct: any;
  loadDelayMillis = 20000;

  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    this.initializeInfos();
  }

  setProduct(product) {

    this.products.forEach(p => {
      const productId = p.url.substring(p.url.indexOf("item/") + 5, p.url.indexOf(".html"));
      if(productId === product.id) {
        console.log(productId);
        this.currentProduct = p;
      }

    });
  }

  initializeInfos() {
    let counter = 0;
    this.products.forEach(product => {

      const productId = product.url.substring(product.url.indexOf("item/") + 5, product.url.indexOf(".html"));
      setTimeout( () => {
        this.configService.getProductInfo(productId).subscribe(obs => {
              this.productInfos.push(obs);
              console.log(obs);
        });
      }, this.loadDelayMillis);


    });
  }


}
