import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { R101Page } from './r101.page';

import {IonicSelectableModule } from 'ionic-selectable';


const routes: Routes = [
  {
    path: '',
    component: R101Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [R101Page]
})
export class R101PageModule {}
