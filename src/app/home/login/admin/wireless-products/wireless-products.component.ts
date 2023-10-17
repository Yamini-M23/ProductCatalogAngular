import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product, products } from 'src/app/modules/product';
import { AddPlanServiceService } from 'src/app/service/add-plan-service.service';


@Component({
  selector: 'app-wireless-products',
  templateUrl: './wireless-products.component.html',
  styleUrls: ['./wireless-products.component.css']
})
export class WirelessProductsComponent {
  
  Products:any;
  category:any;
  productsubcategory:any='ALL';
  productcategory:any='WireLess';

  

   constructor(private service:AddPlanServiceService)
  {
    
    this.service.getPlan(this.productcategory).subscribe((pro)=>{this.Products=pro});
    // this.service.getPlans().subscribe((pro)=>{this.Products=pro});
    


    // this.Products.filter((pro:any)=>pro.productcategory==this.productcategory);
    // this.Products.filter((pro:any)=>pro==this.Products);
        
   
  }

 

 

}
