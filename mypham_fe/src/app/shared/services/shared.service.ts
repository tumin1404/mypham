import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5100/api";

  constructor(private http:HttpClient) { }

  // getallDistribustor():Observable<any[]>{
  //   return this.http.get<any>(this.APIUrl+'/distributor/getall')
  // }
  getallLoaisanpham():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/loaisanpham/getall')
  }
  getLoaisphit():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/loaisanpham/gethot')
  }
  getallSanpham():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/getall')
  }
  getSanphamHot():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/gethot')
  }
  getSanphambyID(id:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/'+id)
  }
  getSanphambyCateID(cate_id:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/getcateid/'+cate_id)
  }
  getSanphamCateIDDetail(cate_id:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/getcatedetail/'+cate_id)
  }
  timkiemsp(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/timkiem/'+ten)
  }
  getallSlide():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/slide/getall')
  }
  themkh(val:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'/khachhang/post/',val);
  }
  themcthdb(val:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'/chitiethoadonban/post/',val);
  }
  
}
