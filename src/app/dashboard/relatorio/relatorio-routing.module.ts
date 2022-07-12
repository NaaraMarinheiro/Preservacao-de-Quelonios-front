import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioComponent } from './relatorio.component';

const routes: Routes = [
  { path: "", component: RelatorioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes
    //,{ enableTracing: true <-- debugging purpose only}
  )],
  exports: [RouterModule]
})
export class RelatorioRoutingModule { }
