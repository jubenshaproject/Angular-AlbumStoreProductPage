import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProducttracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';

const appRoutes:Routes=[
  {path:'products',component:ProductListComponent},
  {path:'products/:id',component:ProductPageComponent},
  {path:'',redirectTo:'products',pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProducttracklistingComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
