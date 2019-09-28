import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from './../../service/product.service';
import { ShoppingCartService } from './../../service/shoppingcart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public products;

  constructor(
  		private _productService: ProductService, 
  		private _shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(
      data => { this.products = data },
      err => console.error(err),
      () => console.log('done loading products')
    );
  }

  public addToCart(product: any): void {
    this._shoppingCartService.addItem(product);
  }

  public removeFromCart(product: any): void {
    this._shoppingCartService.deleteItem(product.upcCode);
  }
}