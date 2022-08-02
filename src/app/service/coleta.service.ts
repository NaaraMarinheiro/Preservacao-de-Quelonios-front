import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ColetaService {

  private urlColeta = "http://localhost:8080/api/coleta"

  constructor() { }

  async listAll() { 
    let result = await axios.get(this.urlColeta);
    let arrayDeColeta = result.data._embedded.coletaVOList;

    arrayDeColeta = arrayDeColeta.map((elemento: any)=>{
      let dataSplit = elemento.viagem.dataViagem.split("-")
        elemento.dataFormatada = dataSplit[2] + "/" + dataSplit[1]+ "/" + dataSplit[0];

      return elemento;
    });

    return arrayDeColeta;
  }

  async listByIDColeta(idCiclo:string, idViagem:string, idColeta:string) {
    let result = await axios.get(this.urlColeta + '/' + idColeta);
    return result.data;
  }

  async insert(novaColeta: any) {
    let result = await axios.post(this.urlColeta, novaColeta);
    return result.status;
  }
}
