import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CicloService } from 'src/app/service/ciclo.service';
import { SolturaService } from 'src/app/service/soltura.service';
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

  public resultado: any = []; 

  constructor(private route: ActivatedRoute, private meuCicloService: CicloService, private minhaViagemService: ViagemService, private mSolturaService: SolturaService) { }

  public idCiclo = "";
  public idViagem = "";
  public detalhesDaViagem: any = {
    nomeDoCiclo: "",
    municipioDoCiclo: "",
    UFDoCiclo: "",
    ComunidadeDoCiclo: "",
    idDaViagem: "", 
    nomeCoordenador: "",
    dataFormatada: ""
  }

  async ngOnInit() {
    this.recuperarIDsDaURL();
    this.getViagem();
  }

  private recuperarIDsDaURL() {
    this.idCiclo = String(this.route.snapshot.paramMap.get('cicloId'));
    this.idViagem = String(this.route.snapshot.paramMap.get('viagemId'));
  }
  
  async getViagem() {
    this.resultado = await this.minhaViagemService.listById2(this.idViagem);
    console.log(this.resultado);

    if(this.resultado.length > 0){
      this.detalhesDaViagem.nomeDoCiclo = this.resultado[0].idCiclo.nomeCiclo;
      this.detalhesDaViagem.municipioDoCiclo = this.resultado[0].idCiclo.municipio.nomeMunicipio;
      this.detalhesDaViagem.UFDoCiclo = this.resultado[0].idCiclo.uf;
      this.detalhesDaViagem.ComunidadeDoCiclo = this.resultado[0].idCiclo.comunidade.nomeComunidade;
      this.detalhesDaViagem.idDaViagem = this.resultado[0].idViagem;
      this.detalhesDaViagem.nomeCoordenador = this.resultado[0].coordenador.nome;
      this.detalhesDaViagem.dataFormatada = this.resultado[0].dataFormatada;
    }
    console.log(this.detalhesDaViagem);
  }

}
