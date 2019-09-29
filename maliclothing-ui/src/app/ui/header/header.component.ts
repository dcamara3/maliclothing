import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './../../service/shoppingcart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  	
  }

}