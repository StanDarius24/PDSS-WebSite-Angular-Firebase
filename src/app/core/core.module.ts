import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirebaseModule} from './modules/firebase.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {UserAuthService} from './services/user-auth.service';
import {FirestoreService} from './services/firestore.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FirebaseModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [
    UserAuthService,
    FirestoreService
  ]
})
export class CoreModule { }
