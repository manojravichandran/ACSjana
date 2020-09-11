import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from './authguard.service';

const routes: Routes = [

  {path:"", component:LoginComponent},
  { path:'home',component:HomeComponent,canActivate:[AuthGuardService]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
