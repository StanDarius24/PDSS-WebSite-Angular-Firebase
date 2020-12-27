import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirebaseModule} from './modules/firebase.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {FirestoreService} from './services/firestore.service';
import {AuthService} from './services/auth.service';
import {AngularMaterialModule} from './modules/angular-material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AngularMaterialModule
  ],
  imports: [
    CommonModule,
    FirebaseModule,
    RouterModule,
    AngularMaterialModule
  ],
  providers: [
    AuthService,
    FirestoreService
  ]
})
export class CoreModule { }
