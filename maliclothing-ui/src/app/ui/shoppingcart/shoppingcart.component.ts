import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../service/shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private _shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
 
  }

 checkout(): void {
 	alert ("You have successfully checked out!");
 }

}