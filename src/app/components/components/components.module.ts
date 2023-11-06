import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { CookieConsentComponent } from '../cookie-consent/cookie-consent.component';
import { FooterComponent } from '../footer/footer.component';
import { LoadingComponent } from '../loading/loading.component';
import { HeaderComponent } from '../header/header.component';
import { PaymentMethodsComponent } from '../payment-methods/payment-methods.component';
import { ProductsComponent } from '../products/products.component';
import { SearchComponent } from '../search/search.component';
import { ProductCardComponent } from '../products/product-card/product-card.component';
import { NotFoundComponent } from '../search/not-found/not-found.component';
import { CategoriesComponent } from '../products/categories/categories.component';
import { DetailsComponent } from '../products/details/details.component';
import { CartItemCardComponent } from '../header/cart-item-card/cart-item-card.component';


import { ProductPipe } from 'src/app/pipes/product.pipe';
import { getItemsService } from 'src/app/services/get-items.service';


import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    CookieConsentComponent,
    FooterComponent,
    LoadingComponent,
    HeaderComponent,
    LoadingComponent,
    PaymentMethodsComponent,
    ProductsComponent,
    SearchComponent,
    ProductCardComponent,
    NotFoundComponent,
    CategoriesComponent,
    DetailsComponent,
    CartItemCardComponent,
    ProductPipe,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TooltipModule,
    FormsModule,
    CarouselModule,
    AppRoutingModule
  ],
  exports: [
    CookieConsentComponent,
    FooterComponent,
    LoadingComponent,
    HeaderComponent,
    LoadingComponent,
    PaymentMethodsComponent,
    ProductsComponent,
    SearchComponent,
    ProductCardComponent,
    NotFoundComponent,
    CategoriesComponent,
    DetailsComponent,
    CartItemCardComponent
  ],
  providers: [getItemsService]
})
export class ComponentsModule { }
