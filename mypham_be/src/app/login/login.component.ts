import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // users_name:any;
  // users_password:any;
  submited: boolean = false;
  dangnhap = this.fb.group({
    users_name: [''],
    users_password: ['']
  });
  constructor(private _route:Router,private fb:FormBuilder,private service:SharedService) {}
  table:any=[];
  // taikhoan:any={
  //   users_name:"",
  //   users_password:"",
  //   users_full_name:""
  // };

  ngOnInit(): void {
    // this.dangnhap();
  }
  // dangnhap(){
  //   this.taikhoan.users_name = this.users_name;
  //   this.taikhoan.users_password = this.users_password;
  //   this.service.dangnhap(this.taikhoan).subscribe(data =>{
  //     this.table = data;
  //   })
  //   if(this.table[0].Column1 == 1) {
  //     this._route.navigate(['/home']);
  //   }
  //   else{
  //     alert('Đăng nhập thất bại!');
  //   }
  // }
  get f() {return this.dangnhap.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.dangnhap.invalid) {return false;}
    console.log(this.dangnhap.value);
    this.service.dangnhap(this.dangnhap.value).subscribe(res =>{
      this.table = res;
      if(this.table[0].Column1 == 1) {
        alert('Đăng nhập thành công :))');
        this._route.navigate(['/home']);
      }
      else{
        alert('Đăng nhập thất bại!');
      } 
      // alert('Đăng nhập thành công thành công :))');
      // this._route.navigate(['/home/taikhoan']);
    })
       
  }
}
