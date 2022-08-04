import { Injectable } from '@angular/core';
import { AxiosClient } from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class ColetaService {

  private urlColeta = "http://localhost:8080/api/coleta"

  constructor(private meuAxios: AxiosClient) { }

  async listAll() {
    let result = await this.meuAxios.get(this.urlColeta);
    let arrayDeColeta = result.data._embedded.coletaVOList;

    arrayDeColeta = arrayDeColeta.map((elemento: any) => {
      let dataSplit = elemento.viagem.dataViagem.split("-")
      elemento.dataFormatada = dataSplit[2] + "/" + dataSplit[1] + "/" + dataSplit[0];
      return elemento;
    });
    return arrayDeColeta;
  }

  async listByIDColeta(idCiclo: string, idViagem: string, idColeta: string) {
    let result = await this.meuAxios.get(this.urlColeta + '/' + idColeta);
    return result.data;
  }

  async insert(novaColeta: any) {
    let result = await this.meuAxios.post(this.urlColeta, novaColeta);
    return result.status;
  }
}
