import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './component/footer/footer.component';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { ListComponent } from './component/list/list.component';
import { FireBaseServiceService } from './service/fire-base-service.service';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './component/register/register.component';
import { FormElementsModule } from './shared/shared_modules/form-elements/form-elements.module';
import { CategoryComponent } from './component/category/category.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductComponent } from './component/product/product.component';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { ListofcategoryComponent } from './component/listofcategory/listofcategory.component';
const appRoutes = [
  { path: 'produs/:name' ,component: ProductComponent },
  { path: '', redirectTo: '/category' , pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'listcategory/:name', component:ListofcategoryComponent },
  ];

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    RegisterComponent,
    CategoryComponent,
    AddproductComponent,
    ProductComponent,
    ListofcategoryComponent

  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
    FlexModule
    BrowserAnimationsModule,
    AppRoutingModule,
    FormElementsModule,
    AngularFireStorageModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    RouterModule,
    StoreRouterConnectingModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    CarouselModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
