import { Component, OnInit } from '@angular/core';
import {Img, PdfMakeWrapper, Txt} from 'pdfmake-wrapper';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})

export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async certificadoBase() {
    const pdf = new PdfMakeWrapper();
    pdf.pageMargins([80, 50, 80, 130]);
    pdf.add(
      await new Img('./assets/Sofka.png').build()
    );
    pdf.add(
      new Txt('Medellín, fecha actual\n\n\n').end
    );
    pdf.add(
      new Txt('CERTIFICACIÓN\n\n\n').bold().alignment('center').end
    );
    pdf.add(
      new Txt('Por medio de la presente se CERTIFICA que NOMBRE COMPLETO identificado' +
        ' con cédula de ciudadania No. XXXX; labora en nuestra compañia desde el' +
        ' XX de MES del xxxx, desempeñando el cargo de NOMBRE DEL ROL/CARGO con un'+
        ' con un salario nominal de ($X.XXX.XXX) NÚMEROS EN LETRAS,' +
        ' con sus respectivas prestaciones sociales de ley y está vinculado por medio' +
        ' de un contrato a termino indefinido.\n' + 
        ' para alguna verificación puedes comunicarte a los siguientes numeros de'+
        ' contacto (4)2668907 o 3164975106 \n\n' +
        ' Se firma a solicitud del empleado a los XX días del mes de agosto de 2020\n')
        .alignment('justify').end
    );
    pdf.add(pdf.ln(3));
    pdf.add(new Txt('Atentamente,').end);
    pdf.add(
      await new Img('./assets/Firma.PNG').build()
    );
    pdf.add(new Txt('___________________________________').end);
    pdf.add(new Txt('JULIE ANDREA MORENO RODRIGUEZ').bold().end);
    pdf.add(new Txt('Líder Área People Development').end);
    pdf.add(new Txt('Sofka Technologies SAS').end);
    pdf.add(new Txt('Nit. 900620832-6').end);
    pdf.footer(
      await new Img('./assets/footer.PNG').width(600).build()
    );
    pdf.create().open();
  }

}
