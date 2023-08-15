import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../shared/services/shared.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CateHitComponent } from './cate-hit/cate-hit.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopAllComponent } from './shop-all/shop-all.component';
import { LoginComponent } from './login/login.component';
import { ProductIndexComponent } from './product-index/product-index.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHotComponent } from './product-hot/product-hot.component';
import { TimkiemComponent } from './timkiem/timkiem.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    SlideshowComponent,
    CateHitComponent,
    CartComponent,
    CheckoutComponent,
    ShopAllComponent,
    LoginComponent,
    ProductIndexComponent,
    BlogIndexComponent,
    ProductDetailComponent,
    ProductHotComponent,
    TimkiemComponent
  ],
  imports: [
    HomeRoutingModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SharedService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
