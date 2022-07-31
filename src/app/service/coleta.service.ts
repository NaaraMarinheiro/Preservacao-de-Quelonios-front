import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ColetaService {

  private urlColeta = "http://localhost:8080/api/coleta"

  constructor() { }

  listAll() { }

  async listByIDColeta(idCiclo:string, idViagem:string, idColeta:string) {
    let result = await axios.get(this.urlColeta + '/' + idColeta);
    return result.data;
  }

  async insert(novaColeta: any) {
    let result = await axios.post(this.urlColeta, novaColeta);
    return result.status;
  }
}
