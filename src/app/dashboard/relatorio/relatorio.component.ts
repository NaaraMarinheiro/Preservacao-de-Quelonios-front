import { Component, OnInit } from '@angular/core';
import { RelatorioService } from 'src/app/service/relatorio.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  constructor(private service: RelatorioService) { }

  ngOnInit(): void {
   this.gerarRelatorioColeta();
  }

  gerarRelatorioColeta(){
    this.service.listAll();   

  }

}
