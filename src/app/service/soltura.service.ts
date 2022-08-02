import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SolturaService {

  private urlSoltura = "http://localhost:8080/api/soltura"

  constructor() { }

  async listAll() { 
    let result = await axios.get(this.urlSoltura);
    let arrayDeSoltura = result.data._embedded.solturaVOList;

    arrayDeSoltura = arrayDeSoltura.map((elemento: any)=>{
      let dataSplit = elemento.viagem.dataViagem.split("-")
        elemento.dataFormatada = dataSplit[2] + "/" + dataSplit[1]+ "/" + dataSplit[0];

      return elemento;
    });

    return arrayDeSoltura;
  }

  async listByID(idSoltura:string) {
    let result = await axios.get(this.urlSoltura + '/' + idSoltura);
    return result.data;
  }

  async insert(novaSoltura: any) {
    let result = await axios.post(this.urlSoltura, novaSoltura);
    return result.status;
  }
}


