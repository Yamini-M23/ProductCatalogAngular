import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  title = 'Product Catalog';
  valid:boolean=false;
  name:any;
  password:any;
  email:any;

  constructor(private router:Router)
  {
  }
  
  adminValidation(name:any,email:any,pass:any):boolean
  {
    if(name=="ProVueAdmin1" && email=="admin1@provue.in" && pass=="Admin@Provue")
    {
      return true;
    }

    else if(name=="ProVueAdmin2" && email=="admin2@provue.in" && pass=="Admin@Provue")
    {
      return true;
    }

    else if(name=="ProVueAdmin3" && email=="admin3@provue.in" && pass=="Admin@Provue")
    {
      return true;
    }
   return false;
  }

  datasubmitted(name:any,email:any,pass:any)
  {
    if(name=="SuperAdmin" && email=="superadmin@provue.com" &&pass=="SAProvue")
    {
      console.log("login sucess");
      this.router.navigate(['/superadmin']);
    }

    else
    {
    this.valid= this.adminValidation(name,email,pass);
    }

  }

}
