import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sofkiano}
from '../model/Sofkiano';



@Injectable({
  providedIn: 'root'
})
export class GeneratecertificateService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost';

  getConexion() {
    return this.http.get(this.url + ':8081/certificadoLaboral')
      .subscribe(data => {
        console.log(data);
      });
  }

  getSofkiano(){
    return this.http.get<Sofkiano>(this.url + ':8081/certificadoLaboral/1152702267/Indefinido');
  }

  getDateDay(){
    var dateDay = new Date();
    return dateDay;
  }
}
