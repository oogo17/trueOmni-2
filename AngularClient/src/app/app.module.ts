import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailComponent } from './Company/Company-List/Company-Detail/company-detail/company-detail.component';
import { CompanyListComponent } from './Company/Company-List/Company-List/company-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
