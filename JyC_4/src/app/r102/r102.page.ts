import { Component, OnInit, ViewChild } from '@angular/core';
import {IonicSelectableComponent} from 'ionic-selectable';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-r102',
  templateUrl: './r102.page.html',
  styleUrls: ['./r102.page.scss'],
})
export class R102Page  {
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
    ciudad: 'SC'
  },
  {
    id:1,
    name:'EQUIPETROL I',
    ciudad:'SC'
  },
  {
    id:2,
    name:'MANZANO 40',
    ciudad: 'SC'
  }
];

constructor( private toasCtrl: ToastController){

}

userChanged (event: {component:IonicSelectableComponent, value: any}) {
  console.log('event: ', event);
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