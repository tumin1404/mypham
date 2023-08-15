import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lsp-add',
  templateUrl: './lsp-add.component.html',
  styleUrls: ['./lsp-add.component.css']
})
export class LspAddComponent implements OnInit {
  submited: boolean = false;
  lspadd = this.fb.group({
    cate_name: ['',Validators.required],
    cate_img: ['',Validators.required],
    cate_note: ['',Validators.required]
  });
  constructor(private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   ngOnInit(): void {

  }
  get f() {return this.lspadd.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.lspadd.invalid) {return false;}
    console.log(this.lspadd.value);
    this.service.themlsp(this.lspadd.value).subscribe(res =>{
      alert('Thêm mới thành công :))');
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
