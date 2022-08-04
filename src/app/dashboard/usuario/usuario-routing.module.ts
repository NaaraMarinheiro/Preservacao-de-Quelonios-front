import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioCadastrarComponent } from './usuario-cadastrar/usuario-cadastrar.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioComponent } from './usuario-listar/usuario.component';

const routes: Routes = [
  { path: "", component: UsuarioComponent },
  { path: 'cadastrar', component: UsuarioCadastrarComponent },
  { path: 'editar/:usuarioId', component: UsuarioEditarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
