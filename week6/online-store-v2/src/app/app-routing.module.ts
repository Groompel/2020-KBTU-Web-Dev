import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "categories/all-products"},
  {path: "categories/:category", component: ProductListComponent},
  {path: "cart", component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
