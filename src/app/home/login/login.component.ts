import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperAdminServiceService } from 'src/app/service/super-admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  title = 'Product Catalog';
  valid:any[]=[];
  name:any;
  password:any;
  email:any;
  approve:boolean=false;
  v:boolean=false;
  username:any;

  constructor(private router:Router,private service:SuperAdminServiceService)
  {
   
  }
  
  // adminValidation(email:any,pass:any):boolean
  // {
  //   if(email=="superadmin@provue.in" && pass=="SA@Provue")
  //   {
  //     return true;
  //   }

  //   else if(email=="admin2@provue.in" && pass=="Admin@Provue")
  //   {
  //     return true;
  //   }

  //   else if(email=="admin3@provue.in" && pass=="Admin@Provue")
  //   {
  //     return true;
  //   }
  //  return false;
  // }

  datasubmitted(email:any,password:any)
  {
    console.log(email,password);
    if(email=="superadmin@provue.com" &&password=="SAProvue")
    {
      console.log("login sucess");
      this.router.navigate(['/superadmin']);
    }

    // else
    // {
    // this.valid[]= this.adminValidation(email,pass);
    // }

    else{

      this.service.validateAdmins(email,password).subscribe(

        (response:any)=>{

          if(response.status=="success"){
            this.v=true;

            localStorage.setItem('currentUser', JSON.stringify(response));//object

            localStorage.setItem('password',JSON.stringify(response.credentials.password));//object attribute

            localStorage.setItem('username',JSON.stringify(response.credentials.adminName));

            localStorage.setItem('email',JSON.stringify(response.credentials.email));

            localStorage.setItem('userid',JSON.stringify(response.credentials.adminId));

       

            const storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

            const password=JSON.parse(localStorage.getItem('password')+'');

            const email=JSON.parse(localStorage.getItem('email')+'');

            const username=JSON.parse(localStorage.getItem('username')+'');

            const userid=JSON.parse(localStorage.getItem('userid')+'');

            console.log("local storage",storedUser);

            console.log("UserName",username);

            console.log("email",email);

            console.log("pass",password);
     
            console.log("id",userid);

         
           this.router.navigate(['/admin']);

          }

        },

        (error:any)=>
        {

      console.error('Login Failed:',error);

        }

        );


    }

  }

 

}

  


