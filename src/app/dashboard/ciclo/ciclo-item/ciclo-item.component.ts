import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CicloService } from 'src/app/service/ciclo.service';


@Component({
  selector: 'app-ciclo-item',
  templateUrl: './ciclo-item.component.html',
  styleUrls: ['./ciclo-item.component.css']
})

export class CicloItemComponent implements OnInit {

  public resultado: any = {
    municipio: {
      nomeMunicipio: ""
    },
    comunidade: {
      nomeComunidade: ""
    },
    uf: ""
  };

  constructor(private route: ActivatedRoute, private meuCicloService: CicloService) { }

  async ngOnInit() {
    let id = String(this.route.snapshot.paramMap.get('cicloId'));
    this.getCiclo(id);
    this.listarViagensDoCiclo(id)
  }

  async getCiclo(id: string) {
    this.resultado = await this.meuCicloService.listByID(id);
  }

  public arrayDeViagens: any[] = [];
  async listarViagensDoCiclo(id: string) {
    this.arrayDeViagens = await this.meuCicloService.listAllByCicle(id);
  }

  getTipoUsuario() {
    let usuarioAtual = localStorage.getItem ("usuarioAtual");

    if (usuarioAtual) {
      return JSON.parse(usuarioAtual).tipo;
    } else {
      return ''
    }
  }

}
