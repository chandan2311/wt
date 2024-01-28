import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalserviceService {

  name:string="";
  lname:string="";
  phoneno:string="";
  email:string="";

  add(a:string)
  {
    a="shivani"
    return a;
  }
  send(a:string,b:string,c:string,d:string)
  {
    this.name=a;
    this.lname=b;
    this.phoneno=c;
    this.email=d;
  }
  rev1()
  {
    return this.name;
  }
  rev2()
  {
    return this.lname;
  }
  rev3()
  {
    return this.phoneno;
  }
  rev4()
  {
    return this.email;
  }
}
