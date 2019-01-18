import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  formatoFecha;
  codigoOferta : string;
  constructor(public navCtrl: NavController) {
    this.getFormatoFecha();
    this.getcodigoOferta();
  }

  getcodigoOferta (){

    this.codigoOferta = 'Numero:' + ' ' + '1' ;

  }

  getFormatoFecha (){

    var dateObj = new Date ();

    var year = dateObj.getFullYear().toString();
    var mes = dateObj.getMonth().toString();
    var dia = dateObj.getDate().toString();

    var mesArray = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre', 'Diciembre'];

    this.formatoFecha = dia + '/' + mesArray[mes] + '/' + year ;


  }

}
