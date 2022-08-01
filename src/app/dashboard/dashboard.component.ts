import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
