import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';


import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './component/footer/footer.component';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { ListComponent } from './component/list/list.component';
import { FireBaseServiceService } from './service/fire-base-service.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormElementsModule } from './shared/shared_modules/form-elements/form-elements.module';
import { CategoryComponent } from './component/category/category.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { ProductComponent } from './component/product/product.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { ListofcategoryComponent } from './component/listofcategory/listofcategory.component';

import {WelcomeComponent} from './components/welcome/welcome.component';
import {ProductsComponent} from './components/products/products.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AdminComponent} from './components/admin/admin.component';


const routes = [
  {
    path: '',
    component: HomeComponent
  },

  { path: 'listcategory/:name', 
  component:ListofcategoryComponent 
},
{ path: 'list', component: ListComponent },
  { 
    path: 'produs/:name',
    component: ProductComponent 
},
{
  path: 'addproduct/:name',
  component: AddproductComponent
},
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'store',
    component: ProductsComponent
  },
  {
    path: 'info',
    component: AboutComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    AppComponent,
    FooterComponent,
    ListComponent,
    CategoryComponent,
    AddproductComponent,
    ProductComponent,
    ListofcategoryComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    CarouselModule,
    ReactiveFormsModule,
    FlexModule,
    FormElementsModule,
    AngularFireStorageModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule,
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot(),
    CarouselModule,
    StoreModule.forRoot({}, {}) 
  ],
  providers: [FireBaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
