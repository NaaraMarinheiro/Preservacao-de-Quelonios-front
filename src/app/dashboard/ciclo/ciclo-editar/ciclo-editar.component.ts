import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CicloService } from 'src/app/service/ciclo.service';

@Component({
  selector: 'app-ciclo-editar',
  templateUrl: './ciclo-editar.component.html',
  styleUrls: ['./ciclo-editar.component.css']
})

export class CicloEditarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private meuCicloService: CicloService) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    console.log("Meu id é:", id);
    let resultado = this.meuCicloService.listByID(id);
  }

}
