import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal : number = 0;
  constructor(private cartService : CartServiceService ) { 
  }
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products  = res
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }
}
