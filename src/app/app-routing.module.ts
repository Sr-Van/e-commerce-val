import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/search/not-found/not-found.component';
import { DetailsComponent } from './components/products/details/details.component';
import { CategoriesComponent } from './components/products/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: 'products/categoria/:cat', component: CategoriesComponent},
  {path: 'products/:productName', component: DetailsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'cart', component: CartComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
