import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/cart-service.service';



@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.css']
})
export class BottomNavComponent implements OnInit {

  dropdown:boolean = false
  show(data:boolean){
    if(data == true){
      this.dropdown = false
    }
    else{
      this.dropdown = true
    }
  }

  public totalItem : number = 0

  constructor( private cartService : CartServiceService ){}

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
    this.totalItem = res.length
    })
  }
  

}
