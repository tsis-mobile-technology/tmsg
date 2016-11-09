import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   	from './login.component';
import { MainComponent }		from './main.component';

const tmsgRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',	component: LoginComponent },
  { path: 'main/:idx',	component: MainComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(tmsgRoutes) ],
  exports: [ RouterModule ]
})

export class TmsgRoutingModule {}
