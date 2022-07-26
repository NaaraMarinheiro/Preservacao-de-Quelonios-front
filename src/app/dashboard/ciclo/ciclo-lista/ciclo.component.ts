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

  // ciclos!: Ciclo[];

  constructor(private service: CicloService) { }

  ngOnInit(): void {
    this.service.listAll();

  }





  public ciclos = [
    {
      idCiclo: "101",
      nomeCiclo: "Barreirinha 2022",
      uf: "AM",
      municipio: "Barreirinha",
      comunidade: "Comunidade Nova Esperança"
    }

  ];



}
