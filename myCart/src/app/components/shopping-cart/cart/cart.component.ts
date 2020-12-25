import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
     this.addProductToCart(product)
    })
  }
  addProductToCart(product: Product){

  let productExist = false

  for(let i in this.cartItems){
    if(this.cartItems[i].id === product.id){
      this.cartItems[i].qty++
      productExist = true
      break
    }
  }

  if(!productExist){
    this.cartItems.push({
      id: product.id,
      name: product.name,
      qty: 1,
      price: product.price
    })
  }
  
  this.cartTotal=0
  this.cartItems.forEach(item=>{
  this.cartTotal += (item.qty * item.price)
  })
  }

  removeProductFromCart(product: Product){
    for(let i in this.cartItems){
      if(this.cartItems[i].id === product.id){
        if(this.cartItems[i].qty > 1){
          this.cartItems[i].qty--
          break
        }
        else{
          this.cartItems = this.cartItems.filter(obj => obj !== product)
        }
      }
    }
    this.cartTotal=0
    this.cartItems.forEach(item=>{
    this.cartTotal += (item.qty * item.price)
    })
  }

}