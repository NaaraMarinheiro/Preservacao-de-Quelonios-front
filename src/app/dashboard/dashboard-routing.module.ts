import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CicloModule } from './ciclo/ciclo.module';
import { HomeComponent } from './home/home.component';
import { RelatorioModule } from './relatorio/relatorio.module';
import { UsuarioModule } from './usuario/usuario.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'ciclo', loadChildren: ()=> CicloModule},
  { path: 'usuario', loadChildren: ()=> UsuarioModule},
  { path: 'relatorio', loadChildren: ()=> RelatorioModule},
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }