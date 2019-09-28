import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public numberOfItems: number = 0;

  constructor() { }

  public getCount(): number {

    return this.numberOfItems;

  }

  public incrementCount(): void {

    this.numberOfItems++;

  }

  public decrementCount(): void {

    if (this.numberOfItems > 0)
      this.numberOfItems--;
  }
}