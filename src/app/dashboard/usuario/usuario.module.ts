import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioComponent } from './usuario-listar/usuario.component';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioCadastrarComponent,
    UsuarioEditarComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
