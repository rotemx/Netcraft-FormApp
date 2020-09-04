import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormViewComponent}      from './views/form-view/form-view.component';
import {ConfigViewComponent}    from './views/config-view/config-view.component';

const routes: Routes = [
  {
    path : '',
    component: FormViewComponent
  },
  {
    path : 'config',
    component: ConfigViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
