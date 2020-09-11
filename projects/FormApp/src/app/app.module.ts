import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule }               from './app-routing.module';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';
import { ConfigViewComponent }            from './views/config-view/config-view.component';
import { LayoutComponent }                from './views/layout/layout.component';
import { FormViewComponent }              from './views/form-view/form-view.component';
import {MatToolbarModule}                 from '@angular/material/toolbar';
import {MatSidenavModule}                 from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule}                  from '@angular/material/button';
import {DynamicFormComponent}             from './components/dynamic-form/dynamic-form.component';
import {DynamicSectionComponent}          from './components/dynamic-section/dynamic-section.component';
import { ProductFormViewComponent } from './views/product-form-view/product-form-view.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    ConfigViewComponent,
    LayoutComponent,
    FormViewComponent,
    DynamicSectionComponent,
    ProductFormViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
