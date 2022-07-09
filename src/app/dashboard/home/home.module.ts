import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeVoluntarioComponent } from './home-voluntario/home-voluntario.component';
import { HomeCoordenadorComponent } from './home-coordenador/home-coordenador.component';



@NgModule({
  declarations: [
    HomeVoluntarioComponent,
    HomeCoordenadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
