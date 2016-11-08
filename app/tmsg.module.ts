import { NgModule }      		from '@angular/core';
import { BrowserModule } 		from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   		from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { TmsgComponent }    from './tmsg.component';
import { MainComponent }    from './main.component';
import { LoginComponent }   from './login.component';
import { CounselorService } from './counselor.service';

import { TmsgRoutingModule }     from './tmsg-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    TmsgRoutingModule
  ],
  declarations: [
    TmsgComponent,
    MainComponent,
    LoginComponent
  ],
  providers: [ CounselorService ],
  bootstrap: [ TmsgComponent ]
})

export class TmsgModule { }
