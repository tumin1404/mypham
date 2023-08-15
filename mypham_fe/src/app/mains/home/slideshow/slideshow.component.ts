import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor(private service:SharedService) { }
  dsslide:any=[];
  ngOnInit(): void {
    this.reloadDsSlide();
  }
  reloadDsSlide(){
    this.service.getallSlide().subscribe(data =>{
      this.dsslide = data;
    })
  }

}
