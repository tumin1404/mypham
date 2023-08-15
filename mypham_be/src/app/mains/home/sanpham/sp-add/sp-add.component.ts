import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sp-add',
  templateUrl: './sp-add.component.html',
  styleUrls: ['./sp-add.component.css']
})
export class SpAddComponent implements OnInit {
  submited: boolean = false;
  spadd = this.fb.group({
    product_cate_id: ['',Validators.required],
    product_distributor_id: ['',Validators.required],
    product_name: ['',Validators.required],
    product_img: ['',Validators.required],
    product_price: ['',Validators.required],
    product_sale: ['',Validators.required],
    product_quantity: ['',Validators.required],
    product_unit: ['',Validators.required],
    product_note: ['',Validators.required]
  });
  constructor(private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   dsLoaisanpham:any;
   dsNhacungcap:any;
   ngOnInit(): void {
    this.reloadDsNhacungcap();
    this.reloadDsLoaisanpham();
  }
  reloadDsLoaisanpham(){
    this.service.getallLoaisanpham().subscribe(data =>{
      this.dsLoaisanpham = data;
    })
  }
  reloadDsNhacungcap(){
    this.service.getallNhacungcap().subscribe(data =>{
      this.dsNhacungcap = data;
    })
  }
  get f() {return this.spadd.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.spadd.invalid) {return false;}
    console.log(this.spadd.value);
    this.service.themsp(this.spadd.value).subscribe(res =>{
      alert('Thêm mới thành công :))');
      this._route.navigate(['/home/sanpham']);
    })

  }
  ngAfterViewInit() { 
      this.loadScripts(); 
    }
    public loadScripts() {
      this.renderExternalScript('../../../assets/js/jquery.min.js').onload = () => {
      }
      this.renderExternalScript('../../../assets/js/popper.min.js').onload = () => {
      }
      this.renderExternalScript('../../../assets/js/bootstrap.min.js').onload = () => {
      }
      this.renderExternalScript('../../../assets/js/apps.js').onload = () => {
      }
    }
    public renderExternalScript(src: string): HTMLScriptElement {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = true;
      script.defer = true;
      this.renderer.appendChild(document.body, script);
      return script;
    }
}
