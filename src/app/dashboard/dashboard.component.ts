import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { format } from 'date-fns'
import { pt } from 'date-fns/locale';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public dataFormatada = format(new Date(), "EEEE", {
    locale: pt
  })
  public diaFormatado: string = this.dataFormatada.charAt(0).toUpperCase() + this.dataFormatada.slice(1);

  public dataFormatada2 = format(new Date(), "',' dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })
  public dataFinal = this.diaFormatado + this.dataFormatada2;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getNome() {
    let usuarioAtual = localStorage.getItem("usuarioAtual");

    if (usuarioAtual) {
      return JSON.parse(usuarioAtual).nome;
    } else {
      return ''
    }
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
