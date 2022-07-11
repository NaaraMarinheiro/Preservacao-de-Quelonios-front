import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCoordenadorComponent } from './dashboard/home/home-coordenador/home-coordenador.component';


const routes: Routes = [
  {path: 'home-coordenador', component: HomeCoordenadorComponent}
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
