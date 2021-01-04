import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './components/welcome/welcome.component';
import {ProductsComponent} from './components/store/products/products.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/entry/login/login.component';
import {RegisterComponent} from './components/entry/register/register.component';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {AddproductComponent} from './components/store/addproduct/addproduct.component';
import {ListofcategoryComponent} from './components/store/listofcategory/listofcategory.component';
import {ListComponent} from './components/store/list/list.component';
import {ProductComponent} from './components/store/product/product.component';
import {CategoryComponent} from './components/store/category/category.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addproduct/:name', component: AddproductComponent },
  { path: 'listcategory/:name', component: ListofcategoryComponent },
  { path: 'list', component: ListComponent },
  { path: 'produs/:name', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'store', component: ProductsComponent },
  { path: 'info', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
export const routingComponents = [
  WelcomeComponent,
  HomeComponent,
  ProductsComponent,
  AboutComponent,
  LoginComponent,
  RegisterComponent,
  CategoryComponent,
  AdminComponent,
  AddproductComponent,
  ListofcategoryComponent,
  ListComponent,
  ProductComponent
];
