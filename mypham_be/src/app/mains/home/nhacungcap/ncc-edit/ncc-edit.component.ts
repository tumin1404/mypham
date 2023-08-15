import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ncc-edit',
  templateUrl: './ncc-edit.component.html',
  styleUrls: ['./ncc-edit.component.css']
})
export class NccEditComponent implements OnInit {
  submited: boolean = false;
  public id:any;
  public subscription!: Subscription;
  nccadd = this.fb.group({
    distributor_id: ['',Validators.required],
    distributor_name: ['',Validators.required],
    distributor_address: ['',Validators.required],
    distributor_phone: ['',Validators.required],
    distributor_mail: ['',Validators.required],
    distributor_note: ['',Validators.required]
  });
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   nccbyid: any;
   ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id);
    })
    this.http.get('http://localhost:5100/api/nhacungcap/'+this.id).subscribe(data => { 
      this.nccbyid = data;
      this.nccadd = this.fb.group({
        distributor_id: [this.nccbyid[0].distributor_id,Validators.required],
        distributor_name: [this.nccbyid[0].distributor_name,Validators.required],
        distributor_address: [this.nccbyid[0].distributor_address,Validators.required],
        distributor_phone: [this.nccbyid[0].distributor_phone,Validators.required],
        distributor_mail: [this.nccbyid[0].distributor_mail,Validators.required],
        distributor_note: [this.nccbyid[0].distributor_note,Validators.required]
      });
    console.log(data);})
    

  }

  
  get f() {return this.nccadd.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.nccadd.invalid) {return false;}
    console.log(this.nccadd.value);
    this.service.suancc(this.nccadd.value).subscribe(res =>{
      alert('Cập nhật thành công :))');
      this._route.navigate(['/home/nhacungcap']);
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
