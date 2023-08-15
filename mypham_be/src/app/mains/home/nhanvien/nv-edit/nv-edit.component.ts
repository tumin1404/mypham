import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nv-edit',
  templateUrl: './nv-edit.component.html',
  styleUrls: ['./nv-edit.component.css']
})
export class NvEditComponent implements OnInit {
  submited: boolean = false;
  public id:any;
  public subscription!: Subscription;
  nvedit = this.fb.group({
    staff_id: ['',Validators.required],
    staff_name: ['',Validators.required],
    staff_dateofbirth: ['',Validators.required],
    staff_address: ['',Validators.required],
    staff_phone: ['',Validators.required],
    staff_mail: ['',Validators.required],
    staff_sex: ['',Validators.required],
    staff_levels: ['',Validators.required],
    staff_note: ['',Validators.required]
  });
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   nvbyid: any;
   ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id);
    })
    this.http.get('http://localhost:5100/api/nhanvien/'+this.id).subscribe(data => { 
      this.nvbyid = data;
      this.nvedit = this.fb.group({
        staff_id: [this.nvbyid[0].staff_id,Validators.required],
        staff_name: [this.nvbyid[0].staff_name,Validators.required],
        staff_dateofbirth: [this.nvbyid[0].staff_dateofbirth,Validators.required],
        staff_address: [this.nvbyid[0].staff_address,Validators.required],
        staff_phone: [this.nvbyid[0].staff_phone,Validators.required],
        staff_mail: [this.nvbyid[0].staff_mail,Validators.required],
        staff_sex: [this.nvbyid[0].staff_sex,Validators.required],
        staff_levels: [this.nvbyid[0].staff_levels,Validators.required],
        staff_note: [this.nvbyid[0].staff_note,Validators.required],
      });
    console.log(data);})
    

  }

  
  get f() {return this.nvedit.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.nvedit.invalid) {return false;}
    console.log(this.nvedit.value);
    this.service.suanv(this.nvedit.value).subscribe(res =>{
      alert('Cập nhật thành công :))');
      this._route.navigate(['/home/nhanvien']);
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
