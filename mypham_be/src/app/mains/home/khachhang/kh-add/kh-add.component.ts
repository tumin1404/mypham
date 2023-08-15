import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kh-add',
  templateUrl: './kh-add.component.html',
  styleUrls: ['./kh-add.component.css']
})
export class KhAddComponent implements OnInit {
  submited: boolean = false;
  khadd = this.fb.group({
    customer_name: ['',Validators.required],
    customer_address: ['',Validators.required],
    customer_phone: ['',Validators.required],
    customer_mail: ['',Validators.required],
    customer_note: ['',Validators.required]
  });
  constructor(private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   ngOnInit(): void {

  }
  get f() {return this.khadd.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.khadd.invalid) {return false;}
    console.log(this.khadd.value);
    this.service.themkh(this.khadd.value).subscribe(res =>{
      alert('Thêm mới thành công :))');
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
