import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent} from './app.component';
import { ProductListComponent} from './product-list/product-list.component';

@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductListComponent
  ],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}
