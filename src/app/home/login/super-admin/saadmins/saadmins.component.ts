import { Component } from '@angular/core';
import { SuperAdminServiceService } from 'src/app/service/super-admin-service.service';

@Component({
  selector: 'app-saadmins',
  templateUrl: './saadmins.component.html',
  styleUrls: ['./saadmins.component.css']
})
export class SAadminsComponent {

  admins:any;
  // statuss:any="Not-Approved";
  list:any;
  // status:any="Not-Approved";

  constructor(private service:SuperAdminServiceService)
  {
  this.service.getAdmins().subscribe((admins)=>{this.admins=admins});
 console.log(this.admins);
 }

 onApprove(admins:any)
  {
     this.list=admins;
     this.list.status="Approved"
     this.service.approveAdmins(this.list).subscribe();
  }

  onDelete(admins:any)
  {
    this.list=admins;
    this.service.deleteAdmins(admins).subscribe();
  }

}
