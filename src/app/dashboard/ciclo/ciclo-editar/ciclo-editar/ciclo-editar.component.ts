import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-editar',
  templateUrl: './ciclo-editar.component.html',
  styleUrls: ['./ciclo-editar.component.css']
})
export class CicloEditarComponent implements OnInit {


  public ciclos=[
    {
        idCiclo: "101",
        nome:"Barreirinha 2022",
        estado:"AM",
        municipio:"Barreirinha",
        comunidade:"Comunidade Nova Esperança"
        
    },
    {
      idCiclo: "102",
      nome:"Parintins 2022",
      estado:"AM",
      municipio:"Barreirinha",
      comunidade:"Comunidade Boca dos Currais"
    },
    {
      idCiclo: "103",
      nome:"Careiro 2022",
      estado:"AM",
      municipio:"Careiro Castanho",
      comunidade:"Comunidade Mamori"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
