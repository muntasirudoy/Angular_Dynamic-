import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { BlogComponent } from './blog/blog.component';
import { CategoryComponent } from './category/category.component';
import { ContentComponent } from './content.component';
import { DealsComponent } from './deals/deals.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { TestiComponent } from './testi/testi.component';
import { FproductComponent } from './fproduct/fproduct.component';


@NgModule({
  declarations: [
    ContentComponent,
    BannerComponent,
    BlogComponent,
    CategoryComponent,
    DealsComponent,
    FeaturesComponent,
    TeamComponent,
    TestiComponent,
    FproductComponent,
  ],
  imports: [

  ],
exports:[
  ContentComponent,
]

})



export class ContentModule { 

}



// let data: any[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ]
