import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tk-add',
  templateUrl: './tk-add.component.html',
  styleUrls: ['./tk-add.component.css']
})
export class TkAddComponent implements OnInit {
  submited: boolean = false;
  tkadd = this.fb.group({
    users_full_name: ['',Validators.required],
    users_name: ['',Validators.required],
    users_password: ['',Validators.required],
    users_mail: ['',Validators.required],
    users_phone: ['',Validators.required],
    users_token: [''],
    users_role: ['',Validators.required],
    users_status: ['',Validators.required],
    users_note: ['',Validators.required]
  });
  constructor(private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   ngOnInit(): void {

  }
  get f() {return this.tkadd.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.tkadd.invalid) {return false;}
    console.log(this.tkadd.value);
    this.service.themtk(this.tkadd.value).subscribe(res =>{
      alert('Thêm mới thành công :))');
      this._route.navigate(['/home/taikhoan']);
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
