import { Component, OnInit, ViewChild } from '@angular/core';
import {IonicSelectableComponent} from 'ionic-selectable';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-r101',
  templateUrl: './r101.page.html',
  styleUrls: ['./r101.page.scss'],
})
export class R101Page implements OnInit {


  formatoFecha;
  codigoOferta : string;

  @ViewChild ('myselect') selectComponent : IonicSelectableComponent;

  userR = "null";
  userIdsR= [];

  usersR=[{
    id:0,
    name:'ADRIANA PUERTA',
    ciudad: 'SC'
  },
  {
    id:1,
    name:'PAOLA ROBLES',
    ciudad:'SC'
  },
  {
    id:2,
    name:'ELIANA',
    ciudad: 'SC'
  }
];


userChangedR (event: {component:IonicSelectableComponent, value: any}) {
  console.log('eventR: ', event);
}

async onCloseR (){
  let toas= await this.toasCtrl.create ({
    message: 'gracias por su preferencia',
    duration: 2000
  });
  toas.present ();
}
openFromCodeR (){
  
  this.selectComponent.open();
}



  constructor( private toasCtrl: ToastController) { 
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
