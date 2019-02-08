import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'comercial-home', loadChildren: './comercial-home/comercial-home.module#ComercialHomePageModule' },
  { path: 'proyectos-home', loadChildren: './proyectos-home/proyectos-home.module#ProyectosHomePageModule' },
  { path: 'r101', loadChildren: './r101/r101.module#R101PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
