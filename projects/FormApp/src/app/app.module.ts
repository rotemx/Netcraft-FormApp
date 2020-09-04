import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }        from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigViewComponent }     from './views/config-view/config-view.component';
import { LayoutComponent }         from './views/layout/layout.component';
import { FormViewComponent }       from './views/form-view/form-view.component';
import {MatToolbarModule}          from '@angular/material/toolbar';
import {MatSidenavModule}          from '@angular/material/sidenav';
import {FormsModule}               from '@angular/forms';
import {MatButtonModule}           from '@angular/material/button';

@NgModule({
  declarations: [
    ConfigViewComponent,
    LayoutComponent,
    FormViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
