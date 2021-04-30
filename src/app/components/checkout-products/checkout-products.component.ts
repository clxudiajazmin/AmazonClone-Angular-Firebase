import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-products',
  templateUrl: './checkout-products.component.html',
  styleUrls: ['./checkout-products.component.css']
})
export class CheckoutProductsComponent implements OnInit {

  @Input() checkout_products: any[];

  @Output() deleteEvent: EventEmitter<any> = new EventEmitter()

  constructor(public shopping_cart: ShoppingCartService) { }

  ngOnInit(): void {
  }

  removeItem(product){
    this.shopping_cart.removeItem(product)
    this.deleteEvent.emit(product)
  }

}
