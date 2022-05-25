import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from './bottom-nav.component';
import {MatBadgeModule} from '@angular/material/badge'; 
import {MatMenuModule} from '@angular/material/menu'; 
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BottomNavComponent
  ],
  imports: [
    CommonModule,
    MatBadgeModule,
    MatMenuModule,
    RouterModule
  ],
  exports:[
    BottomNavComponent
  ]
})
export class BottomNavModule { 

}
