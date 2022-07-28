import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioComponent } from './usuario-listar/usuario.component';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { KeysPipe } from 'src/app/pipes/key.pipe';


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioCadastrarComponent,
    UsuarioEditarComponent,
    KeysPipe
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ReactiveFormsModule  
  ]
})
export class UsuarioModule { }