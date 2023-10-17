import { Component } from '@angular/core';
import { AddPlanServiceService } from 'src/app/service/add-plan-service.service';

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

  

   constructor(private service:AddPlanServiceService)
  {
    this.service.getPlan(this.productcategory).subscribe((pro)=>{this.Products=pro});
   
  }

 

}
