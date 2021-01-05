import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {RouterModule} from '@angular/router';
import {AppRoutingModule, routingComponents} from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {FlexModule} from '@angular/flex-layout';
import { UpdateproductComponent } from './components/store/updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
