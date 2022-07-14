import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      municipio:"Parintins",
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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Meu id é:", id);
    
  }

}
