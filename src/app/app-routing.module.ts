import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/search/not-found/not-found.component';
import { DetailsComponent } from './components/products/details/details.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'products/:productName', component: DetailsComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
