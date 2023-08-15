import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public addToCart(item: any) {
    item.quantity = 1;
    let local_storage: any;
    if (localStorage.getItem('cart') == null) {
      local_storage = [item];
    } else {
 
     local_storage = JSON.parse(localStorage.getItem('cart') || '[]');
       let ok = true;
      for (let x of local_storage) {
         if (x.id == item.id) {
          x.quantity += 1;
          ok = false;
          break;
        }
      }
      if (ok) {
        local_storage.push(item);
      }
    }
    localStorage.setItem('cart', JSON.stringify(local_storage));
  }

}
