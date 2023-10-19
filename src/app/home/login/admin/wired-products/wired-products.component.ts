import { Component, Input } from '@angular/core';
import { AddPlanServiceService } from 'src/app/service/add-plan-service.service';
import { SuperAdminServiceService } from 'src/app/service/super-admin-service.service';

@Component({
  selector: 'app-wired-products',
  templateUrl: './wired-products.component.html',
  styleUrls: ['./wired-products.component.css']
})
export class WiredProductsComponent {

  Products:any;
  category:any;
  productsubcategory:any='ALL';
  productcategory:String='WiredLine';

  
  id:any;
  plan:any;
	validity:any;
  billcycle:any;
	data:any;
	dataperday:any;
	voice:any;
	sms:any;
	subscriptions:String[]=[];
	addon:any;
	admin:any="";
	status:any="Not-Approved";

  products :any;
  subProductSelected:any;
  editProducts:any;

  username:any=JSON.parse(localStorage.getItem('username')+'');
  
  @Input() editproducts:any;

   constructor(private service:AddPlanServiceService,private aservice:SuperAdminServiceService)
  {
    this.service.getPlan(this.productcategory).subscribe((pro)=>{this.Products=pro});
   
  }

  // editPlan(pedit:any)
  // {
  //  this.Products=this.products.filter((pro: { id: any; })=>pro.id==pedit);
  // }
 
  // deletePlan(pdelete:any)
  // {
  //  this.aservice.deleteWirelineProducts(pdelete).subscribe();
  // }

  editPlan(pedit:any)
 {
  console.log(pedit)
  // this.editProducts=pedit;
localStorage.setItem('pdata',JSON.stringify(pedit));
  this.editproducts=pedit;

  // this.aservice.editProducts(pedit)=this.sendProduct;
//  return this.products.filter((pro: { id: any; })=>pro.id==pedit);
 }

 deletePlan(pdelete:any)
 {
  this.aservice.deletePoducts(pdelete).subscribe();
 }

//   getCheckboxValues() {
//     const checkBoxes = document.querySelectorAll('input[type=checkbox]:checked');
//     const values = Array.from(checkBoxes).map(element => (element as HTMLInputElement).value);
//     console.log(values);
//     return values;
//   }

//   onsubmit()
//   {
//   this.products=new ProductRequest(this.plan,this.category,this.productcategory,this.productsubcategory,this.validity,this.billcycle,this.data,this.dataperday,this.voice,this.sms,this.getCheckboxValues(),this.addon,this.admin,this.status);
//  // this.products=new ProductRequest(this.plan,this.category,this.productcategory,this.productsubcategory,this.validity,this.data,this.dataperday,this.voice,this.sms,this.subscriptions,this.addon,this.admin,this.status);
//   this.service.addPlan(this.products).subscribe();
//  }

onEditSubmit()
{ 
//  pro.subscriptions=this.subProductSelected;

// this.editProducts=new products()
 console.log(this.editProducts);

 this.aservice.editProducts(this.editProducts).subscribe();

}


checkedSubscriptions(sub:any)
{
 this.subProductSelected.unshift(sub)
}


}
