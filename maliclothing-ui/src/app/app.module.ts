import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';

import { ProductService } from './service/product.service';
import { UiModule } from './ui/ui.module';   // our custom service, see below
import { ShoppingCartService } from './service/shoppingcart.service';

import { ShoppingCartModule } from 'ng-shopping-cart'; // <-- Import the module class
import { Product } from './model/product.model';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UiModule,
    ShoppingCartModule.forRoot({ // <-- Add the cart module to your root module
      itemType: Product, // <-- Configuration is optional
      serviceType: 'localStorage',
      serviceOptions: {
        storageKey: 'NgShoppingCart',
        clearOnError: true
      }
    })
  ],
  providers: [ProductService, ShoppingCartService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }