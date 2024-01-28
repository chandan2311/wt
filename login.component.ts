import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  rememberMe:boolean = false;
  
  usn1:string=''; 
  password1:string=''; 
  constructor(private router: Router) {}
  redirectToOtherApp() {
    if(this.usn1 == '02fe21adm021' && this.password1 == 'Admin123@'){
    const targetUrl = 'http://localhost:4200/users/';
    
    // Navigate to the receiving application
    window.location.href = `${targetUrl}/path-in-receiving-app`;
  }
  else{
    alert("Invalid Credentials");
  }
  }


login() {
    
    console.log(this.usn1);
    if(this.usn1 == '02fe21bcs021' && this.password1 == 'Chandan2311@'){
      console.log("Valid");
      alert("Login Successful");
      this.router.navigate(['/chatwindow']);
    }
    else{
      console.log("Invalid");
      alert("Invalid Credentials");
    }
    // rest of your code
  }
}

