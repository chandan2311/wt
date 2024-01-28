import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CalserviceService } from './calservice.service';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BillComponent } from './bill/bill.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    BillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  FormsModule
  ],
  providers: [CalserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
