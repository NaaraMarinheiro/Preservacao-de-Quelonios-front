import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CicloService } from 'src/app/service/ciclo.service';
import { ColetaService } from 'src/app/service/coleta.service';
import { EclosaoService } from 'src/app/service/eclosao.service';
import { SolturaService } from 'src/app/service/soltura.service';
import { ViagemService } from 'src/app/service/viagem.service';

@Component({
  selector: 'app-viagem-item',
  templateUrl: './viagem-item.component.html',
  styleUrls: ['./viagem-item.component.css']
})
export class ViagemItemComponent implements OnInit {

  public resultado: any = [];

  constructor(private route: ActivatedRoute, private meuCicloService: CicloService, private minhaViagemService: ViagemService, private minhaSolturaService: SolturaService, private minhaEclosaoService: EclosaoService, private minhaColetaService: ColetaService) { }

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
    this.listarFormulariosDaViagem()
  }

  private recuperarIDsDaURL() {
    this.idCiclo = String(this.route.snapshot.paramMap.get('cicloId'));
    this.idViagem = String(this.route.snapshot.paramMap.get('viagemId'));
  }

  async getViagem() {
    this.resultado = await this.minhaViagemService.listById2(this.idViagem);

    if (this.resultado.length > 0) {
      this.detalhesDaViagem.nomeDoCiclo = this.resultado[0].idCiclo.nomeCiclo;
      this.detalhesDaViagem.municipioDoCiclo = this.resultado[0].idCiclo.municipio.nomeMunicipio;
      this.detalhesDaViagem.UFDoCiclo = this.resultado[0].idCiclo.uf;
      this.detalhesDaViagem.ComunidadeDoCiclo = this.resultado[0].idCiclo.comunidade.nomeComunidade;
      this.detalhesDaViagem.idDaViagem = this.resultado[0].idViagem;
      this.detalhesDaViagem.nomeCoordenador = this.resultado[0].coordenador.nome;
      this.detalhesDaViagem.dataFormatada = this.resultado[0].dataFormatada;
    }
  }

  public arrayDeFormularios: any = [];
  async listarFormulariosDaViagem() {

    let solturas = await this.minhaSolturaService.listAll();
    solturas = solturas.map((element: any) => {
      element.tipo = "Soltura"
      return element
    })
    this.arrayDeFormularios.push(...solturas);

    let eclosoes = await this.minhaEclosaoService.listAll();
    eclosoes = eclosoes.map((element: any) => {
      element.tipo = "Eclosão"
      return element
    })
    this.arrayDeFormularios.push(...eclosoes);

    let coletas = await this.minhaColetaService.listAll();
    coletas = coletas.map((element: any) => {
      element.tipo = "Coleta"
      return element
    })
    this.arrayDeFormularios.push(...coletas);
  }

}
