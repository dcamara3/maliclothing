import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './ui/home/home.component';
import { ShoppingcartComponent } from './ui/shoppingcart/shoppingcart.component';

const routes: Routes = [
	// { path: '', redirectTo:  'contacts', pathMatch:  'full' }
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: ShoppingcartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }