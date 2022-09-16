import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { ClientComponent } from './client/client.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'client', component:ClientComponent},
  {path:'admin', component:AdminPageComponent},
  {path:'shop', component:ShopComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ClientComponent,
    AdminPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
