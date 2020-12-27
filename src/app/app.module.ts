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
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { ListproductsComponent } from './component/listproducts/listproducts.component';
import { CategoryComponent } from './component/category/category.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    RegisterComponent,
    AddproductComponent,
    ListproductsComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormElementsModule,
    AngularFireStorageModule,
    NgbModule,
    FormsModule,
    CarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [FireBaseServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
