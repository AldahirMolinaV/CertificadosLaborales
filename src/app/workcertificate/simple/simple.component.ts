import { Component, OnInit } from '@angular/core';
import {Img, PdfMakeWrapper, Txt} from 'pdfmake-wrapper';
import {GeneratecertificateService} from '../../services/generatecertificate.service';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
  providers: [DatePipe]
})
export class SimpleComponent implements OnInit {

  constructor(private generatecertificateService: GeneratecertificateService,
              private datePipe: DatePipe) { }
  sofkiano: any = {};
  date : any ={};

  ngOnInit(): void {
    this.getSofkiano();
  }

  getSofkiano(){
    this.generatecertificateService.getSofkiano().subscribe(data => {this.sofkiano = data});
  }
  
  async certificadoSimple() {
    var dateDay = new Date();
    const pdf = new PdfMakeWrapper();
    pdf.pageMargins([80, 50, 80, 130]);

    pdf.header(
      await new Img('./assets/HIBOT.png').build()
    );
    pdf.add(
      new Txt('\n\n\n\n\n\n\n Medellín,' + dateDay.getDate() +' de '+ this.datePipe.transform(dateDay.getDate(),"MMMM") +' del '+dateDay.getFullYear()+ '\n\n\n\n\n\n\n').end
    );
    pdf.add(
      new Txt('CERTIFICACIÓN\n\n\n').bold().alignment('center').end
    );
    pdf.add(
      new Txt('Por medio de la presente se CERTIFICA que '+ this.sofkiano.nombreCompleto +', identificado con '
        + this.sofkiano.tipoDeDocumento +' No.' + this.sofkiano.documento + '; labora en nuestra compañia desde el '
        + this.datePipe.transform( this.sofkiano.fechaIngreso,"longDate" ) +' desempeñando el cargo de ' + this.sofkiano.cargo + 
        ' y se encuentra vinculado por medio de un contrato a termino ' + this.sofkiano.tipoDeContrato +'.\n\n\n' +
        'Se firma a solicitud del empleado a los '+ 
        dateDay.getDate() +' dias del mes de '+ this.datePipe.transform(dateDay.getDate(),"MMMM") +' de '+dateDay.getFullYear() +' \n\n\n' )
        .alignment('justify').end 
    );
    pdf.add(pdf.ln(3));
    pdf.add(new Txt('Atentamente,\n\n').end);
    pdf.add(
      await new Img('./assets/Firma.PNG').build()
    );
    pdf.add(new Txt('___________________________________').end);
    pdf.add(new Txt('JULIE ANDREA MORENO RODRIGUEZ').bold().end);
    pdf.add(new Txt('Líder Área People Development').end);
    pdf.add(new Txt('Digital Interactions SAS').end);
    pdf.add(new Txt('Nit. 901350658-5').end);
    pdf.footer(new Txt('Información Confidencial').margin([80, 50, 80, 130]).alignment('right').end);
    pdf.create().open();
  }

}
