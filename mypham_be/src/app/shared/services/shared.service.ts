import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5100/api";

  constructor(private http:HttpClient) { }

  getallNhacungcap():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/nhacungcap/getall')
  }
  getallLoaisanpham():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/loaisanpham/getall')
  }
  getallSanpham():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/getall')
  }
  getallKhachhang():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/khachhang/getall')
  }
  getallNhanvien():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/nhanvien/getall')
  }
  getallHoadonnhap():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/hoadonnhap/getall')
  }
  getallChitiethoadonnhap():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/chitiethoadonnhap/getall')
  }
  getallHoadonban():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/hoadonban/getall')
  }
  getallChitiethoadonban():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/chitiethoadonban/getall')
  }
  getallTaikhoan():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/taikhoan/getall')
  }
  getallSlide():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/slide/getall')
  }
  timkiemsp(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sanpham/timkiem/'+ten)
  }
  timkiemncc(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/nhacungcap/timkiem/'+ten)
  }
  timkiemlsp(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/loaisanpham/timkiem/'+ten)
  }
  timkiemkh(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/khachhang/timkiem/'+ten)
  }
  timkiemnv(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/nhanvien/timkiem/'+ten)
  }
  timkiemhdn(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/hoadonnhap/timkiem/'+ten)
  }
  timkiemcthdn(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/chitiethoadonnhap/timkiem/'+ten)
  }
  timkiemhdb(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/hoadonban/timkiem/'+ten)
  }
  timkiemcthdb(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/chitiethoadonban/timkiem/'+ten)
  }
  timkiemtk(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/taikhoan/timkiem/'+ten)
  }
  timkiemsl(ten:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/slide/timkiem/'+ten)
  }
  themncc(data:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'/nhacungcap/post/',data);
  }
  suancc(data:any):Observable<any>{
    return this.http.put<any>(this.APIUrl+'/nhacungcap/put/',data);
  }
  xoancc(id:any):Observable<any>{
    return this.http.delete<any>(this.APIUrl+'/nhacungcap/'+id);
  }
  themlsp(data:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'/loaisanpham/post/',data);
  }
  sualsp(data:any):Observable<any>{
    return this.http.put<any>(this.APIUrl+'/loaisanpham/put/',data);
  }
  xoalsp(id:any):Observable<any>{
    return this.http.delete<any>(this.APIUrl+'/loaisanpham/'+id);
  }
  themsp(data:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'/sanpham/post/',data);
  }
  suasp(data:any):Observable<any>{
    return this.http.put<any>(this.APIUrl+'/sanpham/put/',data);
  }
  xoasp(id:any):Observable<any>{
    return this.http.delete<any>(this.APIUrl+'/sanpham/'+id);
  }
  themkh(data:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'/khachhang/post/',data);
  }
  suakh(data:any):Observable<any>{
    return this.http.put<any>(this.APIUrl+'/khachhang/put/',data);
  }
  xoakh(id:any):Observable<any>{
    return this.http.delete<any>(this.APIUrl+'/khachhang/'+id);
  }
  themnv(data:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'/nhanvien/post/',data);
  }
  suanv(data:any):Observable<any>{
    return this.http.put<any>(this.APIUrl+'/nhanvien/put/',data);
  }
  xoanv(id:any):Observable<any>{
    return this.http.delete<any>(this.APIUrl+'/nhanvien/'+id);
  }
  themtk(data:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'/taikhoan/post/',data);
  }
  suatk(data:any):Observable<any>{
    return this.http.put<any>(this.APIUrl+'/taikhoan/put/',data);
  }
  xoatk(id:any):Observable<any>{
    return this.http.delete<any>(this.APIUrl+'/taikhoan/'+id);
  }
  dangnhap(data:any):Observable<any>{
    return this.http.post<any>(this.APIUrl+'/taikhoan/dangnhap/',data);
  }
}
