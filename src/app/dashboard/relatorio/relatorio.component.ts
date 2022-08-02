import { Component, OnInit } from '@angular/core';
import { RelatorioService } from 'src/app/service/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  constructor(private service: RelatorioService) { }

  ngOnInit(){  }

 
   gerarRelatorioColeta(){

    this.service.gerarPdfColeta().then( resposta =>{
      let url = window.URL.createObjectURL(resposta);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download relatorio coleta';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
  }


  gerarRelatorioEclosao(){
    this.service.gerarPdfEclosao().then( resposta =>{
      let url = window.URL.createObjectURL(resposta);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download relatorio eclosao';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
  }

  gerarRelatorioSoltura(){
    this.service.gerarPdfSoltura().then( resposta =>{
      let url = window.URL.createObjectURL(resposta);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download relatorio soltura';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
  }

}
