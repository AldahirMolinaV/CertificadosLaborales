import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FullComponent } from './workcertificate/full/full.component';
import { SimpleComponent } from './workcertificate/simple/simple.component';
import { BaseComponent } from './workcertificate/base/base.component';
import { ProvisionservicesComponent } from './workcertificate/provisionservices/provisionservices.component';
import {AppRoutingModule} from './app-routing.module'; // fonts provided for pdfmake
import { NavComponent } from './workcertificate/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-CO';

registerLocaleData(localeEsAr, 'es-CO');
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
  providers: [ {provide: LOCALE_ID, useValue: 'es-CO'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
