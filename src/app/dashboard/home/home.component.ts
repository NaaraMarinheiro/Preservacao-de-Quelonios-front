import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { SolturaService } from 'src/app/service/soltura.service';
import { ViagemService } from 'src/app/service/viagem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public resultado:any = {
    municipio: {
      nomeMunicipio: ""
    },
    comunidade: {
      nomeComunidade: ""
    },
    uf: ""
  };
  
  constructor(private route: ActivatedRoute, private meuHomeService: HomeService, private minhaViagemService: ViagemService, private minhaSolturaService: SolturaService) { }

  ngOnInit() {
    this.listarViagens();
    this.getLogDeSoltura();
    
  }

  public arrayDeViagens: any[] = [];
  async listarViagens() {
    this.arrayDeViagens = await this.minhaViagemService.listAllViagensClassificadas();
  }  

  public logDeSoltura: any[] = [];
  async getLogDeSoltura() {
    this.logDeSoltura = await this.minhaSolturaService.listAll();
  }
}
