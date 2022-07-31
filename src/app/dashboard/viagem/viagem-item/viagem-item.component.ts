import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CicloService } from 'src/app/service/ciclo.service';
import { ViagemService } from 'src/app/service/viagem.service';

@Component({
  selector: 'app-viagem-item',
  templateUrl: './viagem-item.component.html',
  styleUrls: ['./viagem-item.component.css']
})
export class ViagemItemComponent implements OnInit {

  public formulariosArray = [
    {
      IdCiclo: 101,  // Nome que consta no backend
      municipio: "Barreirinha",
      comunidade: "comunidade barreira",
      data: "12/03/2022",
      formulario: "coleta",
      usuario: "jose"
    },
    {
      IdCiclo: 101,
      municipio: "Barreirinha",
      comunidade: "comunidade barreira",
      data: "12/03/2022",
      formulario: "coleta",
      usuario: "jose da silva ferreira"
    },
    {
      IdCiclo: 101,
      municipio: "Barreirinha",
      comunidade: "comunidade barreira",
      data: "12/03/2022",
      formulario: "coleta",
      usuario: "jose antonio augusto silvino silva"
    },
  ];

  public resultado: any = {
    idCiclo: {
      idCiclo: "",
      municipio: {
        nomeMunicipio: ""
      },
      comunidade: {
        nomeComunidade: ""
      },
      uf: ""
    },
    coordenador:{
      nome:""
    },
  };


  constructor(private route: ActivatedRoute, private meuCicloService: CicloService, private minhaViagemService: ViagemService) { }

  async ngOnInit() {
    let idCiclo = String(this.route.snapshot.paramMap.get('cicloId'));
    let idViagem = String(this.route.snapshot.paramMap.get('viagemId'));
    

    this.getViagem(idCiclo, idViagem);
    //this.listarFormulariosDaViagem()

  }

  async getViagem(idCiclo: string, idViagem: string) {
    this.resultado = await this.minhaViagemService.listByID(idViagem);
  }

  //listarFormulariosDaViagem()

}
