import { Injectable } from '@angular/core';
import { AxiosClient } from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {

  private urlRelatorioColeta = "http://localhost:8080/api/relatorio/coleta"
  private urlRelatorioEclosao = "http://localhost:8080/api/relatorio/eclosao"
  private urlRelatorioSoltura = "http://localhost:8080/api/relatorio/soltura"

  constructor(private meuAxios: AxiosClient) { }


  async gerarPdfColeta() {

    let result = await this.meuAxios.get(this.urlRelatorioColeta, 
      { headers: { 'Accept': 'application/pdf' }, responseType: 'blob'});
    console.log(result);
    return result.data;
  }
  async gerarPdfEclosao() {

    let result = await this.meuAxios.get(this.urlRelatorioEclosao, 
      { headers: { 'Accept': 'application/pdf' }, responseType: 'blob'});
    console.log(result);
    return result.data;
  }
  async gerarPdfSoltura() {

    let result = await this.meuAxios.get(this.urlRelatorioSoltura, 
      { headers: { 'Accept': 'application/pdf' }, responseType: 'blob'});
    console.log(result);
    return result.data;
  }


}
