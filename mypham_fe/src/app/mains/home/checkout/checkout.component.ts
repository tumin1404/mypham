import { Component, OnInit, Injector } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';
import {  FormGroup, Validators,FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends BaseComponent implements OnInit {
  submited: boolean = false;
  checkout = this.fb.group({
    customer_name: ['',Validators.required],
    customer_address: ['',Validators.required],
    customer_phone: ['',Validators.required],
    customer_mail: ['',Validators.required],
    customer_note: ['',Validators.required]
  });
  list_Cart:any;
  constructor(private fb:FormBuilder,private cart:CartService,private route:Router,private service:SharedService,injector: Injector) {
    super(injector);
   }
  public index:any;
  total = 0;;
  // public frmKhach: FormGroup ;
  ngOnInit(): void {
    this.loadcart();
    this.list_Cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.list_Cart.forEach((x:any)=>{
      this.total += Number(x.quantity*x.product_sale);
      debugger
    })
  }
  // ------------------------
  loadcart(){
    this.list_Cart = JSON.parse(localStorage.getItem('cart') || '[]');
   }
  //  -----------------

  get f() {return this.checkout.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.checkout.invalid) {return false;}
    console.log(this.checkout.value);
    let khach: any = {};
    let donhang: any = {};
    khach = {
      customer_name: this.checkout.value.customer_name,
      customer_address: this.checkout.value.customer_address,
      customer_phone: this.checkout.value.customer_phone,
      customer_mail: this.checkout.value.customer_mail,
      customer_note:this.checkout.value.customer_note
    };
    donhang = [];
    this.list_Cart.forEach((x: any) => {
      donhang.push({
        sales_details_product_id: x.product_id,
        sales_details_product_quantity: x.quantity,
        sales_details_product_sale: x.product_sale
      });
      console.log(donhang);
    });
    this.service.themkh(this.checkout.value).subscribe(res =>{
      alert('Thêm mới thành công :))');
    })
    this.service.themcthdb(donhang).subscribe(res =>{
      alert('Thêm mới thành công :))');
    })
  }

}
