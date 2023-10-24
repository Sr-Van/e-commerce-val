import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { CartItemCardComponent } from './components/header/cart-item-card/cart-item-card.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProductPipe } from './product.pipe';
import { NotFoundComponent } from './components/search/not-found/not-found.component';
import { getItemsService } from './services/get-items.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    SearchComponent,
    ProductCardComponent,
    ProductPipe,
    CartItemCardComponent,
    FooterComponent,
    NotFoundComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [getItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
