import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  list_Cart:any;
  constructor(private cart:CartService,private route:Router,private service:SharedService) { }
  public index:any;
  total = 0;
  ngOnInit(): void {
    this.loadcart();
    this.list_Cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.list_Cart.forEach((x:any)=>{
      this.total += Number(x.quantity*x.product_sale);
      debugger
    })
  }
  tang(item:any){
    this.cart.addToCart(item);
    this.loadcart();
  }
  giam(item:any){
    this.list_Cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.index = this.list_Cart.indexOf(JSON.stringify(item));
    this.list_Cart[this.index].quantity -=1;
    localStorage.setItem('cart', JSON.stringify(this.list_Cart));
  }
  loadcart(){
   this.list_Cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
  clear_cart(){
    if(confirm('Bạn có chắc muốn làm mới trang giỏ hàng ?')){
     localStorage.removeItem('cart');
     this.loadcart();
   }
 }

}
