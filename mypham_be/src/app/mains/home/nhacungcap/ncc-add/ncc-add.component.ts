import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ncc-add',
  templateUrl: './ncc-add.component.html',
  styleUrls: ['./ncc-add.component.css']
})
export class NccAddComponent implements OnInit {
  submited: boolean = false;
  nccadd = this.fb.group({
    distributor_name: ['',Validators.required],
    distributor_address: ['',Validators.required],
    distributor_phone: ['',Validators.required],
    distributor_mail: ['',Validators.required],
    distributor_note: ['',Validators.required]
  });
  constructor(private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   ngOnInit(): void {

  }
  get f() {return this.nccadd.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.nccadd.invalid) {return false;}
    this.service.themncc(this.nccadd.value).subscribe(res =>{
      alert('Thêm mới thành công :))');
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
