import { AfterViewInit, Component, OnInit, Renderer2,Injector } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { BaseComponent } from 'src/app/core/common/base-component';
import { CartService } from 'src/app/core/services/cart.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shop-all',
  templateUrl: './shop-all.component.html',
  styleUrls: ['./shop-all.component.css']
})
export class ShopAllComponent extends BaseComponent implements OnInit {
  txt_search:any;
  public list_sp: any;
  public frmSearch: FormGroup;
  public item:any;
  constructor(private renderer: Renderer2 ,private service: SharedService, injector: Injector, private cart:CartService) {
    super(injector);
    this.frmSearch = new FormGroup({
      'ten': new FormControl('', []),
    });
   }
  dsSanpham:any;
  ngOnInit(): void {
    console.log(this.frmSearch);
    this.LoadData();

    this.reloadDsSanpham();
    this.loadDsSanphambyCateID();
  }
  public LoadData() {
    this._api.get('/sanpham/timkiem/'+this.frmSearch.value['ten']).subscribe(data => {
      this.list_sp = data;
    });
  }
  reloadDsSanpham(){
    this.service.getallSanpham().subscribe(data =>{
      this.dsSanpham = data;
    })    
  }
  loadDsSanphambyCateID(){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._api.get('/sanpham/getcateid/'+id).subscribe(res => {
      this.dsSanpham = res;
    });
    });
  }
  addcart(item:any){
    this.cart.addToCart(item);
    alert('thêm thành công');
  }
}
