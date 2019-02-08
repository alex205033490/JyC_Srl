import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r101',
  templateUrl: './r101.page.html',
  styleUrls: ['./r101.page.scss'],
})
export class R101Page implements OnInit {
  formatoFecha;
  codigoOferta : string;
  constructor() { 
    this.getFormatoFecha();
    this.getcodigoOferta();

  }

  ngOnInit() {
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

    this.formatoFecha = 'Fecha Creacion:' + ' ' + dia + '/' + mesArray[mes] + '/' + year ;


  }

}
