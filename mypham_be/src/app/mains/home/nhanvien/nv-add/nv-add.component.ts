import { AfterViewInit, Component, OnInit, Renderer2,Injector  } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nv-add',
  templateUrl: './nv-add.component.html',
  styleUrls: ['./nv-add.component.css']
})
export class NvAddComponent implements OnInit {
  submited: boolean = false;
  nvadd = this.fb.group({
    staff_name: ['',Validators.required],
    staff_dateofbirth: ['',Validators.required],
    staff_address: ['',Validators.required],
    staff_phone: ['',Validators.required],
    staff_mail: ['',Validators.required],
    staff_sex: ['',Validators.required],
    staff_levels: ['',Validators.required],
    staff_note: ['',Validators.required]
  });
  constructor(private _route:Router,private fb:FormBuilder,private renderer: Renderer2,private service:SharedService) {

   }
   ngOnInit(): void {

  }
  get f() {return this.nvadd.controls;}
  onSubmit(): any{
    this.submited = true;
    if(this.nvadd.invalid) {return false;}
    console.log(this.nvadd.value);
    this.service.themnv(this.nvadd.value).subscribe(res =>{
      alert('Thêm mới thành công :))');
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
