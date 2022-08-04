import { Injectable } from '@angular/core'; 
import { AxiosClient } from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  private urlMunicipio = "http://localhost:8080/api/municipio"

  constructor(private meuAxios: AxiosClient) { }

  //Requisição GET
  async listAll() {
    let result = await this.meuAxios.get(this.urlMunicipio);
    return result.data;
  }
}
