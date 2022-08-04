import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { SolturaService } from 'src/app/service/soltura.service';
import { ViagemService } from 'src/app/service/viagem.service';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild("meuGrafico", { static: true }) elemento: ElementRef;

  public resultado: any = {
    municipio: {
      nomeMunicipio: ""
    },
    comunidade: {
      nomeComunidade: ""
    },
    uf: ""
  };

  constructor(private route: ActivatedRoute, private meuHomeService: HomeService, private minhaViagemService: ViagemService, private minhaSolturaService: SolturaService) { }

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
    ],
    datasets: [
      {
        data: [677, 1268, 578, 570, 645, 927, 133, 2707, 4155, 5487],
        fill: true,
        tension: 0.5,
        borderColor: 'rgb(47, 57, 78)',
        backgroundColor: 'rgba(151,233,237,0.3)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      }
    ],
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = false;

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
