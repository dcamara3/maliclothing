import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/service/shoppingcart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

}