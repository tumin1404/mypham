import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-cate-hit',
  templateUrl: './cate-hit.component.html',
  styleUrls: ['./cate-hit.component.css']
})
export class CateHitComponent implements OnInit {

  constructor(private share:SharedService) { }

  dsloaisphit:any=[];

  ngOnInit(): void {
    this.reloadDsLoaisphit();
  }

  reloadDsLoaisphit(){
    this.share.getLoaisphit().subscribe(data =>{
      this.dsloaisphit = data;
    })
  }

}
