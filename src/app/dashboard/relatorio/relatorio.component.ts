import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RelatorioService } from 'src/app/service/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})

export class RelatorioComponent implements OnInit {

  constructor(
    private service: RelatorioService,
    private toastrService: ToastrService,) { }

  ngOnInit() { }

  gerarRelatorioColeta() {
    this.service.gerarPdfColeta().then(resposta => {
      let url = window.URL.createObjectURL(resposta);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download relatorio coleta';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      this.toastrService.success('O download iniciará em alguns segundos...', "Relatório Gerado!", {
        timeOut: 5000,
      })
    })
  }

  gerarRelatorioEclosao() {
    this.service.gerarPdfEclosao().then(resposta => {
      let url = window.URL.createObjectURL(resposta);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download relatorio eclosao';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      this.toastrService.success('O download iniciará em alguns segundos...', "Relatório Gerado!", {
        timeOut: 5000,
      })
    })
  }

  gerarRelatorioSoltura() {
    this.service.gerarPdfSoltura().then(resposta => {
      let url = window.URL.createObjectURL(resposta);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download relatorio soltura';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      this.toastrService.success('O download iniciará em alguns segundos...', "Relatório Gerado!", {
        timeOut: 5000,
      })
    })
  }
}
