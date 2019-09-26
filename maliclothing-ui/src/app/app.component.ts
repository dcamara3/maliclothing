import { Component } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
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
      data => { this.products = data},
      err => console.error(err),
      () => console.log('done loading foods')
    );
  }

//   +  getBooksAndMovies() {
// +    this._demoService.getBooksAndMovies().subscribe(
// +      data => {
// +        this.books = data[0]
// +        this.movies = data[1]
// +      }
// +      // No error or completion callbacks here. They are optional, but
// +      // you will get console errors if the Observable is in an error state.
// +    );
// +  }

}