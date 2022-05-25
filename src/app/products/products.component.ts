import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist : any;
  constructor(private api : ServiceService, private cartService : CartServiceService ) { 
  }
  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
       this.productlist = res
       this.productlist.forEach((a: any)=> {
         Object.assign(a,{quantity:1,total:a.price})
       })
    })
  }

  addtocart(item :any){
    this.cartService.addtoCart(item)

  }


}
