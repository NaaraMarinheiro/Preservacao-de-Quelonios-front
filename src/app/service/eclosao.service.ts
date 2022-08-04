import { Injectable } from '@angular/core';
import axios from 'axios';
import { AxiosClient } from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class EclosaoService {

  private urlEclosao = "http://localhost:8080/api/eclosao"

  constructor(private meuAxios: AxiosClient) { }

  async listAll() { 

    let result = await this.meuAxios.get(this.urlEclosao);
    let arrayDeEclosao = result.data._embedded.eclosaoVOList;

    arrayDeEclosao = arrayDeEclosao.map((elemento: any)=>{
      let dataSplit = elemento.viagem.dataViagem.split("-")
        elemento.dataFormatada = dataSplit[2] + "/" + dataSplit[1]+ "/" + dataSplit[0];

      return elemento;
    });
    return arrayDeEclosao;
  }

  async listByIDEclosao(idCiclo:string, idViagem:string, idEclosao:string) {
    let result = await this.meuAxios.get(this.urlEclosao + '/' + idEclosao);
    return result.data;
  }

  async insert(novaEclosao: any) {
    let result = await this.meuAxios.post(this.urlEclosao, novaEclosao);
    return result.status;
  }
}
