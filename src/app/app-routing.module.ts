import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './component/category/category.component';
import { ListComponent } from './component/list/list.component';
import { ListofcategoryComponent } from './component/listofcategory/listofcategory.component';
import { ProductComponent } from './component/product/product.component';

const appRoutes = [
  { path: 'produs/:name' ,component: ProductComponent },
  { path: '', redirectTo: '/list' , pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'listcategory/:name', component:ListofcategoryComponent },
  ];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
