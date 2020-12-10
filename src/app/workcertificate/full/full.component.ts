import { Component, OnInit } from '@angular/core';
import {Img, PdfMakeWrapper, Txt} from 'pdfmake-wrapper';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async certificadoCompleto() {
    const pdf = new PdfMakeWrapper();
    pdf.pageMargins([80, 50, 80, 130]);
    pdf.add(
      await new Img('./assets/GlobalQa.png').alignment('right').build()
    );
    pdf.add(
      new Txt('Medellín, FECHA ACTUAL\n\n\n').end
    );
    pdf.add(
      new Txt('CERTIFICACIÓN\n\n\n').bold().alignment('center').end
    );
    pdf.add(
      new Txt('Por medio de la presente se CERTIFICA que NOMBRE COMPLETO, ' +
        'identificada con TIPO DOCUMENTO No. DOCUMENTO labora en nuestra compañía ' +
        'desde el FECHA INGRESO, desempeñando el cargo de CARGO, con un salario ' +
        'nominal de $X.XXX.XXX (NÚMEROS EN LETRAS) pesos con sus respectivas prestaciones ' +
        'sociales de ley, adicional a esto recibe un beneficio extralegal mensual no ' +
        'salarial de $X.XXX.XXX (NÚMEROS EN LETRAS) pesos y está vinculado por medio ' +
        'de un contrato a término indefinido. \n\n' +
        'Para alguna verificación puedes comunicarte a los siguientes números de' +
        ' contacto (4)2668907 o 3164975106.\n\n' +
        'Se firma a solicitud del interesado a los XX días del mes de agosto de 2020\n')
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
    pdf.add(new Txt('Global QA').end);
    pdf.add(new Txt('Nit. 901397311-8').end);
    pdf.footer(
      await new Img('./assets/DatosGlobalQa.png').margin([80, 50, 80, 130]).alignment('left').build()
    );
    pdf.create().open();
  }
}
