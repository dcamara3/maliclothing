import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public products;

  constructor(private _productService: ProductService) { }

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

    alert("Item: " + product.name + " successfully added!");
  }

  public removeFromCart(product: any): void {
    alert("Item: " + product.name + " successfully removed!");
  }

}