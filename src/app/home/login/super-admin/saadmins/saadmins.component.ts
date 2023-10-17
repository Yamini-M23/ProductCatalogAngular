import { Component } from '@angular/core';
import { SuperAdminServiceService } from 'src/app/service/super-admin-service.service';

@Component({
  selector: 'app-saadmins',
  templateUrl: './saadmins.component.html',
  styleUrls: ['./saadmins.component.css']
})
export class SAadminsComponent {

  admins:any;

  constructor(private service:SuperAdminServiceService)
  {
  this.service.getAdmins().subscribe((admins)=>{this.admins=admins});
console.log(this.admins);
}

}
