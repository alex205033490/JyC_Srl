import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { R102Page } from './r102.page';

import {IonicSelectableModule } from 'ionic-selectable';


const routes: Routes = [
  {
    path: '',
    component: R102Page
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
  declarations: [R102Page]
})
export class R102PageModule {}
