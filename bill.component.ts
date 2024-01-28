import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CalserviceService } from '../calservice.service';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  name:string="";
  lname:string="";
  phoneno:string="";
  email:string="";
 constructor(private mvp:CalserviceService)
 {
  
 }
 show()
 {this.name=this.mvp.rev1();
  this.lname=this.mvp.rev2();
  this.phoneno=this.mvp.rev3();
  this.email=this.mvp.rev4();}
 
}
