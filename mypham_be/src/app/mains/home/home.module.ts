import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { SharedService } from '../../shared/services/shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { NhanvienComponent } from './nhanvien/nhanvien.component';
import { HoadonnhapComponent } from './hoadonnhap/hoadonnhap.component';
import { ChitiethoadonnhapComponent } from './chitiethoadonnhap/chitiethoadonnhap.component';
import { HoadonbanComponent } from './hoadonban/hoadonban.component';
import { ChitiethoadonbanComponent } from './chitiethoadonban/chitiethoadonban.component';
import { TaikhoanComponent } from './taikhoan/taikhoan.component';
import { SlideComponent } from './slide/slide.component';
import { NccAddComponent } from './nhacungcap/ncc-add/ncc-add.component';
import { NccEditComponent } from './nhacungcap/ncc-edit/ncc-edit.component';
import { LspAddComponent } from './loaisanpham/lsp-add/lsp-add.component';
import { LspEditComponent } from './loaisanpham/lsp-edit/lsp-edit.component';
import { SpAddComponent } from './sanpham/sp-add/sp-add.component';
import { SpEditComponent } from './sanpham/sp-edit/sp-edit.component';
import { KhAddComponent } from './khachhang/kh-add/kh-add.component';
import { KhEditComponent } from './khachhang/kh-edit/kh-edit.component';
import { NvAddComponent } from './nhanvien/nv-add/nv-add.component';
import { NvEditComponent } from './nhanvien/nv-edit/nv-edit.component';
import { TkAddComponent } from './taikhoan/tk-add/tk-add.component';
import { TkEditComponent } from './taikhoan/tk-edit/tk-edit.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    HomeComponent,
    NhacungcapComponent,
    LoaisanphamComponent,
    SanphamComponent,
    KhachhangComponent,
    NhanvienComponent,
    HoadonnhapComponent,
    ChitiethoadonnhapComponent,
    HoadonbanComponent,
    ChitiethoadonbanComponent,
    TaikhoanComponent,
    SlideComponent,
    NccAddComponent,
    NccEditComponent,
    LspAddComponent,
    LspEditComponent,
    SpAddComponent,
    SpEditComponent,
    KhAddComponent,
    KhEditComponent,
    NvAddComponent,
    NvEditComponent,
    TkAddComponent,
    TkEditComponent,
    IndexComponent,

  ],
  imports: [
    HomeRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [SharedService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
