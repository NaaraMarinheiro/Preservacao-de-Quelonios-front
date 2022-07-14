import { Component, OnInit } from '@angular/core';

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



  constructor() { }

  ngOnInit(): void {
  }

}
