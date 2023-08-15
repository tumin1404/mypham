import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent extends BaseComponent implements OnInit {
  txt_search:any;
  public frmSearch: FormGroup;
  constructor(private renderer: Renderer2,private route:Router,private service:SharedService,injector: Injector) {
    super(injector);
    this.frmSearch = new FormGroup({
      'ten': new FormControl('', []),
    });
  }
  dsNhanvien:any;
  ngOnInit(): void {
    this.reloadDsNhanvien();
    this.LoadData();
  }
  reloadDsNhanvien(){
    this.service.getallNhanvien().subscribe(data =>{
      this.dsNhanvien = data;
    })
  }
  xoaNhanvien(dsNhanvien:any){
    if(confirm("Bạn muốn xóa thông tin nhân viên?")){
      this.service.xoanv(dsNhanvien.staff_id).subscribe(data =>{
        alert(data.toString());
        this.reloadDsNhanvien();
      });
    };
  }
  public LoadData() {
    this.service.timkiemnv(this.frmSearch.value['ten']).subscribe(data => {
      this.dsNhanvien = data;
    });
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
