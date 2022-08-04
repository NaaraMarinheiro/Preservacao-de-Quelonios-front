import { Injectable } from '@angular/core';
import { AxiosClient } from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class ComunidadeService {

  private urlComunidade = "http://localhost:8080/api/comunidade"

  constructor(private meuAxios: AxiosClient) { }

  async listAll() {
    let result = await this.meuAxios.get(this.urlComunidade);
    return result.data;
  }
}
