import { Component, OnInit } from '@angular/core';
import {Img, PdfMakeWrapper, Txt} from 'pdfmake-wrapper';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  async certificadoSimple() {
    const pdf = new PdfMakeWrapper();
    pdf.pageMargins([80, 50, 80, 130]);

    pdf.header(
      await new Img('./assets/HIBOT.png').build()
    );
    pdf.add(
      new Txt('\n\n\n\n\n\n\n Medellín, fecha actual \n\n\n\n\n\n\n').end
    );
    pdf.add(
      new Txt('CERTIFICACIÓN\n\n\n').bold().alignment('center').end
    );
    pdf.add(
      new Txt('Por medio de la presente se CERTIFICA que NOMBRE COMPLETO, identificado con '+
        'TIPO DE DOCUMENTO No. DOCUMENTO; labora en nuestra compañia desde el FECHAINGRESO ' +
        'desempeñando el cargo de CARGO y se encuentra vinculado por ' +
        'medio de un contrato a TIPO DE CONTRATO.\n\n\n' +
        'Se firma a solicitud del empleado a los FECHA ACTUAL \n\n\n' )
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
