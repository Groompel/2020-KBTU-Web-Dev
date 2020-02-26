import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CartService } from "../cart.service";
import { log } from "util";
import { ProductsService } from "../products.service";

declare const assignOffsetTop: any;

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @ViewChild("ctgToggler") categoriesToggler;

  products: any;
  categories: any;
  selectedCategory: any;
  categoriesVisible = false;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  categoriesToggle() {
    this.categoriesVisible = !this.categoriesVisible;
  }

  addItem(product) {
    this.cartService.addItem(product.id);
  }

  shortenName(name: String, numberOfCharachters: number) {
    return name.substring(0, numberOfCharachters) + "...";
  }

  carouselLeft(product) {
    if (product.currentImageNumber === 0) {
      product.currentImageNumber = product.images.length - 1;
    } else {
      product.currentImageNumber--;
    }

    this.animateCounter(product);
  }

  carouselRight(product) {
    if (product.currentImageNumber === product.images.length - 1) {
      product.currentImageNumber = 0;
    } else {
      product.currentImageNumber++;
    }
    this.animateCounter(product);
  }

  animateCounter(product) {
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }
    product.imagesCounterAnimate = true;
    setTimeout(() => {
      product.imagesCounterAnimate = false;
    }, 2000);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryRoute = params.get("category");
      const categoriesObservable = this.productsService.getAllCategories();
      const productsObservable = this.productsService.getProductsByCategoryRouteName(
        categoryRoute
      );
      const selectedCategoryObservable = this.productsService.getCategoryByRouteName(
        categoryRoute
      );

      selectedCategoryObservable.subscribe(
        obsSelectedCategory => (this.selectedCategory = obsSelectedCategory)
      );
      categoriesObservable.subscribe(
        obsCategories => (this.categories = obsCategories)
      );
      productsObservable.subscribe(
        obsProducts => (this.products = obsProducts)
      );
    });
  }

  ngAfterViewInit(): void {
    assignOffsetTop();
  }
}
