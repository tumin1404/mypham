import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent extends BaseComponent implements OnInit,AfterViewInit {
  txt_search:any;
  public frmSearch: FormGroup;
  constructor(private renderer: Renderer2,private route:Router,private service:SharedService,injector: Injector) { 
    super(injector);
    this.frmSearch = new FormGroup({
      'ten': new FormControl('', []),
    });
  }
  title= 'pagination'

  page:number = 1;
  count:number = 0;
  public tablesize:number = 5;
  table_numberSize:any = [5,10,15];

  dsKhachhang:any;
  ngOnInit(): void {
    this.LoadData();
    this.reloadDsKhachhang();
  }
  reloadDsKhachhang(){
    this.service.getallKhachhang().subscribe(data =>{
      this.dsKhachhang = data;
    })
  }
  xoaKhachhang(dsKhachhang:any){
    if(confirm("Bạn muốn xóa thông tin khách hàng?")){
      this.service.xoakh(dsKhachhang.customer_id).subscribe(data =>{
        alert(data.toString());
        this.reloadDsKhachhang();
      });
    };
  }
  public LoadData() {
    this.service.timkiemkh(this.frmSearch.value['ten']).subscribe(data => {
      this.dsKhachhang = data;
    });
  }

  sizeChange(event:any):void{
    this.tablesize = event.target.value; debugger
    this.page = 1;
    this. get();
  }
  get() {
    throw new Error('Method not implemented.');
  }
  dataChange(event:any):void{
    this.page = event;
  }
  
  ngAfterViewInit() { 
    this.loadScripts(
      '../../../assets/js/jquery.min.js',
      '../../../assets/js/popper.min.js',
      '../../../assets/js/bootstrap.min.js',
      '../../../assets/js/apps.js',
    ); 
  }
  // public loadScripts() {
  //   this.renderExternalScript('../../../assets/js/jquery.min.js').onload = () => {
  //   }
  //   this.renderExternalScript('../../../assets/js/popper.min.js').onload = () => {
  //   }
  //   this.renderExternalScript('../../../assets/js/bootstrap.min.js').onload = () => {
  //   }
  //   this.renderExternalScript('../../../assets/js/apps.js').onload = () => {
  //   }
  // }
  // public renderExternalScript(src: string): HTMLScriptElement {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = src;
  //   script.async = true;
  //   script.defer = true;
  //   this.renderer.appendChild(document.body, script);
  //   return script;
  // }
}
