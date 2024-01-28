import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CalserviceService } from '../calservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fname1:string=" ";
  lname1:string=" ";
  mail1:string=" ";
  Phone1:string=" ";
  display:string=" ";
  constructor(private cal:CalserviceService) { }
  validate(){
    this.cal.send(this.fname1,this.lname1,this.mail1,this.Phone1)
    alert("Login successful");
    
  }
}
