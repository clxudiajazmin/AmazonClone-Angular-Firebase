import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  shopping_cart_items: any[] = [];

  constructor() { }

  addProduct = (product) => {
    let items = this.shopping_cart_items

    if(items){
      items.push(product)
      localStorage.setItem('shopping-cart', JSON.stringify(items))
    }else{
      this.shopping_cart_items.push(product)
      localStorage.setItem('shopping-cart', JSON.stringify(this.shopping_cart_items))
    }
    
  }

  getShoppingCartItems = () => {
    let items = localStorage.getItem('shopping-cart')
    return JSON.parse(items)
  }

  getCartLenght = () => {
    let items = this.getShoppingCartItems()
    return items? this.getShoppingCartItems().length: 0
  }
}
