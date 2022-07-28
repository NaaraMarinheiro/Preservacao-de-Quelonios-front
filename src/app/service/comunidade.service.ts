import { Injectable } from '@angular/core';
import axios from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class ComunidadeService {

  
  private urlComunidade = "http://localhost:8080/api/comunidade"

  constructor() { }

  // Requisição GET 
  async listAll() {
    let result = await axios.get(this.urlComunidade);
    return result.data;
  }
}
