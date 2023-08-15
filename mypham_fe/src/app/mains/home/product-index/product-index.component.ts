import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CartService } from 'src/app/core/services/cart.service';


@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  constructor(private service:SharedService, private cart:CartService) { }
  dsSanpham:any=[];

  ngOnInit(): void {
    this.reloadDsSanpham();
  }

  reloadDsSanpham(){
    this.service.getallSanpham().subscribe(data =>{
      this.dsSanpham = data;
    })
  }
  addcart(item:any){
    this.cart.addToCart(item);
    alert('thêm thành công');
  }
}
