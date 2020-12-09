import { Component, OnInit } from '@angular/core';
import {Img, PdfMakeWrapper, Txt} from 'pdfmake-wrapper';


@Component({
  selector: 'app-provisionservices',
  templateUrl: './provisionservices.component.html',
  styleUrls: ['./provisionservices.component.css']
})
export class ProvisionservicesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  async certificadoPrestacionDeServicios() {
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
      new Txt('Por medio de la presente se CERTIFICA que NOMBRE COMPLETO, mayor de edad,' +
        ' identificada con cédula de extranjería No. XXXX; tuvo un Contrato de Prestación' +
        ' de Servicios con la compañía desde el día 24 de abril de 2019 hasta el 1 de' +
        ' noviembre de 2019 como NOMBRE DEL ROL/CARGO y tenia unos honorarios de' +
        ' $X.XXX.XXX (NÚMEROS EN LETRAS).\n\n' +
        'Para alguna verificación puedes comunicarte a los siguientes números de' +
        ' contacto (4)2668907 o 3164975106.\n' + '\n\n' +
        'Se firma a solicitud del interesado a los XX días del mes de agosto de 2020\n')
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


