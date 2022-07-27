import { Injectable } from '@angular/core';
import axios from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private urlRelatorioColeta = "http://localhost:8080/api/relatorio/coleta"

  constructor() { }


  async listAll() {
    let result = await axios.get(this.urlRelatorioColeta);
    console.log(result);
    return result.data;
  }
}
