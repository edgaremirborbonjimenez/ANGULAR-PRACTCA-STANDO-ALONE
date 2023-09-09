import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { FaqsComponent } from './faqs/faqs.component';

export const routes: Routes = [
  {path:'pregunta',
loadComponent:()=> import('./faqs/faqs.component').then(m=>m.FaqsComponent)
  },
  {
    path:'dashboard',
    loadChildren: ()=> import('./component/dashboard/routes')  //Para manejar un apartado con varias rutas
  }
];


/* Se borra esto
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/