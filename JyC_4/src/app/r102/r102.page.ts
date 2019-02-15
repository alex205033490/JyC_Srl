import { Component, OnInit, ViewChild } from '@angular/core';
import {IonicSelectableComponent} from 'ionic-selectable';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-r102',
  templateUrl: './r102.page.html',
  styleUrls: ['./r102.page.scss'],
})
export class R102Page  {

  nombreEdificio: any ;
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





  @ViewChild ('myselect') selectComponent : IonicSelectableComponent;
  user = "null";
  userIds= [];

  users=[{
    id:0,
    name:'SKYE BLUE',
    ciudad: 'SANTA CRUZ'
  },
  {
    id:1,
    name:'PLAZA REAL',
    ciudad:'COCHABAMBA'
  },
  {
    id:2,
    name:'TELEFERICO LINEA NARANJA ESTACION PEREFERICA',
    ciudad: 'LA PAZ'
  }
];

constructor( private toasCtrl: ToastController){

}

userChanged (event: {component:IonicSelectableComponent, value: any}) {
  console.log('event: ', event);
}

 nombreEdificios(){
  return  this.nombreEdificio =  "HOLA MUNDO";
}

async onClose (){
  let toas= await this.toasCtrl.create ({
    message: 'gracias por su preferencia',
    duration: 2000
  });
  toas.present ();
}

openFromCode (){
  this.selectComponent.open();
}

}