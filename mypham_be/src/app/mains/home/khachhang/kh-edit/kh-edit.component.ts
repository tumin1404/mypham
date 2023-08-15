import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kh-edit',
  templateUrl: './kh-edit.component.html',
  styleUrls: ['./kh-edit.component.css']
})
export class KhEditComponent implements OnInit {
  submited: boolean = false;
  public id:any;
  public subscription!: Subscription;
  khedit = this.fb.group({
    customer_id: ['',Validators.required],
    customer_name: ['',Validators.required],
    customer_address: ['',Validators.required],
    customer_phone: ['',Validators.required],
    customer_mail: ['',Validators.required],
    customer_note: ['',Validators.required]
  });
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   khbyid: any;
   ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id);
    })
    this.http.get('http://localhost:5100/api/khachhang/'+this.id).subscribe(data => { 
      this.khbyid = data;
      this.khedit = this.fb.group({
        customer_id: [this.khbyid[0].customer_id,Validators.required],
        customer_name: [this.khbyid[0].customer_name,Validators.required],
        customer_address: [this.khbyid[0].customer_address,Validators.required],
        customer_phone: [this.khbyid[0].customer_phone,Validators.required],
        customer_mail: [this.khbyid[0].customer_mail,Validators.required],
        customer_note: [this.khbyid[0].customer_note,Validators.required]
      });
    console.log(data);})
    

  }

  
  get f() {return this.khedit.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.khedit.invalid) {return false;}
    console.log(this.khedit.value);
    this.service.suakh(this.khedit.value).subscribe(res =>{
      alert('Cập nhật thành công :))');
      this._route.navigate(['/home/khachhang']);
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
