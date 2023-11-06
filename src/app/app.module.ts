import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ProductPipe } from './pipes/product.pipe';
import { getItemsService } from './services/get-items.service';


import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TranslatePipe } from './pipes/translate.pipe';

import { ComponentsModule } from './components/components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule,
    FormsModule,
    ComponentsModule,
    CarouselModule.forRoot()
  ],
  providers: [getItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
