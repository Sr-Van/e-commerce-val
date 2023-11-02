import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { CartItemCardComponent } from './components/header/cart-item-card/cart-item-card.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProductPipe } from './pipes/product.pipe';
import { NotFoundComponent } from './components/search/not-found/not-found.component';
import { getItemsService } from './services/get-items.service';
import { LoadingComponent } from './components/loading/loading.component';
import { DetailsComponent } from './components/products/details/details.component';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CategoriesComponent } from './components/products/categories/categories.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';

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
    LoadingComponent,
    DetailsComponent,
    CategoriesComponent,
    TranslatePipe,
    CookieConsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  providers: [getItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
