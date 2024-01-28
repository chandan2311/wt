import { Component } from '@angular/core';
import {ComputeService} from './compute.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'fri';
  a=3;
  list=["hello","hi","Good morning"];
  firstname:string='';
  lastname:string='';
  email:string='';
  password:string='';
  quantity:number=0;
  price:number=0;
  price1:number=0;
  bol:boolean=false;
  constructor(private obj:ComputeService){
  
  
}
display()
  {
   

    this.price1=this.obj.calculate(this.quantity,this.price);
    this.bol=true;
  }
}