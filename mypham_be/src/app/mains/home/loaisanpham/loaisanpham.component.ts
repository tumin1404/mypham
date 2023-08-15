import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-loaisanpham',
  templateUrl: './loaisanpham.component.html',
  styleUrls: ['./loaisanpham.component.css']
})
export class LoaisanphamComponent extends BaseComponent implements OnInit {
  txt_search:any;
  public frmSearch: FormGroup;
  constructor(private renderer: Renderer2,private route:Router,private service:SharedService,injector: Injector) {
    super(injector);
    this.frmSearch = new FormGroup({
      'ten': new FormControl('', []),
    });
  }
  dsLoaisanpham:any;

  page:number = 1;
  count:number = 0;
  public tablesize:number = 2;
  table_numberSize:any = [4,6,15];

  ngOnInit(): void {
    this.reloadDsLoaisanpham();
    this.LoadData();
  }
  reloadDsLoaisanpham(){
    this.service.getallLoaisanpham().subscribe(data =>{
      this.dsLoaisanpham = data;
    })
  }
  xoaLoaisanpham(dsLoaisanpham:any){
    if(confirm("Bạn muốn xóa thông tin loại sản phẩm?")){
      this.service.xoalsp(dsLoaisanpham.cate_id).subscribe(data =>{
        alert(data.toString());
        this.reloadDsLoaisanpham();
      });
    };
  }
  public LoadData() {
    this.service.timkiemlsp(this.frmSearch.value['ten']).subscribe(data => {
      this.dsLoaisanpham = data;
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
