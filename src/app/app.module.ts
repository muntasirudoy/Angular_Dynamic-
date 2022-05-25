import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list'; 
import{HttpClientModule} from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HeaderModule,
    ContentModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
