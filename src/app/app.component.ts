import { Component } from '@angular/core';
import {GeneratecertificateService} from './services/generatecertificate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontCertificadosLaborales';
  constructor(private generatecertificateService: GeneratecertificateService){}
  conexion() {
    this.generatecertificateService.getConexion();
  }
}
