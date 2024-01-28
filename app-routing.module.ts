import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import{HomeComponent} from './home/home.component';
import{BillComponent} from './bill/bill.component';
const routes: Routes = [{path:'login',component:LoginComponent},{path:'home',component:HomeComponent},{path:'bill',component:BillComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
