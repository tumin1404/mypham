import { AfterViewInit, Component, OnInit, Renderer2,Injector } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() { 
    this.loadScripts(); 
   }
   public loadScripts() {
    this.renderExternalScript('../../../assets/js/jquery.min.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/bootstrap.bundle.min.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/jquery.hoverIntent.min.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/jquery.waypoints.min.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/superfish.min.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/owl.carousel.min.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/jquery.plugin.min.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/jquery.magnific-popup.min.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/jquery.countdown.min.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/main.js').onload = () => {
    }
    this.renderExternalScript('../../../assets/js/demos/demo-2.js').onload = () => {
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