import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductInfoGetterComponent } from './product-info-getter/product-info-getter.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "categories/all-products"},
  {path: "categories/:category", component: ProductListComponent},
  {path: "cart", component: CartComponent},
  {path: "dev/products-info", component: ProductInfoGetterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
