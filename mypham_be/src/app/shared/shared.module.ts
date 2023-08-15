import { NgModule } from '@angular/core';
import { SharedService } from './services/shared.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule
  ],
  exports:[
    TopbarComponent,
    SidebarComponent,
    NgxPaginationModule
  ],
  providers: [SharedService],
})
export class SharedModule { }
