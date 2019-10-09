import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from './../../service/product.service';
import { ShoppingCartService } from './../../service/shoppingcart.service';
import { Product } from 'src/app/model/product';
import { CartService, CartItem } from 'ng-shopping-cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public products: Product[];

  constructor(
    private _productService: ProductService,
    private _shoppingCartService: ShoppingCartService,
    private cartService: CartService<Product>
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProducts().subscribe(
      data => { this.products = data; },
      err => console.error(err),
      () => console.log('done loading products')
    );
  }

  public addToCart(product: Product): void {
    var tmpProduct = new Product(product);
    tmpProduct.setQuantity(1);
    //this._shoppingCartService.addItem(product);
    this.cartService.addItem(tmpProduct);
  }

  public removeFromCart(product: Product): void {
    var tmpProduct = new Product(product);
    tmpProduct.setQuantity(1);
    // this._shoppingCartService.deleteItem(product.upcCode);
    this.cartService.removeItem(tmpProduct.getId());
  }
}