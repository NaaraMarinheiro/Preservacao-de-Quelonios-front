import { Component, OnInit } from '@angular/core';
import { CicloService } from '../services/ciclo.service';
import { Ciclo } from './ciclo';
import axios from "../../../utils/axios"

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

    ciclos!: Ciclo[];
  
    constructor(  private service:CicloService) { }

    ngOnInit(): void {

    }
  //   public ciclos=[
  //     {
  //         idCiclo: "101",
  //         nome:"Barreirinha 2022",
  //         estado:"AM",
  //         municipio:"Barreirinha",
  //         comunidade:"Comunidade Nova Esperança"

  //     },
  //     {
  //       idCiclo: "102",
  //       nome:"Parintins 2022",
  //       estado:"AM",
  //       municipio:"Parintins",
  //       comunidade:"Comunidade Boca dos Currais"
  //     },
  //     {
  //       idCiclo: "103",
  //       nome:"Careiro 2022",
  //       estado:"AM",
  //       municipio:"Careiro Castanho",
  //       comunidade:"Comunidade Mamori"
  //     }
  // ];



}
