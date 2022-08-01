import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EclosaoService {

  private urlEclosao = "http://localhost:8080/api/eclosao"

  constructor() { }

  listAll() { }

  async listByIDEclosao(idCiclo:string, idViagem:string, idEclosao:string) {
    let result = await axios.get(this.urlEclosao + '/' + idEclosao);
    return result.data;
  }

  async insert(novaEclosao: any) {
    let result = await axios.post(this.urlEclosao, novaEclosao);
    return result.status;
  }
}
