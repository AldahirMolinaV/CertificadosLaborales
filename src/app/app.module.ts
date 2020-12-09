import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FullComponent } from './workcertificate/full/full.component';
import { SimpleComponent } from './workcertificate/simple/simple.component';
import { BaseComponent } from './workcertificate/base/base.component';
import { ProvisionservicesComponent } from './workcertificate/provisionservices/provisionservices.component';
import {AppRoutingModule} from './app-routing.module'; // fonts provided for pdfmake
<<<<<<< HEAD
import { NavComponent } from './workcertificate/nav/nav.component';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 00dd7096cf695fb1ed6208dbc348edfe0eb6583f

PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    FullComponent,
    SimpleComponent,
    BaseComponent,
    ProvisionservicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
