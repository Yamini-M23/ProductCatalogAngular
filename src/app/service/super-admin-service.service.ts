import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminServiceService {

  url:string="http://localhost:9292/admin"

  constructor(private http:HttpClient) { }

 
getAdmins()
{
  return this.http.get(this.url+"/getadmins");
}


editProducts(products:any)
{
  return this.http.post("http://localhost:8585/add/editplans",products)
}

deletePoducts(products:any)
{
  return this.http.post("http://localhost:8585/add/deleteplans",products)
}

// editWirelessPrepaid(products:any)

// {

//   return this.http.post("http://localhost:9090/Wireless/editWlessPrePaid",products)

// }

// deleteWirelessPrepaid(products:any)

// {

//   return this.http.post("http://localhost:9090/Wireless/deleteWlessPrePaid",products)

// }
}
