import { Routes } from '@angular/router';

export const routes: Routes = [

  {path: '', loadComponent:()=>import('./componentes/recursos/recursos').then(m=>m.RecursosComponent)}


];
