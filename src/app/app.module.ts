import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {UserAuthService} from './core/services/user-auth.service';
import {MatButtonModule} from '@angular/material/button';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { SecurityFormComponent } from './components/security-form/security-form.component';
import { AdminComponent } from './components/admin/admin.component';
import {FirestoreService} from './core/services/firestore.service';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ProfileFormComponent,
    SecurityFormComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    UserAuthService,
    FirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
