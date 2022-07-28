import { Injectable } from '@angular/core';
import axios from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  private urlMunicipio = "http://localhost:8080/api/municipio"

  constructor() { }

  //Requisição GET
  async listAll() {
    let result = await axios.get(this.urlMunicipio);
    return result.data;
  }
}
