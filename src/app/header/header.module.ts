import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import {MatButtonModule} from '@angular/material/button'; 
import { BottomNavModule } from './bottom-nav/bottom-nav.module';



@NgModule({
  declarations: [
    TopNavComponent,
  ],
  imports: [
    CommonModule,
    BottomNavModule,
    MatButtonModule
  ],
  exports:[
    TopNavComponent,
    BottomNavModule
  ]
})
export class HeaderModule { 



}
