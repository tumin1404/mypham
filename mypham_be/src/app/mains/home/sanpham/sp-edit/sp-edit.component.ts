import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sp-edit',
  templateUrl: './sp-edit.component.html',
  styleUrls: ['./sp-edit.component.css']
})
export class SpEditComponent implements OnInit {
  submited: boolean = false;
  public id:any;
  public subscription!: Subscription;
  spedit = this.fb.group({
    product_id: ['',Validators.required],
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
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   dsLoaisanpham:any;
   dsNhacungcap:any;
   spbyid: any;
   ngOnInit(): void {
    this.reloadDsNhacungcap();
    this.reloadDsLoaisanpham();
    this.subscription = this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id);
    })
    this.http.get('http://localhost:5100/api/sanpham/'+this.id).subscribe(data => { 
      this.spbyid = data;
      this.spedit = this.fb.group({
        product_id: [this.spbyid[0].product_id,Validators.required],
        product_cate_id: [this.spbyid[0].product_cate_id,Validators.required],
        product_distributor_id: [this.spbyid[0].product_distributor_id,Validators.required],
        product_name: [this.spbyid[0].product_name,Validators.required],
        product_img: [this.spbyid[0].product_img,Validators.required],
        product_price: [this.spbyid[0].product_price,Validators.required],
        product_sale: [this.spbyid[0].product_sale,Validators.required],
        product_quantity: [this.spbyid[0].product_quantity,Validators.required],
        product_unit: [this.spbyid[0].product_unit,Validators.required],
        product_note: [this.spbyid[0].product_note,Validators.required]
      });
    console.log(data);})
    

  }

  reloadDsNhacungcap(){
    this.service.getallNhacungcap().subscribe(data =>{
      this.dsNhacungcap = data;
    })
  }
  reloadDsLoaisanpham(){
    this.service.getallLoaisanpham().subscribe(data =>{
      this.dsLoaisanpham = data;
    })
  }
  

  get f() {return this.spedit.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.spedit.invalid) {return false;}
    console.log(this.spedit.value);
    this.service.suasp(this.spedit.value).subscribe(res =>{
      alert('Cập nhật thành công :))');
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
