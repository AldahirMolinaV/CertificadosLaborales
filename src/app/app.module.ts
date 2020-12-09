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

PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    SimpleComponent,
    BaseComponent,
    ProvisionservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
