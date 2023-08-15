import {Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public id:any
  public date:any;
  public subscription!: Subscription;
  constructor(private service:SharedService,private http:HttpClient,private router:Router,private activatedRoute: ActivatedRoute,private cart:CartService) {
  }
  dsSanphamHot:any=[];
  sp: any;
  spbycate: any=[];
  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      // console.log(this.id);
    })
    this.http.get('http://localhost:5100/api/sanpham/'+this.id).subscribe(data => { 
      this.sp = data;
      console.log(this.sp[0].product_cate_id)
      this.http.get('http://localhost:5100/api/sanpham/getcatedetail/'+ this.sp[0].product_cate_id).subscribe(data =>{
        this.spbycate = data
        console.log(this.spbycate);
      })
    })
  }

  addcart(item:any){
    this.cart.addToCart(item);
    alert('thêm thành công');
  }
  // ngAfterViewInit() {
  //   this.loadScripts(
  //     '../../../../assets/js/jquery.elevateZoom.min.js',
  //     '../../../../assets/js/bootstrap-input-spinner.js',
  //     '../../../../assets/js/jquery.min.js',
  //     '../../../../assets/js/bootstrap.bundle.min.js',
  //     '../../../../assets/js/jquery.hoverIntent.min.js',
  //     '../../../../assets/js/jquery.waypoints.min.js',
  //     '../../../../assets/js/superfish.min.js',
  //     '../../../../assets/js/owl.carousel.min.js',
  //     '../../../../assets/js/main.js',
  //     '../../../../assets/js/demos/demo-2.js',
  //   );
  // }
}