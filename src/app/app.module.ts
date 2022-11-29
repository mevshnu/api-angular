import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PassengerComponent } from './passenger/passenger.component';
import { UsPublicComponent } from './us-public/us-public.component';
import { PublicApiLinkComponent } from './public-api-link/public-api-link.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserdataComponent } from './userdata/userdata.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesappComponent } from './quotesapp/quotesapp.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:PassengerComponent
  },
  {
    path:"product",
    component:ProductListComponent
  },
  {
    path:"public",
    component:PublicApiLinkComponent
  },
  {
    path:"quotes",
    component:QuotesappComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:"us",
    component:UsPublicComponent
  },
  {
    path:"userdata",
    component:UserdataComponent
  },
  {
    path:"userinfo",
    component:UserinfoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PassengerComponent,
    UsPublicComponent,
    PublicApiLinkComponent,
    UserinfoComponent,
    ProductListComponent,
    UserdataComponent,
    TodoComponent,
    QuotesappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
