import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../service/shoppingcart.service';
import { Product } from 'src/app/model/product';
import { CartService } from 'ng-shopping-cart';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  constructor(
    public _shoppingCartService: ShoppingCartService,
    public _cartService: CartService<Product>) { }

  ngOnInit() {

    for (let item of this._cartService.getItems()) {
      console.log(item);
    }

  }

  checkout(): void {
    alert("You have successfully checked out!");
  }

}