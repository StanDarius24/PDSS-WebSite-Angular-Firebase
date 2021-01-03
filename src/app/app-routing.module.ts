import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './components/welcome/welcome.component';
import {ProductsComponent} from './components/products/products.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/entry/login/login.component';
import {RegisterComponent} from './components/entry/register/register.component';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './core/services/guards/auth.guard';
import {AdminGuard} from './core/services/guards/admin.guard';
import {UserGuard} from './core/services/guards/user.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'store', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'info', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [UserGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [UserGuard] },
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
  AdminComponent
];
