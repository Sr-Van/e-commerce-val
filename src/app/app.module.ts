import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { OffCanvasComponent } from './components/off-canvas/off-canvas.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductPipe } from './product.pipe';
import { CartItemCardComponent } from './components/header/cart-item-card/cart-item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffCanvasComponent,
    ProductsComponent,
    ContactComponent,
    SearchComponent,
    ProductCardComponent,
    ProductPipe,
    CartItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
