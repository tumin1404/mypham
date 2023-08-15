import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tk-edit',
  templateUrl: './tk-edit.component.html',
  styleUrls: ['./tk-edit.component.css']
})
export class TkEditComponent implements OnInit {
  submited: boolean = false;
  public id:any;
  public subscription!: Subscription;
  tkedit = this.fb.group({
    users_id: ['',Validators.required],
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
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   tkbyid: any;
   ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id);
    })
    this.http.get('http://localhost:5100/api/taikhoan/'+this.id).subscribe(data => { 
      this.tkbyid = data;
      this.tkedit = this.fb.group({
        users_id: [this.tkbyid[0].users_id,Validators.required],
        users_full_name: [this.tkbyid[0].users_full_name,Validators.required],
        users_name: [this.tkbyid[0].users_name,Validators.required],
        users_password: [this.tkbyid[0].users_password,Validators.required],
        users_mail: [this.tkbyid[0].users_mail,Validators.required],
        users_phone: [this.tkbyid[0].users_phone,Validators.required],
        users_token: [this.tkbyid[0].users_token],
        users_role: [this.tkbyid[0].users_role,Validators.required],
        users_status: [this.tkbyid[0].users_status,Validators.required],
        users_note: [this.tkbyid[0].users_note,Validators.required]
      });
    console.log(data);})
    

  }

  
  get f() {return this.tkedit.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.tkedit.invalid) {return false;}
    console.log(this.tkedit.value);
    this.service.suatk(this.tkedit.value).subscribe(res =>{
      alert('Cập nhật thành công :))');
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
