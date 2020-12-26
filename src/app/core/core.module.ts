import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirebaseModule} from './modules/firebase.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {FirestoreService} from './services/firestore.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {AuthService} from './services/auth.service';


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
    AuthService,
    FirestoreService
  ]
})
export class CoreModule { }
