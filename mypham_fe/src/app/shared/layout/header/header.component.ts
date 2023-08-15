import { AfterViewInit, Component, OnInit,Injector } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from '../../services/shared.service';
import { CartService } from 'src/app/core/services/cart.service';
import { BaseComponent } from '../../../core/common/base-component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  list_Cart:any;
  txt_search:any;
  public list_sp: any;
  public frmSearch: FormGroup;
  constructor(private cart:CartService,private route:Router,private service:SharedService,injector: Injector) { 
    super(injector);
    this.frmSearch = new FormGroup({
      'ten': new FormControl('', []),
    });
  }
  dsloaisanpham:any=[];
  

  ngOnInit(): void {
    console.log(this.txt_search);

    this.LoadData();
    this.reloadDsLoaisanpham();
    
    this.loadcart();
    this.list_Cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.list_Cart.forEach((x:any)=>{
      this.total += Number(x.quantity*x.product_sale);
      debugger
    })
    
  }
  public LoadData() {
    this.service.timkiemsp(this.frmSearch.value['ten']).subscribe(data => {
      this.list_sp = data;
    });
  }

  reloadDsLoaisanpham(){
    this.service.getallLoaisanpham().subscribe(data =>{
      this.dsloaisanpham = data;
    })
  }
  
  total = 0;;
  loadcart(){
   this.list_Cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
}
