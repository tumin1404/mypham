import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lsp-edit',
  templateUrl: './lsp-edit.component.html',
  styleUrls: ['./lsp-edit.component.css']
})
export class LspEditComponent implements OnInit {
  submited: boolean = false;
  public id:any;
  public subscription!: Subscription;
  lspedit = this.fb.group({
    cate_id: ['',Validators.required],
    cate_name: ['',Validators.required],
    cate_img: ['',Validators.required],
    cate_note: ['',Validators.required]
  });
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   lspbyid: any;
   ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
      console.log(this.id);
    })
    this.http.get('http://localhost:5100/api/loaisanpham/'+this.id).subscribe(data => { 
      this.lspbyid = data;
      this.lspedit = this.fb.group({
        cate_id: [this.lspbyid[0].cate_id,Validators.required],
        cate_name: [this.lspbyid[0].cate_name,Validators.required],
        cate_img: [this.lspbyid[0].cate_img],
        cate_note: [this.lspbyid[0].cate_note]
      });
    console.log(data);})
    

  }

  
  get f() {return this.lspedit.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.lspedit.invalid) {return false;}
    console.log(this.lspedit.value);
    this.service.sualsp(this.lspedit.value).subscribe(res =>{
      alert('Cập nhật thành công :))');
      this._route.navigate(['/home/loaisanpham']);
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
