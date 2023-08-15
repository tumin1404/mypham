import { Component, OnInit, Renderer2,Injector } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timkiem',
  templateUrl: './timkiem.component.html',
  styleUrls: ['./timkiem.component.css']
})
export class TimkiemComponent  extends BaseComponent implements OnInit {
  txt_search:any;
  public list_sp: any;
  public frmSearch: FormGroup;
  constructor(private cart:CartService,private route:Router,private service:SharedService,injector: Injector) { 
    super(injector);
    this.frmSearch = new FormGroup({
      'ten': new FormControl('', []),
    });
  }
  
  ngOnInit(): void {

    console.log(this.frmSearch);
    this.LoadData();

  }

  public LoadData() {
    this._api.get('/sanpham/timkiem/'+this.frmSearch.value['ten']).subscribe(data => {
      this.list_sp = data;
    });
  }

  
}
