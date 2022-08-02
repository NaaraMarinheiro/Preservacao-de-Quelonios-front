import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns'
import {pt} from 'date-fns/locale';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
// Data de hoje com primeira letra do dia maiuscula
  public dataFormatada = format (new Date (), "EEEE", {
    locale:pt
  })
  public diaFormatado : string = this.dataFormatada.charAt(0).toUpperCase() + this.dataFormatada.slice(1);

  public dataFormatada2 = format (new Date (), "',' dd 'de' MMMM 'de' yyyy", {
    locale:pt
  })

  public dataFinal = this.diaFormatado + this.dataFormatada2;

  constructor() { }

  ngOnInit(): void {
  }
  
  getNome(){
    let usuarioAtual = localStorage.getItem("usuarioAtual");

    if (usuarioAtual) {
      return JSON.parse(usuarioAtual).nome;
    } else {
      return ''
    }
  }

}
