import { Injectable } from '@angular/core';
import axios from '../utils/axios';


@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  private urlViagem = "http://localhost:8080/api/viagem"

  constructor() { }

  listAll() { }

  async insert(novaViagem: any) {
    let result = await axios.post(this.urlViagem, novaViagem);
    return result.data;
  }

  // ***

  async listByID(idViagem: string) {
    let result = await axios.get(this.urlViagem + '/' + idViagem);
    return result.data;
  }

  // async listByID(idCiclo: string, idViagem: string) {
  //   let result = await axios.get(this.urlCiclo + '/' + idCiclo + '/' + 'viagem' + '/' + idViagem);
  //   return result.data;
  // }

  async update(idViagem: string) {
    let result = await axios.put(this.urlViagem + '/' + 'editar' + idViagem);
    return result.data;
  }

  delete() { }



}
