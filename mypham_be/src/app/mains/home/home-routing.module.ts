import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitiethoadonbanComponent } from './chitiethoadonban/chitiethoadonban.component';
import { ChitiethoadonnhapComponent } from './chitiethoadonnhap/chitiethoadonnhap.component';
import { HoadonbanComponent } from './hoadonban/hoadonban.component';
import { HoadonnhapComponent } from './hoadonnhap/hoadonnhap.component';
import { HomeComponent } from './home.component';
import { KhAddComponent } from './khachhang/kh-add/kh-add.component';
import { KhEditComponent } from './khachhang/kh-edit/kh-edit.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { LspAddComponent } from './loaisanpham/lsp-add/lsp-add.component';
import { LspEditComponent } from './loaisanpham/lsp-edit/lsp-edit.component';
import { NccAddComponent } from './nhacungcap/ncc-add/ncc-add.component';
import { NccEditComponent } from './nhacungcap/ncc-edit/ncc-edit.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { NvAddComponent } from './nhanvien/nv-add/nv-add.component';
import { NvEditComponent } from './nhanvien/nv-edit/nv-edit.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { SpAddComponent } from './sanpham/sp-add/sp-add.component';
import { SpEditComponent } from './sanpham/sp-edit/sp-edit.component';
import { SlideComponent } from './slide/slide.component';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';
import { TkAddComponent } from './taikhoan/tk-add/tk-add.component';
import { TkEditComponent } from './taikhoan/tk-edit/tk-edit.component';
import { IndexComponent } from './index/index.component';



const routes: Routes = [
  { path: '', component: HomeComponent, children:[
    {path:'', component: IndexComponent},
    { path: 'nhacungcap', children:[
      { path: '', component: NhacungcapComponent},
      { path: 'add', component: NccAddComponent},
      { path: 'edit/:id', component: NccEditComponent},
    ]},
    { path: 'loaisanpham', children:[
      { path: '', component: LoaisanphamComponent},
      { path: 'add', component: LspAddComponent},
      { path: 'edit/:id', component: LspEditComponent},
    ]},
    { path: 'sanpham', children:[
      { path: '', component: SanphamComponent},
      { path: 'add', component: SpAddComponent},
      { path: 'edit/:id', component: SpEditComponent},
    ]},
    { path: 'khachhang', children:[
      { path: '', component: KhachhangComponent},
      { path: 'add', component: KhAddComponent},
      { path: 'edit/:id', component: KhEditComponent},
    ]},
    { path: 'nhanvien', children:[
      { path: '', component: NhanvienComponent},
      { path: 'add', component: NvAddComponent},
      { path: 'edit/:id', component: NvEditComponent},
    ]},
    { path: 'hoadonnhap', component: HoadonnhapComponent},
    { path: 'chitiethoadonnhap', component: ChitiethoadonnhapComponent},
    { path: 'hoadonban', component: HoadonbanComponent},
    { path: 'chitiethoadonban', component: ChitiethoadonbanComponent},
    { path: 'taikhoan', children:[
      { path: '', component: TaikhoanComponent},
      { path: 'add', component: TkAddComponent},
      { path: 'edit/:id', component: TkEditComponent},
    ]},
    { path: 'slide', component: SlideComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
