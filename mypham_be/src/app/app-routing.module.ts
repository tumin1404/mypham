import { PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: 'home', loadChildren:() => import('./mains/home/home.module').then((m) => m.HomeModule)},
  {path:'login', component: LoginComponent},
  {path:'', component: LoginComponent},
  
  

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
