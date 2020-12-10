import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID,NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
// @ts-ignore
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { FullComponent } from './certificates/full/full.component';
import { SimpleComponent } from './certificates/simple/simple.component';
import { BaseComponent } from './certificates/base/base.component';
import { ProvisionservicesComponent } from './certificates/provisionservices/provisionservices.component';
import {AppRoutingModule} from './app-routing.module'; // fonts provided for pdfmake
import { NavComponent } from './common/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-CO';
import { CertificatesComponent } from './certificates/certificates.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { EmployeeComponent } from './employee/employee.component';

registerLocaleData(localeEsAr, 'es-CO');
PdfMakeWrapper.setFonts(pdfFonts);

@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    FullComponent,
    SimpleComponent,
    BaseComponent,
    ProvisionservicesComponent,
    CertificatesComponent,
    AdministratorComponent,
    EmployeeComponent
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
