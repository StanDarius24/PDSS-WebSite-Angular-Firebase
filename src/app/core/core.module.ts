import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirebaseModule} from './modules/firebase.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {FirestoreUserService} from './services/firestore-user.service';
import {AuthService} from './services/auth.service';
import {AngularMaterialModule} from './modules/angular-material.module';
import {FlexModule} from '@angular/flex-layout';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {FireBaseServiceService} from './services/fire-base-service.service';


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
    AngularMaterialModule,
    FlexModule,
    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    AuthService,
    FirestoreUserService,
    FireBaseServiceService
  ]
})
export class CoreModule { }
