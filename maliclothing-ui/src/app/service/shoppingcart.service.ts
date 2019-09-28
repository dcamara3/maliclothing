import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

 public items = {};
 private numberOfItems: number = 0;

  constructor() { }

  public getCount(): number {
    return this.numberOfItems;
  }

  public addItem(item : any): void {
    if (this.items[item.upcCode] == null) {
      this.items[item.upcCode] = [];
    }
    this.items[item.upcCode].push(item);
    this.numberOfItems++;
  }

  public deleteItem(upcCode : string): void 
  {
    if (this.items[upcCode] != null) {
      if ( this.items[upcCode].length > 0) {
        this.items[upcCode].splice(0, 1);
        this.numberOfItems--;
      }
    }
  }

  public getItems() : any {
    return this.items;
  }
}