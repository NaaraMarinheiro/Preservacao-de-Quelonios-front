import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../ciclo-interface';
import axios from "../../../utils/axios"
import { CicloService } from 'src/app/service/ciclo.service';


@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  // precisa tipar com ainterface, no lugar de any
  public meuArrayDeCiclos:any;

  constructor(private service: CicloService) { }

  async ngOnInit() {
   this.meuArrayDeCiclos= await this.service.listAll();

  }





  // public ciclos = [
  //   {
  //     idCiclo: "101",
  //     nomeCiclo: "Barreirinha 2022",
  //     uf: "AM",
  //     municipio: "Barreirinha",
  //     comunidade: "Comunidade Nova Esperança"
  //   }

  // ];



}
